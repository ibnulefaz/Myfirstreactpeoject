import { createrowerRouter } from "react-router-dom";
import Root from "../components/layout/Root";

const router = createrowserRouter([
    {
        path: "/",
        component: <Root />,
        children: [
            {
                index: true,
                Component: Home,

            },
            {
                path: 'products',
                component: products
            },
            {
                path: 'logs',
                component: logs
            },
            {
                path: 'contact',
                component: contact
            },
            path: 'Aout',
            component: component
        },
    {
        path: 'login'
            component: Login,
    },
    {
        path; 'register'
            component: Register

    }

]
        ]
    }
]);

export defaultn //router