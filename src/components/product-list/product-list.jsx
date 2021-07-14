import PropTypes from 'prop-types';
import ProductListItem from './product-list-item';
import style from './product-list.module.css';


const ProductList = (props) => {
    // On recupere la liste JS et la transformer en JSX
    const productsJSX = props.products.map(
        p => <ProductListItem key={p.id} {...p} />
    );

    // Il faut toujours renvoyer un seul element
    // Pour evité les 'div' vous pouvez utiliser un fragement <>...</>
    return (
        <>
            <h2>Liste de produit</h2>
            <ul className={style.productList}>
                {productsJSX}
            </ul>
        </>
    );
}

ProductList.defaultProps = {
    products: []
};

ProductList.propTypes = {
    products: PropTypes.array
};

export default ProductList;