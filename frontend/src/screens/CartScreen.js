import './CartScreen.css'

import '../components/CartItem';
import CartItem from '../components/CartItem';


const CartScreen = ()=>{
    return(
        <div className='cartscreen'>
            <div className='cartscreen__left'>
                <h2> Shopping Cart</h2>
                <CartItem/>
            </div>
            <div className='cartscreen__right'>
                <div className='cartscreen__info'>
                    <p> Subtotal(0) Items </p>
                    <p>  $499.99 </p>
                </div>
                <div>
                    <button> Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}
export default CartScreen;