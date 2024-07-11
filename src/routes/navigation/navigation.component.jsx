import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import Logo from "../../assets/logo_nb.svg";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  //   console.log("currentUser", currentUser);
  const signOutHandler = async () => {
    const res = await signOutUser();
    console.log("res=", res);
    setCurrentUser(null);
  };

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
                    onClick={signOutHandler}
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
          </div>
        </nav>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
