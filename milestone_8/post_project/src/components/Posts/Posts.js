import React, { useEffect, useState } from 'react';
import "./Posts.css";

const Posts = () => {
    return (
        <div className='main-container'>
            <LoadPosts></LoadPosts>
        </div>
    );
};

function LoadPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp => resp.json())
            .then(data => setPosts(data))
    }, []);
    return (
        <div className='post-container'>
            {
                posts.map(post => <DisplayPost key={post.id} post={post}></DisplayPost>)
            }
        </div>
    )
}

function DisplayPost(props) {
    const { userId, title, body } = props.post;
    return (
        <div className="post">
            <h2>{title}</h2>
            <p className='user-id'><small>User Id: {userId}</small></p>
            <p>{body}</p>
        </div>
    )
}

export default Posts;