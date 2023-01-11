import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.style.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrownLogo  className="logo" />
                </Link>
                <div className="nav-links-container"></div>
                <Link className="nav-link" to="/shop">
                    SHOP
                </Link>
                <Link className="nav-link" to="/login">
                    LOGIN
                </Link>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;