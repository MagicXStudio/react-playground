import { connect } from 'react-redux';
import { CartState } from '../features/cart/reducer';
import { cartActions } from '../features/cart';
import { FCCart } from '../components/FCCart/fc-cart';

const mapStateToProps = (state: CartState) => ({
    count: 0,
});

const mapDispatchProps = {
    onAddToCart: cartActions.addToCart,
};

const FCCartConnected = connect(
    mapStateToProps,
    mapDispatchProps
)(FCCart);

export default FCCartConnected;
