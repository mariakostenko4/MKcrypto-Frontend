import React, { useState } from 'react';
import Header from '../layout/header'
import Sidebar from '../layout/sidebar';
import SubMenu from '../element/sub-menu';
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import checkimg from '../../images/routing.png'
import emailqrcode from '../../images/email-qrcode.png'
import instagramqrcode from '../../images/instagram-qrcode.png'
import telqrcode from '../../images/tel-qrcode.png'
import telegramqrcode from '../../images/telegram-qrcode.png'
import CopyButton from './copy-button';

const SettingsPaymentMethod = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    return (
        <><Header />
            <Sidebar />
            <div className="content-body">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">

                            <div className="card">
                                <div className="card-header">
                                    <SubMenu />
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-header px-0">
                                                    <h4 className="card-title">Add a payment method </h4>

                                                </div>
                                                <div className="card-body px-0">
                                                    <div
                                                        className="verify-content">
                                                        <div className="d-flex align-items-center">
                                                            <span className="mr-3 icon-circle bg-primary text-white"><i className="icofont-ui-touch-phone"></i></span>
                                                            <div className="primary-number">
                                                                <h4 className="mb-0">Bank card </h4>


                                                            </div>
                                                        </div>
                                                        <button type="button" className="btn btn-success" onClick={handleShow}>Add New Card</button>
                                                    </div>
                                                    <hr className="dropdown-divider my-4" />
                                                    <div
                                                        className="verify-content">
                                                        <div className="d-flex align-items-center">
                                                            <span className="mr-3 icon-circle bg-primary text-white"><i className="icofont-email"></i></span>
                                                            <div className="primary-number">
                                                                <h4 className="mb-1">IBAN + BIC/SWIFT  + SEPA </h4>
                                                                <p>International transfer</p>
                                                            </div>
                                                        </div>
                                                        <button type="button" className="btn btn-primary" onClick={handleShow1}>Add New Bank</button>
                                                    </div>
                                                     <hr className="dropdown-divider my-4" />
                                                    <div
                                                        className="verify-content">
                                                        <div className="d-flex align-items-center">
                                                            <span className="mr-3 icon-circle bg-primary text-white"><i className="icofont-email"></i></span>
                                                            <div className="primary-number">
                                                                <h4 className="mb-1">Cash</h4>
                                                                <p className="mb-0">Only from the Czech Republic</p>
                                                            </div>
                                                        </div>
                                                        <button type="button" className="btn btn-success" onClick={handleShow2}>View Contacts</button>
                                                    </div>


                                                </div>

                                            </div>


                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="invite-content">
                                                        <h4>Invite a friend and get $30</h4>
                                                        <p>You will receive up to $30 when they：
                                                        1.Buy
                                                        Crypto 2. Deposit 3. Finish Trading Tasks <br /><Link to={"#"}>Learn more</Link>

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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xxl-6 col-xl-6 col-lg-12">

                                            <div className="card">
                                                <a href="/trade" className="card-body">
                                                    <div className="invite-content invite-right">
                                                        <a href="/trade">Deposti Fiat ->> </a>

                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
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
                    <Button variant="primary" onClick={handleClose1}>
                        Close
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
        </>
    );
};

export default SettingsPaymentMethod;


