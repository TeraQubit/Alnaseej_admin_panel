import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes: [

        // Dashboards

   //     {
    //        path: '/',
    //        name: 'analytics',
    //        component: () => import('../DemoPages/Dashboards/Analytics.vue'),
   //     },

        // Pages

        {
            path: '/login',
            name: 'login',
            meta: {layout: 'userpages'},
            component: () => import('../pages/login.vue'),
            beforeEnter(to, from, next) {
                if (!localStorage.getItem('token')) {
                  next()
                } else {
                  next({
                    name: "users" 
                  });
                }}
            
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => import('../pages/logout.vue'),
            
        },
        // services
        {
            path: '/manage_services',
            name: 'manage_services',
            component: () => import('../pages/manage_services.vue'),
            
        },
        {
            path: '/add_service',
            name: 'add_service',
            component: () => import('../pages/add_service.vue'),
            
        },
        // products
        {
            path: '/products/:id',
            component: () => import('../pages/products.vue'),
            
        },
        {
            path: '/add_product/:id',
            component: () => import('../pages/add_product.vue'),
            
        },
        // users
        {
            path: '/users',
            name: 'users',
            component: () => import('../pages/users.vue'),
            beforeEnter(to, from, next) {
                if (localStorage.getItem('token')) {
                  next()
                } else {
                  next({
                    name: "login" 
                  });
                }}
        },
        // payment
        {
            path: '/payment',
            name: 'payment',
            component: () => import('../pages/payment.vue'),
            beforeEnter(to, from, next) {
                if (localStorage.getItem('token')) {
                  next()
                } else {
                  next({
                    name: "login" 
                  });
                }}

        },
        // delivery boys
        {
            path: '/delivery_boys',
            name: 'delivery_boys',
            component: () => import('../pages/delivery_boys.vue'),
            beforeEnter(to, from, next) {
                if (localStorage.getItem('token')) {
                  next()
                } else {
                  next({
                    name: "login" 
                  });
                }}
        },
        {
            path: '/register_delivery_boy',
            name: 'register_delivery_boy',
            component: () => import('../pages/register_delivery_boy.vue'),
            beforeEnter(to, from, next) {
                if (localStorage.getItem('token')) {
                  next()
                } else {
                  next({
                    name: "login" 
                  });
                }}
        },
        // info
        {
            path: '/info',
            name: 'info',
            component: () => import('../pages/info.vue'),
            beforeEnter(to, from, next) {
                if (localStorage.getItem('token')) {
                  next()
                } else {
                  next({
                    name: "login" 
                  });
                }}
        },
        
        {
            path: '/edit_info',
            name: 'edit_info',
            component: () => import('../pages/edit_info.vue'),
            beforeEnter(to, from, next) {
                if (localStorage.getItem('token')) {
                  next()
                } else {
                  next({
                    name: "login" 
                  });
                }}
        },
        // subscriptions
        {
            path: '/subscriptions',
            name: 'subscriptions',
            component: () => import('../pages/subscriptions.vue'),
            beforeEnter(to, from, next) {
                if (localStorage.getItem('token')) {
                  next()
                } else {
                  next({
                    name: "login" 
                  });
                }}
        },
        {
            path: '/add_subscriptions',
            name: 'add_subscriptions',
            component: () => import('../pages/add_subscriptions.vue'),
            beforeEnter(to, from, next) {
                if (localStorage.getItem('token')) {
                  next()
                } else {
                  next({
                    name: "login" 
                  });
                }}
        },
        // orders
        {
            path: '/active_orders',
            name: 'active_orders',
            component: () => import('../pages/active_orders.vue'),
            beforeEnter(to, from, next) {
                if (localStorage.getItem('token')) {
                  next()
                } else {
                  next({
                    name: "login" 
                  });
                }}
        },
        {
            path: '/delivered_orders',
            name: 'delivered_orders',
            component: () => import('../pages/delivered_orders.vue'),
            beforeEnter(to, from, next) {
                if (localStorage.getItem('token')) {
                  next()
                } else {
                  next({
                    name: "login" 
                  });
                }}
        },
        {
            path: '/assign_order',
            name: 'assign_order',
            component: () => import('../pages/assign_order.vue'),
            beforeEnter(to, from, next) {
                if (localStorage.getItem('token')) {
                  next()
                } else {
                  next({
                    name: "login" 
                  });
                }}
        },
        {
            path: '/orders_in_day',
            name: 'orders_in_day',
            component: () => import('../pages/orders_in_day.vue'),
            beforeEnter(to, from, next) {
                if (localStorage.getItem('token')) {
                  next()
                } else {
                  next({
                    name: "login" 
                  });
                }}
        },
        // coupons
        {
            path: '/coupons',
            name: 'coupons',
            component: () => import('../pages/coupons.vue'),
            beforeEnter(to, from, next) {
                if (localStorage.getItem('token')) {
                  next()
                } else {
                  next({
                    name: "login" 
                  });
                }}
        },
        {
            path: '/add_coupon',
            name: 'add_coupon',
            component: () => import('../pages/add_coupon.vue'),
            beforeEnter(to, from, next) {
                if (localStorage.getItem('token')) {
                  next()
                } else {
                  next({
                    name: "login" 
                  });
                }}
        },
        

    
    ]
})
