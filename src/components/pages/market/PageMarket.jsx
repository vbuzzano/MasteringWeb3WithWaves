/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'

import { Flex, Modal } from '../../shared'
import { Coupons } from '../../../containers'
import { Dialog, FormVote, Result } from '../../modal'
import { useAppDialogs } from '../../service'
import {
    subscribe, DATA, commitVote, fetchData, fetchItems, purchaseCoupon,
} from '../../../libs/dApp'

const PageMarket = ({
    account, setActiveUrl,
}) => {
    const [loading, setLoading] = useState(false)
    const [items, updateItems] = useState([])
    const {
        selectedItem,
        dialog: [dialogOpened, onDialogOpen, onDialogClose],
        result: [resultOpened, onResultOpen, onResultClose],
    } = useAppDialogs()

    const {
        form: [voteFormOpened, onVoteFormOpened, onVoteFormClose],
        result: [voteResultOpened, onVoteResultOpen, onVoteResultClose],
    } = useAppDialogs()

    const refreshItems = async () => {
        try {
            const list = await fetchItems()
            console.debug('[ 🔄 Market ] :', `${list.length} items loaded`)
            updateItems(list)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => subscribe(DATA, refreshItems), [account])

    return (
        <>
            <div className="alert alert-light text-center">
                Find coupons in the bazaar market, and start saving money.
                <br />
                Thanks to the many discount coupons from our suppliers.
                <br />
                <small>
                    <b>click on the coupon of your choice, then on "Buy" to buy it</b>
                </small>
            </div>
            <Flex
                justifyContent="center"
                px={{
                    0: '20px',
                    lg: '39px',
                    xl: '20px',
                }}
                flexWrap="wrap"
            >
                <Coupons
                    loading={loading}
                    setActiveUrl={setActiveUrl}
                    onDialogOpen={onDialogOpen}
                    coupons={items}
                />
            </Flex>

            <Modal open={dialogOpened} onClose={onDialogClose}>
                <Dialog
                    buttons={['buy', 'vote']}
                    // activeUrl={activeUrl}
                    // manageMode={manageMode}
                    coupon={selectedItem}
                    onClose={onDialogClose}
                    onBuy={async () => {
                        await purchaseCoupon(selectedItem)
                        onDialogClose()
                        onResultOpen()
                    }}
                    onVote={async () => {
                        onDialogClose()
                        onVoteFormOpened()
                    }}
                />

            </Modal>
            <Modal open={resultOpened} onClose={onResultClose}>
                <Result
                    text="<div class='alert alert-success'>Thank you for your purchase.</div><div>The supplier will soon validate this transaction and you will receive your coupon as NFT</div>"
                    onClose={onResultClose}
                />
            </Modal>

            <Modal
                open={voteFormOpened}
                onClose={onVoteFormClose}
                width={{
                    0: '100%',
                    lg: 'initial',
                }}
                mx="10px"
            >
                <FormVote
                    coupon={selectedItem}
                    onClose={onVoteFormClose}
                    onSubmit={async (data) => {
                        setLoading(true)
                        try {
                            await commitVote(selectedItem.id, 'featured', data.salt)
                            onVoteFormClose()
                            onVoteResultOpen()
                        } catch (error) {
                            console.log(error)
                        } finally {
                            await fetchData()
                            setLoading(false)
                        }
                    }}
                />
            </Modal>
            <Modal open={voteResultOpened} onClose={onVoteResultClose}>
                <Result
                    text="<div class='alert alert-success'>Thank you for voting.</div>"
                    onClose={onVoteResultClose}
                />
            </Modal>
        </>

    )
}

export default PageMarket
