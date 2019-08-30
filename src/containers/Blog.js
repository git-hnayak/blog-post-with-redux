import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewPost from './NewPost';
import Post from '../components/Post';
import './Blog.css';

class Blog extends Component {

    render() {
        let postList = null;
        if (this.props.postList.length > 0) {
            postList = (
                <ul>
                    {this.props.postList.map(post => {
                        return <Post key={post.id} postData={post} />
                    })}
                </ul>
            )
        }

        return (
            <div>
                <div className="Blog">
                    <div>
                        <NewPost />
                    </div>
                    <div className="post-list">
                        {postList}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postList: state.posts
    }
}

export default connect(mapStateToProps)(Blog);