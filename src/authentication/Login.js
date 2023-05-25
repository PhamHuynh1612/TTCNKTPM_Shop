import {get, set} from 'store'
export  function saveSession(user) {
    set('user', user)
}

export  function removeSession() {
    set('user', null)
}

export function getUser() {
    return get('user');
}