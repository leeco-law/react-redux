export const RECENT_CONTACT_LIST = 'RECENT_CONTACT_LIST';

export function listRecentContactList(type){
    return (dispatch)=>{
        dispatch({
            "type":RECENT_CONTACT_LIST,
            "data":[
                {
                    "name":"一成",
                    "sessionId":112898
                }
            ]
        });
    }
}