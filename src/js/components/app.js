import { div, addId } from '../builders'
import navbar from './navbar'
import hero from './hero'
import menu from './menu'
import bottom from './bottom'

export default function app(items = []) {
    const navbarEle = navbar();
    const heroEle = hero()
    const menuEle = menu(items)
    const bottomEle = bottom()
    const appEle = addId( div(navbarEle, heroEle, menuEle, bottomEle), 'app-container')
    return appEle
}

