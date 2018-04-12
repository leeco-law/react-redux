
export const RECENT_CONTACT_LIST = 'RECENT_CONTACT_LIST';
export const ADD_CONTACT_LIST = 'ADD_CONTACT_LIST';


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

export function addContact() {
    return (dispatch) => {
        dispatch({
            "type": ADD_CONTACT_LIST,
            "data": {
                "name": "二成",
                "sessionId": 112899
            }
        });
    }
}
