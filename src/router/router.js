import Users from "../components/Users/Users";
import Login from "../components/Login/Login";
import InDev from "../components/common/InDev";
import Messenger from "../components/Messenger/Messenger";

const routes = [

    {path: "/dialogs", element: <Messenger/>},
    {path: "/users", element: <Users/>},
    {path: "/login", element: <Login/>},
    {path: "/news", element: <InDev/>},
    {path: "/music", element: <InDev/>},
    {path: "/settings", element: <InDev/>},

];

export default routes;
