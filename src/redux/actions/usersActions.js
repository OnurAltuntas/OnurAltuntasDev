
export const getUsersControls = (users) =>{
    return (dispatch,getState,{getFirebase,getFirestore}) =>{
        const firestore = getFirestore();
        firestore.Collection('users').add({
            ...users,
            name:'onur',
            password:'123456'
        }).then(()=>{
            dispatch({type:'GET_USERS_CONTROLS',users});
        }).catch((err)=>{
            dispatch({type:'GET_USERS_CONTROLS_ERROR',err});   
        })
       
    }
};