import Profile from "../components/Profile/Profile";
import Dialogs from "../components/Dialogs/Dialogs";
import Users from "../components/Users/Users";
import Login from "../components/Login/Login";
import News from "../components/News/News";
import Music from "../components/Music/Music";
import Settings from "../components/Settings/Settings";

const routes = [
    {path: "/profile", element: <Profile />},
    {path: "/dialogs", element: <Dialogs />},
    {path: "/users", element: <Users />},
    {path: "/login", element: <Login />},
    {path: "/news", element: <News />},
    {path: "/music", element: <Music />},
    {path: "/settings", element: <Settings />},

];

export default routes;
