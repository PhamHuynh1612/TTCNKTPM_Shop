
export  function saveSession(user) {
    window.localStorage.setItem('user', JSON.stringify(user))
}

export  function removeSession() {
    window.localStorage.setItem('user', null)
}

export function getSession() {
    return JSON.parse(window.localStorage.getItem('user'))
}