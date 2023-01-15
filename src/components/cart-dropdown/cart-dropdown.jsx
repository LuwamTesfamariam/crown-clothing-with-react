import { useContext } from 'react';
import './cart-dropdown.styles.scss';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import { CartContext } from '../../context/cartContext';

const CartDropdown = () =>{
    const {cartItems} = useContext(CartContext);
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button> Go to checkout</Button>
        </div>
    )
}
export default CartDropdown;