import './cart-dropdown.styles.scss';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

const CartDropdown = () =>{
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {[].map(item => <CartItem cartItem={item}/>)}
            </div>
            <Button> Go to checkout</Button>
        </div>
    )
}
export default CartDropdown;