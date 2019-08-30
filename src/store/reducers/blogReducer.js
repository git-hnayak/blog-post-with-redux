import * as blogAction from '../actions/blogAction';

const initialState = {
    posts: [],
    selectedPostId: null,
    selectedPostDetails: null
}

export const blogReducer = (state = initialState, action) => {
    switch(action.type) {
        case blogAction.ADD_POST:
            return {
                ...state, //copy the old/ existing state property immutably by using ES6 spread operator
                posts: state.posts.concat(action.payload) //and overwrite the posts property value
            }
        case blogAction.EDIT_POST:
            return {
                ...state,
                selectedPostDetails: action.payload
            }
        case blogAction.UPDATE_POST:
            const newState = Object.assign({}, state); //another way of cloning object immutably using JS Object.assign() method
            newState.selectedPostDetails = null;
            newState.posts = newState.posts.map(post => {
                if (post.id == action.postData.id) {
                    post = action.postData
                }
                return post;
            });

            return newState;
    }
    return state;
}