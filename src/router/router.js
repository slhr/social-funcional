import Users from "../components/Users/Users";
import Login from "../components/Login/Login";
import InDev from "../components/common/InDev";

const routes = [

    {path: "/dialogs", element: <InDev />},
    {path: "/users", element: <Users />},
    {path: "/login", element: <Login />},
    {path: "/news", element: <InDev />},
    {path: "/music", element: <InDev />},
    {path: "/settings", element: <InDev />},

];

export default routes;
