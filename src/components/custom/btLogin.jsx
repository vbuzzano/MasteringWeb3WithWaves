import React from 'react'

import { UserIcon } from '../layout/header-controls'
import { connect, disconnect, shortAddress } from '../../libs/dApp'
import { Box } from '../shared'

const BTLogin = ({ account, setActiveUrl }) => (
        <>
            {account?.isConnected
                ? (
                    <div className="btn-group mr-2" role="group" aria-label="Logout">
                        <Box className="btn btn-dark" onClick={() => { setActiveUrl('#my') }}>
                            <a href="#my" className="text-light">
                                <span style={{ position: 'relative', top: '-3px', left: '-4px' }}><UserIcon /></span>
                                {account.name || ` ${shortAddress(account.address)}`}
                            </a>
                        </Box>
                        <button className="btn btn-primary" type="submit" onClick={disconnect}>
                            Logout
                        </button>
                    </div>
                )
                : (
                    <button className="btn btn-primary" type="submit" onClick={connect}>
                        Login
                    </button>
                )
            }
        </>
)

export default BTLogin
