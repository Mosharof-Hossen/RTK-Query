import App from "@/App";
import Tasks from "@/pages/Tasks";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Tasks></Tasks>
            }
        ]
    }
])

export default router;