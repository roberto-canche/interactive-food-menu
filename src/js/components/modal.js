import { addClass, addId, button, div, h1, i, p, section, text, ul } from '../builders'
import { $ } from '../helpers'
import modalItem from './modalItem'

export default function modal(store) {
    const close = addId(addClass(i(), 'fa', 'fa-times', 'close'), 'close')
    const title = addClass(h1(text('Cart')), 'title')

    const cartContainer = addId(div(p(text('Tu carrito esta vacío'))), 'cart-items')
    const checkoutButton = addClass(button(text('Checkout')), 'button', 'is-full-width')
    const modalContainer = addClass(div(close, title, cartContainer, checkoutButton), 'modal-container')
    const modalEle = addId(addClass(section(modalContainer), 'modal'), 'modal')
    
    store.on('TOGGLE_SHOW_CART', ({ cartVisible }) => {
        const ele = $('#modal')
        if ( cartVisible ) {
            ele.addClass('show')
        } else {
            ele.removeClass('show')
        }
    })

    return modalEle;
    /*let cart
    if(items.length === 0) {
        cart = p(text('El Carrito esta vacío.'))
    } else {
        // const modalItems = items.map(modalItem)
        // cart = addClass(ul(...modalItems), 'menu')
        cart =  addClass(ul(items.map(modalItem), 'menu'))
    }

    const cartContainer = addId(div(cart), 'cart-items')
    const checkoutButton = addClass(button(text('Checkout')), 'button', 'is-fullwidth')
    const modalContainer = addClass(div(close, title, cartContainer, checkoutButton), 'modal-container')
    const modalEle = addId(addClass(section(modalContainer), 'modal'), 'modal')
    return modalEle*/
}