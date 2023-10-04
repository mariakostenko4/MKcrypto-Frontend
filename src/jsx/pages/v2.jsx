import React from 'react';

import Header from '../layout/header'
import Sidebar from '../layout/sidebar';
import { Link } from 'react-router-dom';
import AreaChart from '../charts/area'
import PriceArea from '../charts/price-area'


import DonutChart from '../charts/donut'
import qrImg from '../../images/qr.svg'
import PerfectScrollbar from 'react-perfect-scrollbar'



import PriceAreaDetails from '../charts/price-area-details'
import CopyButton from './copy-button';
import tokenqrcode from '../../images/token-qr-code.png'

import SubMenu from '../element/sub-menu';

import { Dropdown, } from 'react-bootstrap'

import android from '../../images/android.svg'
import apple from '../../images/apple.svg'

{/* TODO Dont forget uncomment url api in sub-menu.jsx  */}
{/* TODO Dont forget uncomment url privacy in sub-menu.jsx  */}
{/* TODO Dont forget uncomment url application in sub-menu.jsx  */}

const Version2 = () => {
    return (
        <>
            <Header />
            <Sidebar />

            <div className="content-body">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-8">
                             <Dropdown className="notification" alignRight>
                                <Dropdown.Toggle>
                                    <div className="notify-bell" data-toggle="dropdown">
                                        <span><i className="icofont-alarm"></i></span>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="notification-list">
                                    <h4>Announcements</h4>
                                    <div className="lists">
                                        <Link to={"#"} className="">
                                            <div className="d-flex align-items-center">
                                                <span className="mr-3 icon success"><i className="icofont-check"></i></span>
                                                <div>
                                                    <p>Account created successfully</p>
                                                    <span>2020-11-04 12:00:23</span>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to={"#"} className="">
                                            <div className="d-flex align-items-center">
                                                <span className="mr-3 icon fail"><i className="icofont-close"></i></span>
                                                <div>
                                                    <p>2FA verification failed</p>
                                                    <span>2020-11-04 12:00:23</span>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to={"#"} className="">
                                            <div className="d-flex align-items-center">
                                                <span className="mr-3 icon success"><i className="icofont-check"></i></span>
                                                <div>
                                                    <p>Device confirmation completed</p>
                                                    <span>2020-11-04 12:00:23</span>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to={"#"} className="">
                                            <div className="d-flex align-items-center">
                                                <span className="mr-3 icon pending"><i className="icofont-warning"></i></span>
                                                <div>
                                                    <p>Phone verification pending</p>
                                                    <span>2020-11-04 12:00:23</span>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to={"./settings-activity"}>More <i
                                            className="icofont-simple-right"></i>
                                        </Link>

                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>

                        <div className="col-xxl-12 col-xl-8">
                            <div className="card home-chart">
                                <div className="card-header">
                                    <h4 className="card-title home-chart">Analytics</h4>
                                    <select className="form-select" name="report-type" id="report-select">
                                        <option value="1">Bitcoin</option>
                                        <option value="2">Litecoin</option>
                                    </select>

                                </div>
                                <div className="card-body">
                                    <div className=" home-chart-height">
                                        <AreaChart/>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-6 col-xl-4">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Trade Balances</h4>
                                </div>
                                <div className="card-body">
                                    <PerfectScrollbar className="balance-widget trade-balance">
                                        <li>
                                            <h5>Trade Balance</h5>
                                            <div className="text-right">
                                                <h5>$0.0000</h5>
                                                <span>Total margin currency balance.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>Equity</h5>
                                            <div className="text-right">
                                                <h5>$0.0000</h5>
                                                <span>Trade balance combined with unrealized profit/loss</span>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>Used Margin</h5>
                                            <div className="text-right">
                                                <h5>$0.0000</h5>
                                                <span>Total margin amount used in open positions.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>Free Margin</h5>
                                            <div className="text-right">
                                                <h5>$0.0000</h5>
                                                <span>Usable margin balance. Equal to equity minus.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>Margin Level</h5>
                                            <div className="text-right">
                                                <h5>$0.0000</h5>
                                                <span>Percentage ratio of equity to used margin.</span>
                                            </div>
                                        </li>
                                    </PerfectScrollbar>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-4">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Position Valuation</h4>
                                </div>
                                <div className="card-body">
                                    <PerfectScrollbar className="balance-widget position-value">
                                        <li>
                                            <h5>Opening Cost</h5>
                                            <div className="text-right">
                                                <h5>$0.0000</h5>
                                                <span>Original cost of all open positions.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>Current Valuation</h5>
                                            <div className="text-right">
                                                <h5>$0.0000</h5>
                                                <span>Paper valuation of all open positions.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>Profit</h5>
                                            <div className="text-right">
                                                <h5>$0.0000 (0,00%)</h5>
                                                <span>Paper profit of all open positions..</span>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>Loss</h5>
                                            <div className="text-right">
                                                <h5>$0.0000 (0,00%)</h5>
                                                <span>Paper loss of all open positions.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>Fees</h5>
                                            <div className="text-right">
                                                <h5>$0.0000</h5>
                                                <span>Current Fee</span>
                                            </div>
                                        </li>
                                    </PerfectScrollbar>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Balance </h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped responsive-table">
                                            <thead>
                                                <tr>
                                                    <th>Asset</th>
                                                    <th>Balance</th>
                                                    <th>Available</th>
                                                    <th>Locked</th>
                                                    <th>% Gain</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="coin-name">
                                                        <i className="cc BTC"></i>
                                                        <span>Bitcoin</span>
                                                    </td>
                                                    <td>
                                                        0
                                                </td>
                                                    <td>
                                                        0
                                                </td>
                                                    <td>
                                                        0
                                                </td>
                                                    <td className="success-arrow">
                                                        <strong>0.005%</strong>
                                                        <i className="icofont-arrow-up ml-2"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="coin-name">
                                                        <i className="cc BTC"></i>
                                                        <span>Bitcoin</span>
                                                    </td>
                                                    <td>
                                                        0
                                                </td>
                                                    <td>
                                                        0
                                                </td>
                                                    <td>
                                                        0
                                                </td>
                                                    <td className="success-arrow">
                                                        <strong>0.005%</strong>
                                                        <i className="icofont-arrow-up ml-2"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="coin-name">
                                                        <i className="cc BTC"></i>
                                                        <span>Bitcoin</span>
                                                    </td>
                                                    <td>
                                                        0
                                                </td>
                                                    <td>
                                                        0
                                                </td>
                                                    <td>
                                                        0
                                                </td>
                                                    <td className="success-arrow">
                                                        <strong>0.005%</strong>
                                                        <i className="icofont-arrow-up ml-2"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="coin-name">
                                                        <i className="cc BTC"></i>
                                                        <span>Bitcoin</span>
                                                    </td>
                                                    <td>
                                                        0
                                                </td>
                                                    <td>
                                                        0
                                                </td>
                                                    <td>
                                                        0
                                                </td>
                                                    <td className="success-arrow">
                                                        <strong>0.005%</strong>
                                                        <i className="icofont-arrow-up ml-2"></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Deposit </h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped responsive-table">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Type</th>
                                                    <th>Amount</th>
                                                    <th>Date</th>
                                                    <th>Hash</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>12345</td>
                                                    <td className="coin-name">
                                                        <i className="cc BTC"></i>
                                                        <span>Bitcoin</span>
                                                    </td>
                                                    <td>
                                                        0
                                                </td>
                                                    <td>
                                                        Jan 01
                                                </td>
                                                    <td>
                                                        #1236598745565
                                                </td>
                                                    <td>
                                                        Pending
                                                </td>
                                                </tr>
                                                <tr>
                                                    <td>12345</td>
                                                    <td className="coin-name">
                                                        <i className="cc BTC"></i>
                                                        <span>Bitcoin</span>
                                                    </td>
                                                    <td>
                                                        0
                                                </td>
                                                    <td>
                                                        Jan 01
                                                </td>
                                                    <td>
                                                        #1236598745565
                                                </td>
                                                    <td>
                                                        Pending
                                                </td>
                                                </tr>
                                                <tr>
                                                    <td>12345</td>
                                                    <td className="coin-name">
                                                        <i className="cc BTC"></i>
                                                        <span>Bitcoin</span>
                                                    </td>
                                                    <td>
                                                        0
                                                </td>
                                                    <td>
                                                        Jan 01
                                                </td>
                                                    <td>
                                                        #1236598745565
                                                </td>
                                                    <td>
                                                        Pending
                                                </td>
                                                </tr>
                                                <tr>
                                                    <td>12345</td>
                                                    <td className="coin-name">
                                                        <i className="cc BTC"></i>
                                                        <span>Bitcoin</span>
                                                    </td>
                                                    <td>
                                                        0
                                                </td>
                                                    <td>
                                                        Jan 01
                                                </td>
                                                    <td>
                                                        #1236598745565
                                                </td>
                                                    <td>
                                                        Pending
                                                </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="invite-content">
                                        <h4>Invite a friend and get $30</h4>
                                        <p>Know someone curious about crypto? You will receive up to $30 when they：
                                        1.Buy
                                        Crypto 2. Deposit 3. Finish Trading Tasks <br /> <Link to={"#"}>Learn more</Link>

                                        </p>

                                        <div className="copy-link">
                                            <form action="#">
                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                        value="https://www.mkcrypto.io/join/12345" />
                                                    <CopyButton className="input-group-text" text="https://www.mkcrypto.io/join/12345" />
                                                </div>
                                            </form>
                                        </div>

                                        <div className="social-share-link">
                                            <Link to={"#"}><span><i className="icofont-facebook"></i></span></Link>
                                            <Link to={"#"}><span><i className="icofont-twitter"></i></span></Link>
                                            <Link to={"#"}><span><i className="icofont-whatsapp"></i></span></Link>
                                            <Link to={"#"}><span><i className="icofont-telegram"></i></span></Link>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Download App</h4>
                                </div>
                                <div className="card-body">
                                    <div className="app-link">
                                        <h5>Get Verified On Our Mobile App</h5>
                                        <p>Verifying your identity on our mobile app more secure, faster, and reliable.</p>
                                        <Link to={"#"} className="btn btn-primary">
                                            <img src={android} alt="" />
                                        </Link>
                                        <br />
                                        <div className="mt-3"></div>
                                        <Link to={"#"} className="btn btn-primary">
                                            <img src={apple} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-8 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">VERIFY & UPGRADE </h4>
                                </div>
                                <div className="card-body">
                                    <h5>Account Status : <span className="text-warning">Pending <i
                                        className="icofont-warning"></i></span> </h5>
                                    <p>Your account is unverified. Get verified to enable funding, trading, and withdrawal.
                                </p>
                                    <Link to={"#"} className="btn btn-primary"> Get Verified</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Earn 30% Commission </h4>
                                </div>
                                <div className="card-body">
                                    <p>Refer your friends and earn 30% of their trading fees.</p>
                                    <Link to={"#"} className="btn btn-primary"> Referral Program</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Price correlation with </h4>
                                </div>
                                <div className="card-body">
                                    <ul className="balance-widget">
                                        <li>
                                            <div className="icon-title">
                                                <i className="cc BTC"></i>
                                                <span className="text-white">Bitcoin <br /> <small>Moves together</small></span>

                                            </div>
                                            <div className="text-right">
                                                <h5>0.000242 USD</h5>
                                                <span>64% </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon-title">
                                                <i className="cc LTC"></i>
                                                <span className="text-white">Litecoin <br /> <small>Moves together</small></span>
                                            </div>
                                            <div className="text-right">
                                                <h5>0.000242 USD</h5>
                                                <span>0.125 %</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon-title">
                                                <i className="cc XRP"></i>
                                                <span className="text-white">Ripple <br /> <small>Moves together</small></span>
                                            </div>
                                            <div className="text-right">
                                                <h5>0.000242 USD</h5>
                                                <span>0.125 %</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon-title">
                                                <i className="cc DASH"></i>
                                                <span className="text-white">Dash <br /> <small>Moves together</small></span>
                                            </div>
                                            <div className="text-right">
                                                <h5>0.000242 USD</h5>
                                                <span>0.125 %</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon-title">
                                                <i className="cc XRP"></i>
                                                <span className="text-white">Ripple <br /> <small>Moves together</small></span>
                                            </div>
                                            <div className="text-right">
                                                <h5>0.000242 USD</h5>
                                                <span>0.125 %</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon-title">
                                                <i className="cc DASH"></i>
                                                <span className="text-white">Dash <br /> <small>Moves together</small></span>
                                            </div>
                                            <div className="text-right">
                                                <h5>0.000242 USD</h5>
                                                <span>0.125 %</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon-title">
                                                <i className="cc DASH"></i>
                                                <span className="text-white">Dash <br /> <small>Moves together</small></span>
                                            </div>
                                            <div className="text-right">
                                                <h5>0.000242 USD</h5>
                                                <span>0.125 %</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon-title">
                                                <i className="cc DASH"></i>
                                                <span className="text-white">Dash <br /> <small>Moves together</small></span>
                                            </div>
                                            <div className="text-right">
                                                <h5>0.000242 USD</h5>
                                                <span>0.125 %</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Version2;