import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { NavigationContainer } from "./navigation.styles.scss";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CardIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import Logo from "../../assets/logo_nb.svg";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div class="container">
              <Link className="navbar-brand" to="/">
                <img src={Logo} alt="Bootstrap" width="30" height="24" />
              </Link>
            </div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link " to="/shop" aria-current="page">
                  shop
                </Link>
              </li>
            </ul>
            {currentUser ? (
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link
                    class="nav-link text-nowrap"
                    aria-current="page"
                    to="/auth"
                    onClick={signOutUser}
                  >
                    sign out
                  </Link>
                </li>
              </ul>
            ) : (
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link
                    class="nav-link text-nowrap"
                    aria-current="page"
                    to="/auth"
                  >
                    sign in
                  </Link>
                </li>
              </ul>
            )}

            <CardIcon />
          </div>
          {isCartOpen && <CartDropdown />}
        </nav>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
