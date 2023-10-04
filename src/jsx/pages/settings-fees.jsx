import React from 'react';
import Header from '../layout/header'
import Sidebar from '../layout/sidebar';
import { Link } from 'react-router-dom';
import SubMenu from '../element/sub-menu';

const SettingsFees = () => {
    return (
        <><Header />
            <Sidebar />
           <div className="content-body">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">

                        <div className="card">
                            <div className="card-header">
                                <SubMenu/>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xxl-12">
                                        <div className="card">
                                            <div className="card-header px-0">
                                                <h4 className="card-title">Payment Fee</h4>
                                            </div>
                                            <div className="card-body px-0">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Payment method</th>
                                                                <th>Deposit fee</th>
                                                                <th>Withdrawal fee</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>CZK Domestic Bank Wire</td>
                                                                <td>0</td>
                                                                <td>25 CZK</td>

                                                            </tr>
                                                            <tr>
                                                                <td>CZK Card Payment</td>
                                                                <td>2-4%</td>
                                                                <td>-</td>

                                                            </tr>
                                                            <tr>
                                                                <td>EUR Card Payment</td>
                                                                <td>2-4%</td>
                                                                <td>-</td>

                                                            </tr>
                                                            <tr>
                                                                <td>EUR SEPA Transfer</td>
                                                                <td>1 EUR</td>
                                                                <td>1 EUR</td>

                                                            </tr>
                                                            <tr>
                                                                <td>IBAN, BIC, SWIFT in  EUR</td>
                                                                <td>0</td>
                                                                <td>14 EUR</td>

                                                            </tr>
                                                            <tr>
                                                                <td>WISE</td>
                                                                <td>0</td>
                                                                <td>1%</td>


                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-12">
                                        <div className="card">
                                            <div className="card-header px-0">
                                                <h4 className="card-title">Crypto Fee</h4>
                                            </div>
                                            <div className="card-body px-0">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Crypto</th>
                                                                <th>Deposit fee</th>
                                                                <th>Withdrawal fee</th>
                                                                <th>Trezor model One available</th>
                                                                <th>Blockchain, AVAL TO BUY</th>
                                                                <th>Vanishes when empty</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Tether (USDT ERC20)</td>
                                                                <td>0</td>
                                                                <td>9 USDT</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>yes</td>

                                                            </tr>
                                                            <tr>
                                                                 <td>USD COIN (USDC ERC20)</td>
                                                                 <td>0</td>
                                                                 <td>13 USDC</td>
                                                                 <td>yes</td>
                                                                 <td>yes</td>
                                                                 <td>yes</td>

                                                            </tr>
                                                            <tr>
                                                                <td>AAVE TOKEN (AAVE) ERC20</td>
                                                                <td>0</td>
                                                                <td>0,06 (AAVE)</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>yes</td>

                                                            </tr>
                                                            <tr>
                                                                <td>APE - (ApeCoin, ERC20)</td>
                                                                <td>0</td>
                                                                <td>1,1 Apecoin</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>yes</td>

                                                            </tr>
                                                            <tr>
                                                                <td>Bitcoin (BTC)</td>
                                                                <td>0</td>
                                                                <td>0,0005 BTC</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>no</td>

                                                            </tr>
                                                            <tr>
                                                                <td>COMP - Compound, ERC20</td>
                                                                <td>0</td>
                                                                <td>0,14 COMP</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>yes</td>

                                                            </tr>

                                                            <tr>
                                                               <td>CRV - Curve DAO Token ERC20</td>
                                                               <td>0</td>
                                                               <td>9,29 CRV</td>
                                                               <td>yes</td>
                                                               <td>yes</td>
                                                               <td>yes</td>


                                                            </tr>

                                                            <tr>
                                                                <td>DAI $ (DAI) (ERC20)</td>
                                                                <td>0</td>
                                                                <td>15 Dai $</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>yes</td>


                                                            </tr>

                                                            <tr>
                                                                <td>Dogecoin (Doge)</td>
                                                                <td>0</td>
                                                                <td>77,47 DOGE</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>no</td>


                                                            </tr>

                                                            <tr>
                                                                <td>Ethereum</td>
                                                                <td>0</td>
                                                                <td>0,008 ETH</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>no</td>


                                                            </tr>

                                                            <tr>
                                                                <td>Ethereum Classic #1</td>
                                                                <td>0</td>
                                                                <td>0,65 ETH CLASSIC</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>no</td>


                                                            </tr>

                                                            <tr>
                                                                <td>Gala</td>
                                                                <td>0</td>
                                                                <td>140,88 GALA</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>yes</td>


                                                            </tr>

                                                            <tr>
                                                                <td>CHZ - chiliZ</td>
                                                                <td>0</td>
                                                                <td>49,84 CHZ</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>yes</td>


                                                            </tr>

                                                            <tr>
                                                                <td>LINK, CHAIN LINK ERC20</td>
                                                                <td>0</td>
                                                                <td>0,978 LINK</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>yes</td>

                                                            </tr>

                                                            <tr>
                                                                <td>Litecoin (LTC)</td>
                                                                <td>0</td>
                                                                <td>0,001 LTC</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>no</td>

                                                            </tr>

                                                            <tr>
                                                                <td>Near Protocol ERC20</td>
                                                                <td>0</td>
                                                                <td>3,6645 NEAR</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>yes</td>

                                                            </tr>

                                                            <tr>
                                                                <td>Pax DollarUSDP</td>
                                                                <td>0</td>
                                                                <td>6,046 USDP</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>yes</td>

                                                            </tr>

                                                            <tr>
                                                                <td>SNX (Synthetix, ERC20)</td>
                                                                <td>0</td>
                                                                <td>3,38 SNX</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>yes</td>

                                                            </tr>

                                                            <tr>
                                                                <td>SUSHI - SushiToken, ERC20</td>
                                                                <td>0</td>
                                                                <td>4,46 SUSHI</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>yes</td>

                                                            </tr>

                                                            <tr>
                                                                <td>UNI - Uniswap ERC20</td>
                                                                <td>0</td>
                                                                <td>0,865 UNI</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>yes</td>

                                                            </tr>

                                                            <tr>
                                                                <td>USDC USD COIN ERC2O</td>
                                                                <td>0</td>
                                                                <td>5 USDC</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>yes</td>

                                                            </tr>

                                                            <tr>
                                                                <td>WBTC - Wrapped BTC (ERC20)</td>
                                                                <td>0</td>
                                                                <td>0,0005 WBTC</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>yes</td>

                                                            </tr>

                                                            <tr>
                                                                <td>YFI - yearn.finance, ERC20</td>
                                                                <td>0</td>
                                                                <td>0,00085 YFI</td>
                                                                <td>yes</td>
                                                                <td>yes</td>
                                                                <td>yes</td>

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
                    </div>

                </div>
            </div>
        </div>
        </>
    );
};

export default SettingsFees;