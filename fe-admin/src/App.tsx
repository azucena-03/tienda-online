import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import LoginPage from "./views/LoginPage"
import DashboardPage from "./views/DashboardPage"
import Layout from "./layout/Layout"
import ProductPage from "./views/Products/ProductPage"
import OrderPage from "./views/OrderPage"
import CreatePage from "./views/Products/CreatePage"
import DetailsPage from "./views/Products/DetailsPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/products">
            <Route index element={<ProductPage />} />
            <Route path="new" element={<CreatePage />} />
            <Route path=":id" element={<DetailsPage />} />
          </Route>
          <Route path="/orderlist" element={<OrderPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
