import Admin from "./pages/Admin"
import {ADMIN_ROUTE, MAIN_ROUTE} from "./utils/constants";
import Profile from "./pages/Profile";



export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    },
    {
        path: MAIN_ROUTE,
        Component: <Profile/>
    }
]


// export const authNavbar = [
//     {
//         link: TASKS_ROUTE,
//         name: 'Задания'
//     },
//     {
//         link: PROFILE_ROUTE,
//         name: 'Личный кабинет'
//     }
// ]