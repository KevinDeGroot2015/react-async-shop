import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";

export default function MainHeader() {
    return (
        <header className={classes.header} id="cartPortal">
            <h1>Shoppingcart</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton />
                    </li>
                </ul>
            </nav>
        </header>
    );
}
