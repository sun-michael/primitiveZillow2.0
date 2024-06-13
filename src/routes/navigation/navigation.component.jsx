import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import Logo from '../../assets/logo_nb.svg';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">       
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <div class="container">
                            <Link className="navbar-brand" to="/">
                                <img src={Logo} alt="Bootstrap" width="30" height="24"/>
                            </Link>
                        </div>
                            <ul class="navbar-nav">
                                <Link class="nav-item" to="/movers">
                                    <a class="nav-link active" aria-current="page" >movers</a>
                                </Link>
                            </ul>
                    </div>
                </nav>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;