import {combineReducers} from "redux"
import {firestoreReducer} from "redux-firestore"
import userReducer from "./userReducer"

const rootReducer = combineReducers({

    firestore:firestoreReducer,
    project:userReducer,
})

export default rootReducer;