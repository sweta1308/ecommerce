import './cart.css';

export const CartEmpty = ({display}) => {
    return (
        <div className="cart-menu" style={{display: display}}>
            <p className="head"><strong>Cart</strong></p>
            <hr />
            <p className="empty">Your cart is empty.</p>
        </div>
    )
}