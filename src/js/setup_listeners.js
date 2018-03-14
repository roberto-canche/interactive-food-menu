import { $ } from './helpers'

export default function (store) {
    $('#cart-icon, #close').on('click', () => {
        store.trigger('TOGGLE_SHOW_CART')
    })
}