import React, { Component } from 'react'

const PostHeader = ({ avatar, author, date }) => (
  <div className="flex items-center mb-6 pb-6 border-b">
    <img src={avatar} className="rounded-full h-16 mr-6" />
    <div className="flex flex-col">
      <h4 className="font-sans text-grey-darker">{author}</h4>
      <p className="mt-2 text-sm text-grey-dark">{date}</p>
    </div>
  </div>
)

export default PostHeader