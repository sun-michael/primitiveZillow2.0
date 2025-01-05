import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { NavigationContainer } from "./navigation.styles.scss";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import CardIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import Logo from "../../assets/logo_nb.svg";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <Fragment>
      <div className="navigation">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img src={Logo} alt="Bootstrap" width="30" height="24" />
              </Link>
            </div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link " to="/shop" aria-current="page">
                  clothing
                </Link>
              </li>
            </ul>{" "}
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link " to="/truck" aria-current="page">
                  trucks
                </Link>
              </li>
            </ul>
            {currentUser ? (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link text-nowrap"
                    aria-current="page"
                    to="/auth"
                    onClick={signOutUser}
                  >
                    sign out
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link text-nowrap"
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
