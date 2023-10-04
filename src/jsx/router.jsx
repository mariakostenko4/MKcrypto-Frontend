import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/index';
import Trade from './pages/trade';
import TradeSell from './pages/trade-sell';
import TradeTransfer from './pages/trade-transfer';
import TradeConvert from './pages/trade-convert';
import TradeDeposit from './pages/trade-deposit';
import Wallet from './pages/wallet';
import Price from './pages/price';
import Demo from './pages/demo';
import Intro from './pages/intro';
import Lock from './pages/lock';
import Otp1 from './pages/otp-1';
import Otp2 from './pages/otp-2';
import PriceDetails from './pages/price-details';
import Profile from './pages/profile';
import Reset from './pages/reset';
import SettingsActivity from './pages/settings-activity';
import SettingsApi from './pages/settings-api';
import SettingsApplication from './pages/settings-application';
import SettingsFees from './pages/settings-fees';
import SettingsPaymentMethod from './pages/settings-payment-method';
import SettingsPrivacy from './pages/settings-privacy';
import SettingsProfile from './pages/settings-profile';
import SettingsSecurity from './pages/settings-security';
import Signin from './pages/signin';
import Signup from './pages/signup';
import VerifyEmail from './pages/verify-email';
import Version2 from './pages/v2.jsx';

const Router = () => {
    return (
        <>

            <BrowserRouter basename={'/demo/qash_react'}>
            {/* <BrowserRouter> */}
                <div id="main-wrapper">
                    <Switch>
                        <Route path='/' exact component={Dashboard} />
                        <Route path='/trade' component={Trade} />
                        <Route path='/trade-sell' component={TradeSell} />
                        <Route path='/trade-transfer' component={TradeTransfer} />
                        <Route path='/trade-convert' component={TradeConvert} />
                        <Route path='/trade-deposit' component={TradeDeposit} />
                        <Route path='/wallet' component={Wallet} />
                        <Route path='/price' component={Price} />
                        <Route path='/demo' component={Demo} />
                        <Route path='/intro' component={Intro} />
                        <Route path='/lock' component={Lock} />
                        <Route path='/otp-1' component={Otp1} />
                        <Route path='/otp-2' component={Otp2} />
                        <Route path='/price-details' component={PriceDetails} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/reset' component={Reset} />
                        <Route path='/settings-activity' component={SettingsActivity} />
                        <Route path='/settings-api' component={SettingsApi} />
                        <Route path='/settings-application' component={SettingsApplication} />
                        <Route path='/settings-fees' component={SettingsFees} />
                        <Route path='/settings-payment-method' component={SettingsPaymentMethod} />
                        <Route path='/settings-privacy' component={SettingsPrivacy} />
                        <Route path='/Settings-profile' component={SettingsProfile} />
                        <Route path='/settings-security' component={SettingsSecurity} />
                        <Route path='/signin' component={Signin} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/verify-email' component={VerifyEmail} />

                        <Route path='/v2' component={Version2} />
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    );
};

export default Router;