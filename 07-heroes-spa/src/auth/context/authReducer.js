import { types } from "../types/types";



export const authReducer = (state, action) => {
    console.log("authReducer haciendo ...",action.type);
    switch (action.type){
        case types.login:
            console.log("authReducer haciendo login");
            return {
                ...state,
                logged : true,
                user: action.payload
            }
        case types.logout:
            return {
                logged: false,
            }
        default:
            return state
    }
}