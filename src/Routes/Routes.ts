import { IRoute } from "../Types/Route.types";
import { About, Blog, MainView } from "../Views";

const Routes: IRoute[] = [
    {
        name: 'Home',
        path: '/',
        visible: true,
        component: MainView
    },
    {
        name: 'About',
        path: 'aboutMe',
        visible: true,
        scrollable: true
    },
    {
        name: 'Projects',
        path: '/projects',
        visible: false
    },
    {
        name: 'Blog',
        path: '/blog',
        visible: true,
        component: Blog
    }
]

export default Routes;