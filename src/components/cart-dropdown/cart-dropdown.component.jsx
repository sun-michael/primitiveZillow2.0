import "./cart-dropdown.styles.scss";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler} buttonType="primary">
        go to checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
