import React, { Component } from 'react'
import PostHeader from './PostHeader'

const Post = ({ post }) => (
  <div className="rounded bg-grey-lighter text-grey-darkest mt-12 p-8 shadow">
    <PostHeader
      avatar={post.avatar}
      author={post.author}
      date={post.date}
    />
    <p className="text-sm leading-normal">{post.content}</p>
  </div>
)

export default Post