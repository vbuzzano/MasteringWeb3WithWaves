import React from 'react'

import { UserIcon } from '../layout/header-controls'
import { connect, disconnect } from '../../libs/dApp'

const BTLogin = ({ account }) => (
        <>
            {account?.isConnected
                ? (
                    <button type="submit" onClick={disconnect}>
                        <UserIcon />
                        &nbsp;
                        {`${account.address.substr(0, 4)}...${account.address.substr(account?.address.length - 5, 4)}`}
                    </button>
                )
                : (
                    <button type="submit" onClick={connect}>
                        Login
                    </button>
                )
            }
        </>
)

export default BTLogin
