import * as actionTypes from "./actionTypes"


export function changeCategory(category){
    return {type:actionTypes.CHANGE_CATEGORY,payload:category}
}

export function getProjectCategoriesSuccess(categories){
    return {type:actionTypes.GET_PROJECT_CATEGORIES_SUCCESS,payload:categories}
}

export function getProjectCategories(){
    return function(dispatch){
        let url="http://localhost:3000/categories";
        return fetch(url)
        .then(response => response.json())
        .then(result => dispatch(getProjectCategoriesSuccess(result)));
    }
}
