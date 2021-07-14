import PropTypes from 'prop-types';
import style from './product-list.module.css';

const ProductListItem = (props) => {
    const {name, price, onSale} = props;

    const priceStyle = !onSale ? style.price : `${style.price} ${style.priceSale}`;

    return (
        <li className={style.product}>
            <div className={style.productName}>{name}</div>
            <div>Prix : <span className={priceStyle}>{price}</span></div>
        </li>
    )
}

ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onSale: PropTypes.bool.isRequired
}

export default ProductListItem;