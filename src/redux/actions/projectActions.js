import alertify from "alertifyjs"

export const createProject = (project) => {
    return (dispatch, getState,{getFirebase,getFirestore}) =>{


        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT',project});
            alertify.success('Project is Added');
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR'},err)
            alertify.success('Something is wrong please try later');
        })
    }
};