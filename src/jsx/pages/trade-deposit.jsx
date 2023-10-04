import React, { useState } from 'react';
import Header from '../layout/header'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Sidebar from '../layout/sidebar';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'
import BuyModal from '../element/buy-modal'

import checkimg from '../../images/routing.png'
import emailqrcode from '../../images/email-qrcode.png'
import instagramqrcode from '../../images/instagram-qrcode.png'
import telqrcode from '../../images/tel-qrcode.png'
import telegramqrcode from '../../images/telegram-qrcode.png'
import { SubMenuTrade } from '../element/sub-menu';

const TradeDeposit = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
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
                                                    <h4 className="card-title">Deposit Fiat </h4>
                                                </div>
                                                <div className="card-body">
                                                    <form method="post" name="myform" className="currency_validate trade-form row g-3">
                                                        <div className="col-12">
                                                            <label className="form-label">Coin</label>
                                                            <div className="input-group">
                                                                <select className="form-control" name="method">
                                                                    <option value="bank">USD</option>
                                                                    <option value="master">Euro</option>
                                                                </select>
                                                                <input type="text" name="currency_amount" className="form-control"
                                                                    placeholder="0.0214 BTC" />
                                                            </div>



                                                            <label className="radio-pay">
                                                                  <input type="radio" name="radio-group" value="option1"/>
                                                                  <div className="verify-content">
                                                                      <div className="d-flex align-items-center">
                                                                          <span className="mr-3 icon-circle"><i className="icofont-ui-touch-phone"></i></span>
                                                                          <div className="primary-number">
                                                                              <h4 className="mb-0">Bank card </h4>
                                                                              <p className="mb-0">Only from the Czech Republic</p>
                                                                          </div>
                                                                      </div>

                                                                  </div>
                                                                  <button type="button" className="input-group-text ml-5" onClick={handleShow}>Add New Card</button>
                                                                  <hr className="dropdown-divider my-4" />
                                                            </label>

                                                            <label className="radio-pay">
                                                                  <input type="radio" name="radio-group" value="option2"/>
                                                                  <div className="verify-content">
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="mr-3 icon-circle"><i className="icofont-email"></i></span>
                                                                            <div className="primary-number">
                                                                                <h4 className="mb-0">IBAN + BIC/SWIFT  + SEPA </h4>
                                                                                <p className="mb-0">International transfer</p>
                                                                            </div>
                                                                        </div>
                                                                  </div>
                                                                   <button type="button" className="input-group-text ml-3" onClick={handleShow1}>Add New Card</button>
                                                                  <hr className="dropdown-divider my-4" />
                                                            </label>

                                                             <label className="radio-pay">
                                                                  <input type="radio" name="radio-group" value="option2"/>
                                                                    <div className="verify-content">
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="mr-3 icon-circle"><i className="icofont-email"></i></span>
                                                                            <div className="primary-number">
                                                                                <h4 className="mb-0">Cash</h4>
                                                                                <p className="mb-0">Only from the Czech Republic</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                 <button type="button" className="input-group-text ml-5" onClick={handleShow2}>Add New Card</button>
                                                                <hr className="dropdown-divider my-4" />
                                                            </label>

                                                        </div>
                                                        <div className="button-container">
                                                                <button type="button" className="btn btn-primary" onClick={handleShow3}>
                                                                    Sell Now
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
                                    <h4 className="card-title">Sell Transaction</h4>
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
                                                <small className="gray">Example</small>
                                                <tr className="example">
                                                    <td><span className="danger-arrow"><i className="icofont-arrow-down"></i>
                                                        Sold</span>
                                                    </td>
                                                    <td className="coin-name">
                                                        <i className="cc LTC"></i> Litecoin
                                                </td>
                                                    <td>
                                                        Using - Bank *******5264
                                                </td>
                                                    <td className="text-danger">-15.43 LTC</td>
                                                    <td>+1 000 USD</td>
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
                    <Modal.Title>Add Card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form class="identity-upload">
                        <div class="row g-3">
                            <div class="col-xl-12">
                                <label class="form-label">Name on card </label>
                                <input type="text" class="form-control" placeholder="Jannatul Maowa" />
                            </div>
                            <div class="col-xl-12">
                                <label class="form-label">Card number </label>
                                <input type="text" class="form-control" placeholder="5658 4258 6358 4756" />
                            </div>
                            <div class="col-xl-4">
                                <label class="form-label">Expiration </label>
                                <input type="text" class="form-control" placeholder="10/22" />
                            </div>
                            <div class="col-xl-4">
                                <label class="form-label">CVC </label>
                                <input type="text" class="form-control" placeholder="125" />
                            </div>
                            <div class="col-xl-4">
                                <label class="form-label">Postal code </label>
                                <input type="text" class="form-control" placeholder="2368" />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header>
                    <Modal.Title>Add Bank Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="verify-step-6.html" class="identity-upload">
                        <div class="row g-3">
                            <div class="col-xl-12">
                                <label class="form-label">Routing number </label>
                                <input type="text" class="form-control" placeholder="25487" />
                            </div>
                            <div class="col-xl-12">
                                <label class="form-label">Account number </label>
                                <input type="text" class="form-control" placeholder="36475" />
                            </div>
                            <div class="col-xl-12">
                                <label class="form-label">Fulll name </label>
                                <input type="text" class="form-control" placeholder="Jannatul Maowa" />
                            </div>
                            <div class="col-xl-12">
                                <img src={checkimg} alt="" class="img-fluid" />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose1}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header>
                    <Modal.Title>Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <ul>
                        <li><a href="mailto:uctokostenko@gmail.com"><i className="icofont-email mr-1"></i>uctokostenko@gmail.com</a><img src={emailqrcode} alt="" class="contact-qrcode" /></li>
                         <hr className="dropdown-divider my-4" />
                        <li><a href="tel:+420774094930"><i className="icofont-phone mr-1"></i>+420 774 094 930</a> <img src={telqrcode} alt="" class="contact-qrcode" /></li>
                         <hr className="dropdown-divider my-4" />
                        <li> <a href="https://www.instagram.com/mkcrypto.exchange/?hl=es"><i className="icofont-instagram mr-1"></i>Instagram</a><img src={instagramqrcode} alt="" class="contact-qrcode" /></li>
                         <hr className="dropdown-divider my-4" />
                        <li> <a href="https://t.me/mkostenko444"><i className="icofont-telegram mr-1"></i>Telegram</a><img src={telegramqrcode} alt="" class="contact-qrcode" /></li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose2}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show3} onHide={handleClose3}>
                <Modal.Header>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BuyModal />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose3}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default TradeDeposit;