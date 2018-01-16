import { div, addId, text } from '../builders'

export default function app() {
    const appEle = addId( div( text("Hello world")), 'app-container')
    return appEle
}

