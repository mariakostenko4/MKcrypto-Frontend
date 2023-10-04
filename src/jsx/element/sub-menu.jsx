import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// const SubMenu = () => {
//     return (
//         <>
//
//             <div className="settings-menu">
//                 <Link to={"/settings-profile"}>Profile</Link>
// {/*                 <Link to={"/settings-application"}>Application</Link> */}
//                 <Link to={"/settings-security"}>Security</Link>
// {/*                 <Link to={"/settings-activity"}>Activity</Link> */}
// {/*                 <Link to={"/settings-privacy"}>Privacy</Link> */}
//                 <Link to={"/settings-payment-method"}>Payment Method</Link>
// {/*                 <Link to={"/settings-api"}>API</Link> */}
//                 <Link to={"/settings-fees"}>Fees</Link>
//             </div>
//         </>
//     );
// };
//
// export default SubMenu;




const SubMenu = () => {
    return (
        <div className="settings-menu">
            <NavLink to="/settings-profile" activeClassName="active"><i className="icofont-ui-user icofont-2x"></i> Profile</NavLink>
            <NavLink to="/settings-security" activeClassName="active"><i className="icofont-id-card icofont-2x"></i>Security</NavLink>
            <NavLink to="/settings-payment-method" activeClassName="active"><i className="icofont-credit-card icofont-2x"></i>Payment Method</NavLink>
            <NavLink to="/settings-fees" activeClassName="active"><i className="icofont-papers icofont-2x"></i>Fees</NavLink>
        </div>
    );
};

export default SubMenu;


// export const SubMenuTrade = () => {
//     return (
//         <>
//             <div className="settings-menu">
//                 <Link to={"/trade"}><span className="success-arrow"><i className="icofont-arrow-up"></i>Buy</span></Link>
//                 <Link to={"/trade-sell"}><span className="danger-arrow"><i className="icofont-arrow-down"></i>Sell</span></Link>
//                 <Link to={"/trade-transfer"}><span className="warning-arrow"><i className="icofont-arrow-right"></i>Withdraw</span></Link>
//                 <Link to={"/trade-convert"}><span className="warning-arrow"><i className="icofont-arrow-left arrow"></i><i className="icofont-arrow-right arrow"></i>Convert</span></Link>
//                 <Link to={"/trade-deposit"}><span className="warning-arrow blue-arrow "><i className="icofont-arrow-left"></i>Deposit Fiat</span></Link>
//             </div>
//         </>
//     );
// };
export const SubMenuTrade = () => {
    return (
        <div className="settings-menu">
            <NavLink to="/trade" activeClassName="active"><span className="success-arrow"><i className="icofont-arrow-up"></i>Buy</span></NavLink>
            <NavLink to="/trade-sell" activeClassName="active"><span className="danger-arrow"><i className="icofont-arrow-down"></i>Sell</span></NavLink>
            <NavLink to="/trade-transfer" activeClassName="active"><span className="warning-arrow"><i className="icofont-arrow-right"></i>Withdraw</span></NavLink>
            <NavLink to="/trade-convert" activeClassName="active"><span className="warning-arrow"><i className="icofont-arrow-left arrow"></i><i className="icofont-arrow-right arrow"></i>Convert</span></NavLink>
            <NavLink to="/trade-deposit" activeClassName="active"><span className="warning-arrow blue-arrow "><i className="icofont-arrow-left"></i>Deposit Fiat</span></NavLink>
        </div>
    );
};
