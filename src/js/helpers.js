export function filterByType(items, type) {
    //return items.filter(item => item.type === type)
    return Object.keys(map)
        .filter( key => map[key].type === type)
        .map(key => map[key])
}

export function formatPrice(price) {
    return parseFloat(price).toFixed(2)
}

export function $(query) {
    const elements = Array.prototype.slice.call( document.querySelectorAll(query) );

    function children(toAdd) {
        elements.forEach( ele => {
            while (ele.firstChild) {
                ele.removeChild(ele.firstChild);
            }

            ele.appendChild(toAdd)
        })
    }

    function on(event, cd) {
        elements.forEach(ele => {
            ele.addEventListener(event, cb)
        })
    }

    function addClass(klass) {
        elements.forEach( ele => {
            ele.classList.add(klass)
        })
    }

    function removeClass(klass) {
        elements.forEach( ele => {
            ele.classList.remove(klass)
        })
    }

    return {
        on,
        children,
        addClass,
        removeClass,
    }
}