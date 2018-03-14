import app from './components/app'
import { createStore } from './state'
import setupListeners from './setup_listeners.js'

function reducer(state, event, data) {
    switch (event) {
        case 'FOO':
            return Object.assign({}, state, {
                name: 'Name1',
            })
        break;

        case 'BAR':
            return Object.assign({}, state, data)
        break;

        case 'SET_ITEMS':
            return Object.assign( {}, state, {
                items: data.items.reduce( (total, item) =>
                Object.assign( {}, total, { [item.id]:item}), {}),
            });
         case 'TOGGLE_SHOW_CART':
            return Object.assign( {}, state, {
                cartVisible: !state.cartVisible,
            })
    
        default:
            return state
        break;
        /*case 'SET_ITEMS':
            return Object.assign( {}, state, {
                items: data.items.reduce( (total, item) =>
                Object.assign( {}, total, { [item.id]:item}), {}),
            });
        default:
            return state*/
    }
}

const store = createStore(reducer)

store.on('FOO', state => {
    console.log('FOO callback')
    console.log('state', state)
})

store.on('BAR', state => {
    console.log('BAR callback')
    console.log('state', state)
})

store.on('NOT_REAL', state => {
    console.log('NOT_REAL callback')
    console.log('state', state)
})

store.trigger('BAR', {
    name: 'Name2',
    job: 'web developer'
})
store.trigger('FOO')
store.trigger('NOT_REAL')

fetch('food.json')
    .then(res => res.json())
    .then(resBody => {
        const body = document.querySelector('body')
        body.insertBefore(app(store), body.childNodes[0])
        store.trigger('SET_ITEMS', { items: resBody })
        setupListeners(store);
    })
