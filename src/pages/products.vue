<template>
    <div>
        <router-link :to="`/add_product/${$route.params.id}`">
            <button class="btn btn-success mx-1 my-3">
                Add product
            </button>
        </router-link>
        <div
            class="main-card mb-3 card"
            v-for="product in products"
            :key="product.id"
        >
            <div class="text-left">
                <b-img
                    v-if="product.imageUrl"
                    width="100%"
                    :src="product.imageUrl"
                    alt="product image"
                    fluid
                ></b-img>
            </div>

            <div class="card-body">
                <h5 class="card-title">
                    {{ product.title }}
                    <span v-if="product.titleAR">| {{ product.titleAR }}</span>
                </h5>
                <h6 class="card-subtitle font-weight-light text-muted my-3">
                    {{ product.description }}
                </h6>
                <p class="font-weight-bold h4">options</p>

                <div>
                    <b-table
                        striped
                        hover
                        :items="
                            product.productOptionsList.map(item => {
                                return {
                                    Title: item.title,
                                    'Arabic title': item.titleAR,
                                    Price: item.price
                                };
                            })
                        "
                    ></b-table>
                </div>

                <br />
                <button
                    class="btn btn-warning mr-1"
                    v-b-modal.modal
                    @click="selected_product = product"
                >
                    Edit product
                </button>
                <button class="btn btn-danger ml-1" @click="del(product.id)">
                    Delete product
                </button>
            </div>
        </div>
        <b-modal id="modal" title="Edit" hide-footer>
            <form class="" @submit.prevent="edit" ref="form">
                <label for="image" class="">Image</label>

                <b-form-file
                    id="image"
                    placeholder="Choose a image"
                    drop-placeholder="Drop image here..."
                    name="image"
                    v-model="image"
                ></b-form-file>
                <div class="position-relative form-group">
                    <label for="description" class="">Description</label
                    ><input
                        id="description"
                        v-model="selected_product.description"
                        placeholder="Description"
                        class="form-control"
                    />
                </div>

                <div class="position-relative form-group">
                    <label for="title" class="">Title</label
                    ><input
                        id="title"
                        v-model="selected_product.title"
                        placeholder="Title"
                        type="text"
                        class="form-control"
                    />
                </div>
                <template
                    v-for="(option, i) in selected_product.productOptionsList"
                >
                    <div :key="i">
                        <p class="font-weight-bold">
                            <b-button
                                v-if="i != 0"
                                variant="outline-danger"
                                @click="
                                    selected_product.productOptionsList.splice(
                                        i,
                                        1
                                    )
                                "
                                >remove option</b-button
                            >&nbsp; Option #{{ i + 1 }}
                        </p>
                        <div class="position-relative form-group">
                            <label for="title" class="">Title</label
                            ><input
                                id="title"
                                v-model="option.title"
                                placeholder="Title"
                                type="text"
                                class="form-control"
                            />
                        </div>
                        <div class="position-relative form-group">
                            <label for="price" class="">Price</label
                            ><input
                                id="price"
                                v-model="option.price"
                                placeholder="Price"
                                type="number"
                                class="form-control"
                            />
                        </div>
                    </div>
                </template>
                <b-button
                    block
                    variant="outline-primary"
                    @click="
                        selected_product.productOptionsList.push({
                            title: null,
                            price: null
                        })
                    "
                    >Add option</b-button
                >

                <button class="mt-2 btn btn-primary">
                    Edit product
                </button>
            </form>
        </b-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
            selected_product: {},
            image: null
        };
    },
    async mounted() {
        await this.$http
            .get(`/admin/laundry-service/${this.$route.params.id}/products`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then(res => {
                console.log("res", res);
                this.products = res.data;
            });
    },
    methods: {
        async del(id) {
            await this.$http
                .post(`/admin/delete/product/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                })
                .then(() => {
                    alert("Deleted");
                });
        },
        async edit() {
            const fs = new FormData(this.$refs.form);

            fs.append(
                "data",
                JSON.stringify({
                    id: this.selected_product.id,
                    title: this.selected_product.title,
                    active: true,
                    description: this.selected_product.description,
                    productOptionsList: this.selected_product.productOptionsList.map(
                        item => {
                            return {
                                title: item.title,
                                price: item.price,
                                id: item.id
                            };
                        }
                    )
                })
            );
            await this.$http
                .post(`/admin/edit/product/${this.$route.params.id}`, fs, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                })
                .then(res => {
                    alert("Edited");
                    this.image = null;
                });
        }
    }
};
</script>

<style></style>
