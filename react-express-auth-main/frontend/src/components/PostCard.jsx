import { useState } from "react";


export default function PostCard({ post }) {
    

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px 0' }}>
        {post.postPicture && <img src={post.postPicture} alt="Post" style={{ maxWidth: '100%', height: 'auto' }} />}
        <p>{post.material}</p>
        <p>{post.postDescription}</p>
    </div>
    )
};