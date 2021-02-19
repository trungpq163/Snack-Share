import * as React from 'react';

import { ToastContainer } from 'react-toastify';

import './Checkout.Styles.css';

interface Props {
    values: any;
    handleChange: (name: any) => (event: any) => void;
    handleSubmit: any;
}

const Checkout = ({ handleChange, handleSubmit, values }: Props) => {
    return (
        <div className="container mt-5 pt-5 px-5">
            <div className="mb-4">
                <h2>Confirm order and pay</h2>{' '}
            </div>
            <div className="row">
                <form className="col-md-8" onSubmit={handleSubmit}>
                    <div className="card p-3">
                        <h6 className="text-uppercase">Payment details</h6>
                        <div className="inputbox mt-3">
                            {' '}
                            <input
                                type="text"
                                name="name"
                                className="form-control check-out"
                                onChange={handleChange('name')}
                                value={values.name}
                                required
                            />{' '}
                            <span>Name on card</span>{' '}
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="inputbox mt-3 mr-2">
                                    {' '}
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        className="form-control check-out"
                                        onChange={handleChange('cardNumber')}
                                        value={values.cardNumber}
                                        required
                                    />{' '}
                                    <i className="fa fa-credit-card" /> <span>Card Number</span>{' '}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex flex-row">
                                    <div className="inputbox mt-3 mr-2">
                                        {' '}
                                        <input
                                            type="text"
                                            name="expire"
                                            onChange={handleChange('expire')}
                                            value={values.expire}
                                            className="form-control check-out"
                                            required
                                        />{' '}
                                        <span>Expiry</span>{' '}
                                    </div>
                                    <div className="inputbox mt-3 mr-2">
                                        {' '}
                                        <input
                                            type="text"
                                            name="cvv"
                                            onChange={handleChange('cvv')}
                                            value={values.cvv}
                                            className="form-control check-out"
                                            required
                                        />{' '}
                                        <span>CVV</span>{' '}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 mb-4">
                            <h6 className="text-uppercase">Billing Address</h6>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="inputbox mt-3 mr-2">
                                        {' '}
                                        <input
                                            type="text"
                                            name="street"
                                            onChange={handleChange('street')}
                                            value={values.street}
                                            className="form-control check-out"
                                            required
                                        />{' '}
                                        <span>Street Address</span>{' '}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inputbox mt-3 mr-2">
                                        {' '}
                                        <input
                                            type="text"
                                            name="city"
                                            onChange={handleChange('city')}
                                            value={values.city}
                                            className="form-control check-out"
                                            required
                                        />{' '}
                                        <span>City</span>{' '}
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <div className="inputbox mt-3 mr-2">
                                        {' '}
                                        <input
                                            type="text"
                                            name="stateProvince"
                                            onChange={handleChange('stateProvince')}
                                            value={values.stateProvince}
                                            className="form-control check-out"
                                            required
                                        />{' '}
                                        <span>State/Province</span>{' '}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inputbox mt-3 mr-2">
                                        {' '}
                                        <input
                                            type="text"
                                            name="zipCode"
                                            onChange={handleChange('zipCode')}
                                            value={values.zipCode}
                                            className="form-control check-out"
                                            required
                                        />{' '}
                                        <span>Zip code</span>{' '}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 mb-4 d-flex justify-content-between">
                        {' '}
                        <span /> <button className="btn btn-success px-3">Pay $840</button>{' '}
                    </div>
                </form>
                <div className="col-md-4">
                    <div className="card card-blue p-3 text-white mb-3">
                        {' '}
                        <span>You have to pay</span>
                        <div className="d-flex flex-row align-items-end mb-3">
                            <h1 className="mb-0 yellow">$549</h1> <span>.99</span>
                        </div>{' '}
                        <span>
                            By completing your purchase you agree to these{' '}
                            <a href="#" className="yellow decoration">
                                Terms of Service
                            </a>
                        </span>{' '}
                        <div className="hightlight">
                            {' '}
                            <span>30-Day Money-Back Guarantee</span>{' '}
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Checkout;
