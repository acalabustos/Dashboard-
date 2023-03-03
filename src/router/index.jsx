import { createBrowserRouter } from "react-router-dom";
import { productsHandler } from "../handlers/productsHandler";
import Home from '../pages/Home';
import CreateProduct from '../pages/CreateProduct';
import DescriptionProduct from '../pages/DescriptionProduct';
import ProductList from '../pages/ProductList';
import NotFound from "../pages/NotFound";
import { productsHandler } from "../handlers/productsHandler";
import ProductInfo from "../components/ProductInfo";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                        
                    },
                    {
                        path: '/CreateProduct',
                        element: <CreateProduct />,
                        loader: fetchProduct
                    },
                    {
                        path: "/productInfo/:id",
                        element: <ProductInfo />,
                        loader: fetchProduct
                        
                    },
                    {
                        path: '/productList',
                        element: <ProductList />,
                        loader: fetchProducts
                        
                    }, 

                ]
            },
        ]
    },
]);
async function fetchProducts() {
    const products = await productsHandler.loadProducts();
    return { products };
}
async function fetchProduct({ params }) {
    const product = await productsHandler.loadProduct(params.id);
    return { product };
}