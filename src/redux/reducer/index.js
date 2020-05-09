import {combineReducers} from "redux"
import changeProjectCategoryReducer from "./changeProjectCategoryReducer"
import projectCategoryListReducer from "./projectCategoryListReducer"
import usersReducer from "./userReducer"
import {firestoreReducer} from "redux-firestore"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
    changeProjectCategoryReducer,
    projectCategoryListReducer,
    usersReducer,
    firestore:firestoreReducer,
    project:userReducer,
})

export default rootReducer;