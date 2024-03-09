import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Error from "./pages/Error";
import Expenses, { expensesAction, expensesLoader } from "./pages/Expenses";
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage";

//library
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Routes
import Dashboard, { dashboardLoader, dashboardAction } from "./pages/Dashboard";

//Actions
import { logoutAction } from "./actions/logout";
import { deleteBudget } from "./actions/deleteBudget";

//layouts
import Main, { mainLoader } from "./layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "expenses",
        element: <Expenses />,
        loader: expensesLoader,
        action: expensesAction,
        errorElement: <Error />,
      },
      {
        path: "budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
        children: [
          {
            path: "delete",
            action: deleteBudget,
          },
        ],
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
