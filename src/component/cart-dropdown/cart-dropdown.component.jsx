import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import {createStructuredSelector} from 'reselect';
import { useNavigate  } from 'react-router-dom';
import './cart-dropdown.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.action';
export const withRouter = (Component) => {
	const Wrapper = (props) => {
		const history = useNavigate();
		return <Component history={history} {...props} />;
	};
	return Wrapper;
};

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?(
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}  />
                ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )
            }
        </div>
        <CustomButton 
        onClick={()=> { 
            history('/checkout');
            dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>
    </div>
)}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));