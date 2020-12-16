export const storageService = {
    saveToStorage,
    loadFromStorage
}

const KEY = 'location'

function saveToStorage(KEY, val) {
    localStorage.setItem(KEY, JSON.stringify(val))
}

function loadFromStorage(KEY) {
    const json = localStorage.getItem(KEY)
    return JSON.parse(json)
}