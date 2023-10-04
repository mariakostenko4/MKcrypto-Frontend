import React from 'react';
import Header from '../layout/header'
import Sidebar from '../layout/sidebar';
import DonutChart from '../charts/donut'
import qrImg from '../../images/qr.svg'
import PerfectScrollbar from 'react-perfect-scrollbar'
const Wallet = () => {
    return (
        <><Header />
            <Sidebar />
            <div className="content-body">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="wallet-widget card">
                                <p>$ Balance</p>
                                <h2><span className="text-primary">0.000</span> <sub>USD</sub></h2>
                                <a href="/trade"><span className="wallet warning-arrow blue-arrow "><i className="icofont-arrow-left"></i>Deposit Fiat</span></a>

                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="wallet-widget card">
                                <p>€ Balance</p>
                                <h2><span className="text-success">0.000</span> <sub>EUR</sub></h2>
                                 <a href="/trade"><span className="wallet warning-arrow blue-arrow "><i className="icofont-arrow-left"></i>Deposit Fiat</span></a>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="wallet-widget card">
                                <p>Kč Balance</p>
                                <h2><span className="text-warning">0.000</span> <sub>CZK</sub></h2>
                                 <a href="/trade"><span className="wallet warning-arrow blue-arrow "><i className="icofont-arrow-left"></i>Deposit Fiat</span></a>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="wallet-widget card">
                                <p>Tether Balance</p>
                                <h2><span className="text-danger">0.000</span> <sub>USDT</sub></h2>
                                 <a href="/trade"><span className="wallet warning-arrow blue-arrow "><i className="icofont-arrow-left"></i>Deposit Fiat</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-xxl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Wallet Addresses </h4>
                                </div>
                                <div className="card-body">

                                    <div className="table-responsive">
                                        <table className="table table-striped responsive-table">
                                            <thead>
                                                <tr>
                                                    <th>Coin Name</th>
                                                    <th>Address</th>
                                                    <th>QR</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="coin-name">
                                                            <i className="cc BTC"></i>
                                                            <span>Bitcoin</span>
                                                        </div>
                                                    </td>
                                                    <td>35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH</td>
                                                    <td>
                                                        <img className="qr-img" src={qrImg} alt="" width="40" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="coin-name">
                                                            <i className="cc BTC"></i>
                                                            <span>Bitcoin</span>
                                                        </div>
                                                    </td>
                                                    <td>35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH</td>
                                                    <td>
                                                        <img className="qr-img" src={qrImg} alt="" width="40" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="coin-name">
                                                            <i className="cc BTC"></i>
                                                            <span>Bitcoin</span>
                                                        </div>
                                                    </td>
                                                    <td>35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH</td>
                                                    <td>
                                                        <img className="qr-img" src={qrImg} alt="" width="40" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="coin-name">
                                                            <i className="cc BTC"></i>
                                                            <span>Bitcoin</span>
                                                        </div>
                                                    </td>
                                                    <td>35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH</td>
                                                    <td>
                                                        <img className="qr-img" src={qrImg} alt="" width="40" />
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
                                    <h4 className="card-title">Balance</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div className="balance-chart">
                                                <DonutChart />
                                                <h4>Total Balance = $ 5360</h4>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">

                                            <ul className="balance-widget">
                                                <li>
                                                    <div className="icon-title">
                                                        <i className="cc BTC"></i>
                                                        <span>Bitcoin</span>
                                                    </div>
                                                    <div className="text-right">
                                                        <h5>0.000242 BTC</h5>
                                                        <span>0.125 USD</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon-title">
                                                        <i className="cc USDT"></i>
                                                        <span>Tether</span>
                                                    </div>
                                                    <div className="text-right">
                                                        <h5>0.000242 USDT</h5>
                                                        <span>0.125 USD</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon-title">
                                                        <i className="cc XTZ"></i>
                                                        <span>Tezos</span>
                                                    </div>
                                                    <div className="text-right">
                                                        <h5>0.000242 XTZ</h5>
                                                        <span>0.125 USD</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon-title">
                                                        <i className="cc XMR"></i>
                                                        <span>Monero</span>
                                                    </div>
                                                    <div className="text-right">
                                                        <h5>0.000242 XMR</h5>
                                                        <span>0.125 USD</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon-title">
                                                        <i className="cc XMR"></i>
                                                        <span>Monero</span>
                                                    </div>
                                                    <div className="text-right">
                                                        <h5>0.000242 XMR</h5>
                                                        <span>0.125 USD</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon-title">
                                                        <i className="cc USDT"></i>
                                                        <span>Tether</span>
                                                    </div>
                                                    <div className="text-right">
                                                        <h5>0.000242 USDT</h5>
                                                        <span>0.125 USD</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon-title">
                                                        <i className="cc USDT"></i>
                                                        <span>Tether</span>
                                                    </div>
                                                    <div className="text-right">
                                                        <h5>0.000242 USDT</h5>
                                                        <span>0.125 USD</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="row">
                        <div className="col-xxl-12 col-xl-8">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Transaction</h4>

                                </div>
                                <div className="card-body">
                                    <div className="table-responsive transaction-table">
                                        <table className="table table-striped responsive-table">
                                            <thead>
                                                <tr>
                                                    <th>Ledger ID</th>
                                                    <th>Date</th>
                                                    <th>Type</th>
                                                    <th>Currency</th>
                                                    <th>Amount</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>523640</td>
                                                    <td>January 15</td>
                                                    <td>
                                                        <span className="danger-arrow"><i className="icofont-arrow-down"></i>
                                                        Sell</span>
                                                    </td>
                                                    <td className="coin-name">
                                                        <i className="cc BTC"></i> Bitcoin
                                                </td>
                                                    <td className="text-danger">-0.000242 BTC</td>

                                                    <td ><strong className="text-success"> Completed</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>523640</td>
                                                    <td>January 15</td>
                                                    <td><span className="success-arrow"><i
                                                        className="icofont-arrow-up"></i>Buy</span>
                                                    </td>
                                                    <td className="coin-name">
                                                        <i className="cc LTC"></i> Litecoin
                                                </td>
                                                    <td className="text-success">+0.000242 BTC</td>

                                                    <td ><strong className="text-success"> Completed</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>523640</td>
                                                    <td>January 15</td>
                                                    <td><span className="success-arrow"><i
                                                        className="icofont-arrow-up"></i>Buy</span>
                                                    </td>
                                                    <td className="coin-name">
                                                        <i className="cc XRP"></i> Ripple
                                                </td>
                                                    <td className="text-success">+0.000242 BTC</td>

                                                     <td ><strong className="text-success"> Completed</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>523640</td>
                                                    <td>January 15</td>
                                                    <td><span className="success-arrow"><i
                                                        className="icofont-arrow-up"></i>Buy</span>
                                                    </td>
                                                    <td className="coin-name">
                                                        <i className="cc DASH"></i> Dash
                                                </td>
                                                    <td className="text-success">+0.000242 BTC</td>

                                                    <td ><strong className="text-success"> Completed</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>523640</td>
                                                    <td>January 15</td>
                                                    <td><span className="success-arrow"><i
                                                        className="icofont-arrow-up"></i>Buy</span>
                                                    </td>
                                                    <td className="coin-name">
                                                        <i className="cc LTC"></i> Litecoin
                                                </td>
                                                    <td className="text-success">+0.000242 BTC</td>

                                                    <td ><strong className="text-success"> Completed</strong></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Wallet;