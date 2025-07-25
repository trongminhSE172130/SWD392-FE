import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import ProductPage from "../page/ProductPage";
import RootLayout from "../layout/RootLayout";
import Cart from "../page/Cart";
import ProductDetailPage from "../page/ProductDetailPage";
import Loading from "../Loading/Loading";
import Payment from "../page/payment/Payment";
import Detail from "../components/ProductDetailPage/Detail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Loading>
        <RootLayout />
      </Loading>
    ),
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/product/:id",
        // element: <ProductDetailPage />,
        element: <Detail />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
]);
