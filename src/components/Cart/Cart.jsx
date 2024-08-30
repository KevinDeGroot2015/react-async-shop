import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { createPortal } from "react-dom";

export default function Cart() {
    const cartitems = useSelector((state) => state.cart.cartItems);
    return createPortal(
        <Card className={classes.cart}>
            <h2>Your Shopping Cart {cartitems.length === 0 && "is empty"}</h2>
            <ul>
                {cartitems.map((product) => {
                    return (
                        <CartItem
                            key={product.id}
                            item={{
                                id: product.id,
                                title: product.title,
                                quantity: product.quantity,
                                total: product.totalprice,
                                price: product.price,
                            }}
                        />
                    );
                })}
            </ul>
        </Card>,
        document.getElementById("cartPortal")
    );
}
