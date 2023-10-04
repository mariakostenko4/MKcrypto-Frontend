import React, { useState } from 'react';
import Header from '../layout/header'

import Sidebar from '../layout/sidebar';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'
import BuyModal from '../element/buy-modal'

import { SubMenuTrade } from '../element/sub-menu';

import Select from 'react-select';

const currencyOptions = [
    {
        value: 'BTC',
        label: (
            <div className="coin-name">
                <i className="cc BTC"></i>
                <span>Bitcoin (BTC)</span>
            </div>
        ),
    },
    {
       value: 'ETH',
       label: (
           <div className="coin-name">
               <i className="cc ETH"></i>
               <span>Ethereum (ETH)</span>
           </div>
       ),
   },
];

const customSelectStyles = {
   control: (styles) => ({
       borderRadius: '4px',
       display: 'flex',
       justifyContent: 'space-between', // Add space between arrow and text
       alignItems: 'center', // Vertically center-align content

       padding: 0, // Remove padding
       margin: 0, // Remove margin
       width: '100%', // Make the option cover the full width
       height: '100%', // Make the option cover the full height

   }),
   option: (styles) => ({
       backgroundColor: '#151516',
       padding: '8px',
       color: '#fff',
       border: 'none',

   }),
   indicatorSeparator: (styles) => ({
       ...styles,
       display: 'none', // Remove the indicator separator
   }),
   menu: (styles) => ({
       ...styles,
       backgroundColor: '#151516',
   }),

   singleValue: (styles) => ({
       ...styles,
       textAlign: 'center', // Center-align the text
   }),


};


const Trade = () => {
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

                                                    <h4 className="card-title">Buy </h4>
                                                </div>
                                                <div className="card-body">
                                                    <form method="post" name="myform" className="currency_validate trade-form row g-3">
                                                        <div className="col-12">
                                                            <label className="form-label" >Receive</label>
                                                            <div className="input-group">
                                                                <Select
                                                                    className="form-control"
                                                                    name="method"
                                                                    options={currencyOptions}
                                                                    styles={customSelectStyles}
                                                                    isSearchable={false} // Remove the search input if not needed
                                                                    placeholder="Select currency"
                                                                />
                                                                <input type="text" name="currency_validate" className="form-control"
                                                                    placeholder="0.0214 BTC" />
                                                            </div>
                                                        </div>

                                                        <div className="col-12">
                                                            <label className="form-label">Send</label>
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
                                                                Buy Now
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
                                    <h4 className="card-title">Buy Transaction</h4>
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

                                                    <td>

                                                    <span className="success-arrow">
                                                    <i className="icofont-arrow-up"></i>
                                                        Buy</span>
                                                    </td>
                                                    <td className="coin-name">
                                                        <i className="cc BTC"></i> Bitcoin
                                                </td>
                                                    <td>
                                                        Using - Card *******8475
                                                </td>
                                                    <td className="text-success">+0.038 BTC</td>
                                                    <td>-1 000 USD</td>
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

export default Trade;