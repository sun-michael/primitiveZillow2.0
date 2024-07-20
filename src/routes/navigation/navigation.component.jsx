import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

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
              <Link class="nav-item" to="/movers">
                <a class="nav-link active" aria-current="page">
                  movers
                </a>
              </Link>
            </ul>
            {currentUser ? (
              <ul class="navbar-nav">
                <Link class="nav-item" to="/auth">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    onClick={signOutUser}
                  >
                    sign out
                  </a>
                </Link>
              </ul>
            ) : (
              <ul class="navbar-nav">
                <Link class="nav-item" to="/auth">
                  <a class="nav-link active" aria-current="page">
                    sign in
                  </a>
                </Link>
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
