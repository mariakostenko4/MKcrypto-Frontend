import React, { useState } from 'react';
import Header from '../layout/header'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Sidebar from '../layout/sidebar';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'
import BuyModal from '../element/buy-modal'

import { SubMenuTrade } from '../element/sub-menu';

const TradeConvert= () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <><Header />
            <Sidebar />
            <div className="content-body">
                <div className="container">
                    <div className="row">

                        <div className="col-xxl-12 col-xl-12">

                            <div className="card">
                                <div className="card-header">
                                    <SubMenuTrade/>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="card">
                                                <div className="card-header">

                                                    <h4 className="card-title">Convert</h4>
                                                </div>
                                                <div className="card-body">
                                                    <form method="post" name="myform" className="currency_validate trade-form row g-3">
                                                        <div className="col-12">
                                                            <label className="form-label">From</label>
                                                            <div className="input-group">
                                                                <select className="form-control" name="method">
                                                                    <option value="bank">USD</option>
                                                                    <option value="master">Euro</option>
                                                                </select>
                                                                <input type="text" name="currency_amount" className="form-control"
                                                                    placeholder="0.0214 BTC" />
                                                            </div>
                                                        </div>

                                                        <div className="col-12">
                                                            <label className="form-label">To</label>
                                                            <div className="input-group">
                                                                <select className="form-control" name="method">
                                                                    <option value="bank">BTC</option>
                                                                    <option value="master">ETH</option>
                                                                </select>
                                                                <input type="text" name="currency_amount" className="form-control"
                                                                    placeholder="0.0214 BTC" />
                                                            </div>
                                                        </div>

                                                        <p className="mb-0">1 USD ~ 0,000039 BTC <Link to={"/price"}> Expected rate </Link></p>


                                                       <div className="button-container">
                                                            <button type="button" className="btn btn-primary" onClick={handleShow}>
                                                                Convert Now
                                                            </button>

                                                       </div>

                                                    </form>

                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Convert Transaction</h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped responsive-table">
                                            <thead>
                                                <tr>
                                                    <th>Type</th>
                                                    <th>Coin Name</th>
                                                    <th>Wallet</th>
                                                    <th>Amount</th>
                                                    <th>Balance</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><span className="danger-arrow"><i className="icofont-arrow-down"></i>
                                                        Sold</span>
                                                    </td>
                                                    <td className="coin-name">
                                                        <i className="cc BTC"></i> Bitcoin
                                                </td>
                                                    <td>
                                                        Using - Bank *******5264
                                                </td>
                                                    <td className="text-danger">-0.000242 BTC</td>
                                                    <td>-0.125 USD</td>
                                                </tr>
                                                <tr>
                                                    <td><span className="success-arrow"><i className="icofont-arrow-up"></i>
                                                        Buy</span>
                                                    </td>
                                                    <td className="coin-name">
                                                        <i className="cc LTC"></i> Litecoin
                                                </td>
                                                    <td>
                                                        Using - Card *******8475
                                                </td>
                                                    <td className="text-success">-0.000242 BTC</td>
                                                    <td>-0.125 USD</td>
                                                </tr>
                                                <tr>
                                                    <td><span className="danger-arrow"><i className="icofont-arrow-down"></i>
                                                        Sold</span>
                                                    </td>
                                                    <td className="coin-name">
                                                        <i className="cc XRP"></i> Ripple
                                                </td>
                                                    <td>
                                                        Using - Card *******8475
                                                </td>
                                                    <td className="text-danger">-0.000242 BTC</td>
                                                    <td>-0.125 USD</td>
                                                </tr>
                                                <tr>
                                                    <td><span className="success-arrow"><i className="icofont-arrow-up"></i>
                                                        Buy</span>
                                                    </td>
                                                    <td className="coin-name">
                                                        <i className="cc DASH"></i> Dash
                                                </td>
                                                    <td>
                                                        Using - Card *******2321
                                                </td>
                                                    <td className="text-success">-0.000242 BTC</td>
                                                    <td>-0.125 USD</td>
                                                </tr>
                                                <tr>
                                                    <td><span className="danger-arrow"><i className="icofont-arrow-down"></i>
                                                        Sold</span>
                                                    </td>
                                                    <td className="coin-name">
                                                        <i className="cc BTC"></i> Bitcoin
                                                </td>
                                                    <td>
                                                        Using - Card *******2321
                                                </td>
                                                    <td className="text-danger">-0.000242 BTC</td>
                                                    <td>-0.125 USD</td>
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

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BuyModal />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default TradeConvert;