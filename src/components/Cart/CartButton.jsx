import classes from "./CartButton.module.css";
import { cartActions } from "../../Store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CartButton() {
    const dispatch = useDispatch();

    const showCartQuantity = useSelector((state) => state.cart.cartItems);

    function toggleCartHandler() {
        dispatch(cartActions.togglecart());
    }

    return (
        <button onClick={toggleCartHandler} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>{showCartQuantity.length}</span>
        </button>
    );
}
