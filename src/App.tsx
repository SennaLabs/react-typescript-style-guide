import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AppLayout } from "./components/layout/AppLayout";
import { DocumentPage } from "./pages/DocumentPage";
import { DocumentLayout } from "./components/layout/DocumentLayout";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <AppLayout>
          <Outlet />
        </AppLayout>
      ),
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "docs",
          element: (
            <DocumentLayout>
              <Outlet />
            </DocumentLayout>
          ),
          children: [
            { index: true, element: <Navigate to="/docs/type-inference" /> },
            { path: ":slug", element: <DocumentPage /> },
          ],
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "404",
          element: <NotFoundPage />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="404" />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
