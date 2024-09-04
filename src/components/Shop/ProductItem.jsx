import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../Store/cartSlice";

export default function ProductItem({ id, title, price, description }) {
    const dispatch = useDispatch();

    function addProductHandler() {
        dispatch(
            cartActions.addProductToCart({ id, title, description, price })
        );
    }

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={addProductHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
}
