
export const RECENT_CONTACT_LIST = 'RECENT_CONTACT_LIST';
export const ADD_CONTACT_LIST = 'ADD_CONTACT_LIST';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';


export function listRecentContactList() {
    return (dispatch) => {
        dispatch({
            "type": RECENT_CONTACT_LIST,
            "data": [
                {
                    "name": "一成",
                    "sessionId": 112898
                }
            ]
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

export function updateContact(data) {
    return (dispatch) => {
        dispatch({
            "type": UPDATE_CONTACT,
            "data": data
        });
    }
}
