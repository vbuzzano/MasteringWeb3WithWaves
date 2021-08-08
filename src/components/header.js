import React, { useContext } from 'react'

import BTLogin from './btLogin'

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Web3Waves</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto justify-content-center">
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Buy Coupons</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Supply Coupons</a>
                </li>
            </ul>

            <span className="my-2 my-lg-0">
                    ABC
                {' '}
                <BTLogin />
            </span>
        </div>

    </nav>
)

export default Header
