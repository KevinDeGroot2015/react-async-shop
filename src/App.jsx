import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import "./index.css";
import { useEffect, useState } from "react";

export default function App() {
    const showCart = useSelector((state) => state.cart.showCart);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.cart.notification);

    const [dummyProducts, setDummyProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapiserver.reactbd.com/products")
            .then((res) => res.json())
            .then(setDummyProducts);
    }, []);

    useEffect(() => {
        const pushfirebaseConnection = async () => {
            const response = await fetch(
                "https://react-async-shop-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify(cart),
                }
            );

            if (!response.ok) {
                throw new Error("Couldnt load data!");
            }
        };

        pushfirebaseConnection();
    }, [cart]);

    useEffect(() => {
        const getfirebaseConnection = async () => {
            const response = await fetch(
                "https://react-async-shop-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
            );

            if (!response.ok) {
                throw new Error("Couldnt load data!");
            }

            const data = await response.json();

            return data;
        };

        getfirebaseConnection();
    }, []);

    return (
        <>
            <Layout>
                {showCart && <Cart />}
                <Products products={dummyProducts} />
            </Layout>
        </>
    );
}
