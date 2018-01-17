export function filterByType(items, type) {
    return items.filter(item => item.type === type)
}

export function formatPrice(price) {
    return parseFloat(price).toFixed(2)
}