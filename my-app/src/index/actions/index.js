
export const RECENT_CONTACT_LIST = 'RECENT_CONTACT_LIST';
export const ADD_CONTACT_LIST = 'ADD_CONTACT_LIST';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const CLEAN_CONTACT = 'CLEAN_CONTACT';
export const SUBMIT = 'SUBMIT';


export function listRecentContactList(data) {
    return (dispatch) => {
        dispatch({
            "type": RECENT_CONTACT_LIST,
            "data": data
        });
    }
}

export function addContact(data) {
    return (dispatch) => {
        dispatch({
            "type": ADD_CONTACT_LIST,
            "data": data
        });
    }
}

export function cleanContact(data) {
    return (dispatch) => {
        dispatch({
            "type": ADD_CONTACT_LIST,
            "data": data
        });
    }
}

export function updateContact(data) {
    return (dispatch) => {
        dispatch({
            "type": UPDATE_CONTACT,
            "data": data
        });
    }
}

export function submit(data) {
    return (dispatch) => {
        dispatch({
            "type": SUBMIT,
            "data": data
        });
    }
}
