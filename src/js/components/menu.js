import { addClass, addId, div, section } from '../builders'
import { $ } from '../helpers'
import leftMenu from './leftMenu'
import rightMenu from './rightMenu'

export default function menu(store) {
    const menuEle = addId( addClass( div(), 'container'), 'menu');

    store.on('SET_ITEMS', ({ items }) => {
        const leftSide = leftMenu(items);
        const rightSide = rightMenu(items);
        const columns = addClass(section(leftSide, rightSide), 'columns')

        $('#menu').children(columns);
    })
    /*const leftSide = leftMenu(items)
    const rightSide = rightMenu(items)
    const columns = addClass(section(leftSide, rightSide), 'columns')
    const menuEle = addId(addClass(div(columns), 'container'), 'menu')*/

    return menuEle
}