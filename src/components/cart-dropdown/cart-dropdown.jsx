import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {CartDropDownComtainer, EmptyMessage, CartItems}  from'./cart-dropdown.styles';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import { CartContext } from '../../context/cartContext';

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate("/checkout");
    }

    return (
        <CartDropDownComtainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)

                    ) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )

                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
        </CartDropDownComtainer>
    )
}
export default CartDropdown;