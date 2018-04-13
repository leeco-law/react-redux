import * as actions from '../actions/index'
let defaultState = {
    recentContactList: []
}
let defaultAction = {
    type: "doNothing",
    date: {}
}
export default function index(state = defaultState, action = defaultAction) {
    switch (action.type) {
        case actions.RECENT_CONTACT_LIST:
            if (action.data)
                return { ...state, recentContactList: action.data }
            break
        case actions.ADD_CONTACT_LIST:
            if (action.data) {
                return { ...state, recentContactList: [...state.recentContactList, action.data] }
            }
            break
        case actions.UPDATE_CONTACT:
            if (action.data) {
                return { ...state, recentContactList: action.data }
            }
            break
        case actions.CLEAN_CONTACT:
            return { ...state, recentContactList: [] }
            break;
        case actions.SUBMIT:
            return { ...state, recentContactList: action.data }
            break;
        default:
            break
    }
}