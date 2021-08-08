import React from 'react'

import { Flex, Modal } from '../../../shared'
import { Coupons } from '../../../../containers'
import { Dialog, Result } from '../../../modal'
import { useAppDialogs } from '../../../service'

const MyCoupons = ({ loading, coupons }) => {
    const {
        selectedItem,
        dialog: [dialogOpened, onDialogOpen, onDialogClose],
        result: [resultOpened, onResultOpen, onResultClose],
    } = useAppDialogs()

    return (
        <>
            <Flex
                justifyContent="center"
                p={{
                    0: '10px',
                    md: '0px',
                }}
                flexWrap="wrap"
            >
                <Coupons
                    loading={loading}
                    coupons={coupons}
                    onDialogOpen={onDialogOpen}
                />
            </Flex>

            <Modal open={dialogOpened} onClose={onDialogClose}>
                <Dialog
                    coupon={selectedItem}
                    onClose={onDialogClose}
                    onResultOpen={onResultOpen}
                    buttons={{
                        use: {
                            title: 'Use',
                            onClick: () => 'click',
                        },
                    }}
                />
            </Modal>

            <Modal open={resultOpened} onClose={onResultClose}>
                <Result
                    text="<div class='alert alert-success'>Thank you for using this coupon. We hope you are happy with your discount</div>"
                    onClose={onResultClose}
                />
            </Modal>
        </>

    )
}

export default MyCoupons
