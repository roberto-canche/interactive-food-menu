import app from './components/app'
import { createStore } from './state'

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
    
        default:
            return state
        break;
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
        body.insertBefore(app(resBody), body.childNodes[0])
    })
