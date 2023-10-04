import React from 'react';


const BuyModal = () => {
    return (
        <>
            <div class="table-responsive">
                <table class="table">
                    <tbody>
                        <tr>
                            <td>Receive</td>
                            <td>0.00400034743 BTC</td>

                        </tr>
                        <tr>
                            <td>Send</td>
                            <td>0.012366353453 ETH</td>

                        </tr>
                        <tr>
                            <td>Exchange Rate</td>
                            <td>0.00212455 BTC</td>
                        </tr>
                        <tr>
                            <td>Fee</td>
                            <td>$28.00 USD</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>$854.00 USD</td>
                        </tr>

                        <tr>
                            <td> Sub Total</td>
                            <td> $1232.00 USD</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default BuyModal;