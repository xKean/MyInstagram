import React from 'react'
import Post from './Post'

const posts = [
    {
        id: '123',
        username: 'xkean',
        userImg: 'https://i.imgur.com/sDXy5Y3.png',
        img: 'https://i.imgur.com/sDXy5Y3.png',
        caption: 'this is dope!'
    },
    {
        id: '123',
        username: 'xkean',
        userImg: 'https://i.imgur.com/sDXy5Y3.png',
        img: 'https://i.imgur.com/sDXy5Y3.png',
        caption: 'this is dope!'
    }
]

function Posts() {
    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
        </div>
    )
}

export default Posts