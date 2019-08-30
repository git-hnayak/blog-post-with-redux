import React from 'react';
import { connect } from  'react-redux';
import * as blogAction from '../store/actions/blogAction';
import './Post.css';

const Post = props => {
    return (
        <div className="posts">
            <p>Title: {props.postData.title}</p>
            <p>Author: {props.postData.auther}</p>
            <button style={{cursor: 'pointer'}} onClick={() => props.dispatch(blogAction.editPost(props.postData))}>Edit</button>
            <button style={{cursor: 'pointer'}} onClick={() => props.deletPost(props.postData.id)}>Delete</button>
        </div>
        
    )
}
export default connect(null)(Post);