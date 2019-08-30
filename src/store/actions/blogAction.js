//constants
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';

//action creators
export const addPost = data => {
    return {
        type: ADD_POST,
        payload: data
    }
}

export const updatePost = data => {
    return {
        type: UPDATE_POST,
        postData: data
    }
}

export const deletePost = postId => {
    return {
        type: DELETE_POST,
        payload: postId
    }
}

export const editPost = data => {
    return {
        type: EDIT_POST,
        payload: data
    }
}


