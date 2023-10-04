import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="menu">
                    <ul>
                        <li>
                            <Link to={"/"} title="Home">
                                <span><i className="icofont-ui-home"></i>
                                <h6 className="sidebar-title">Home</h6></span>


                            </Link>
                        </li>
                        <li><Link to={"/trade"} title="Trade">
                            <span><i className="icofont-chart-arrows-axis"></i>
                            <h6 className="sidebar-title">Trade</h6></span>
                        </Link>
                        </li>
                        <li><Link to={"/wallet"} title="Wallet">
                            <span><i className="icofont-wallet"></i>
                            <h6 className="sidebar-title">Wallet</h6></span>
                        </Link>
                        </li>
                        <li><Link to={"/price"} title="Price">
                            <span><i className="icofont-price"></i>
                            <h6 className="sidebar-title">Price</h6></span>
                        </Link>
                        </li>
                        <li><Link to={"/settings-profile"} title="Settings">
                            <span><i className="icofont-ui-settings"></i>
                            <h6 className="sidebar-title">Settings</h6></span>
                        </Link>
                        </li>
                        <li className="logout"><Link to={"/signin"}
                            title="Signout">
                            <span><i className="icofont-power"></i>
                            <h6 className="sidebar-title">Signout</h6></span>
                        </Link>
                        </li>
                    </ul>

                    <p className="copyright">
                        &#169; <Link to={"/#"}>MKrypto</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Sidebar;