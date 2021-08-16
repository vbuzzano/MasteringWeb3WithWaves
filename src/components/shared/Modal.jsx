import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import ReactDOM from 'react-dom'

import Box from './Box'

import { overlayAnimation, Overlay } from '../layout'

const { timeout } = overlayAnimation

const modalContainer = document.getElementById('modal')

const styleContainer = (zIndex = 15) => styled(Box)`
    margin: 0 auto;
    top: 0;
    z-index: ${zIndex};
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    top: 10%;
    &.modal-enter {
        transform: translate(-50%, -50%);
        opacity: 0;
    }
    &.modal-enter-active {
        transform: translate(-50%, 0);
        opacity: 1;
        transition: all ${timeout}ms ease-out;
    }

    &.modal-exit {
        transform: translate(-50%, 0);
        opacity: 1;
    }
    &.modal-exit-active {
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: all ${timeout}ms ease-out;
    }
`

const Modal = ({
    children, open, onClose, zIndex, ...rest
}) => {
    zIndex ??= 15
    const Container = styleContainer(zIndex)
    const Ovl = Overlay(zIndex - 1)
    return ReactDOM.createPortal(
        <>
            <CSSTransition in={open} timeout={timeout} classNames="modal" unmountOnExit>
                <Container {...rest}>{children}</Container>
            </CSSTransition>
            <CSSTransition in={open} {...overlayAnimation} unmountOnExit>
                <Ovl top="0px" onClick={onClose} />
            </CSSTransition>
        </>,
        modalContainer,
    )
}
export default Modal
