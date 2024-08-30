import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

export default function Products({ products }) {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {products.map((product) => {
                    return (
                        <ProductItem
                            key={product._id}
                            id={product._id}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                        />
                    );
                })}
            </ul>
        </section>
    );
}
