import React, { Component } from 'react'
import moment from 'moment'

import Post from './Post'

class Posts extends Component {

  state = {
    posts: [
      {
        avatar: 'https://media.licdn.com/dms/image/C4D03AQEdbOwKY8Isdw/profile-displayphoto-shrink_200_200/0?e=1556755200&v=beta&t=2hKAFxxBdY6OJZhdolU0Tu_uyBgO3EmBgmtp7OvOsWc',
        author: 'Victor Sales',
        date: moment().calendar(),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas odio eget augue laoreet ullamcorper. Nam dapibus lacus et neque placerat, quis bibendum sapien sodales. Ut nec nunc consequat lectus pellentesque sodales at vel nibh. In id laoreet justo, sed elementum enim. Pellentesque sit amet nunc elit. Suspendisse sollicitudin ac enim consequat tincidunt. Nullam vitae nisi et libero vehicula faucibus. Mauris lobortis faucibus mi at pulvinar. Donec in dignissim nibh. Aenean in accumsan justo.'
      },
      {
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        author: 'Diego Fernandes',
        date: moment().subtract(30, 'minutes').calendar(),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas odio eget augue laoreet ullamcorper. Nam dapibus lacus et neque placerat, quis bibendum sapien sodales. Ut nec nunc consequat lectus pellentesque sodales at vel nibh. In id laoreet justo, sed elementum enim. Pellentesque sit amet nunc elit. Suspendisse sollicitudin ac enim consequat tincidunt. Nullam vitae nisi et libero vehicula faucibus. Mauris lobortis faucibus mi at pulvinar. Donec in dignissim nibh. Aenean in accumsan justo.'
      },
      {
        avatar: 'https://pbs.twimg.com/profile_images/2137636146/BO_A_1__1_400x400.JPG',
        author: 'Luis Boça',
        date: moment().subtract(90, 'minutes').calendar(),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas odio eget augue laoreet ullamcorper. Nam dapibus lacus et neque placerat, quis bibendum sapien sodales. Ut nec nunc consequat lectus pellentesque sodales at vel nibh. In id laoreet justo, sed elementum enim. Pellentesque sit amet nunc elit. Suspendisse sollicitudin ac enim consequat tincidunt. Nullam vitae nisi et libero vehicula faucibus. Mauris lobortis faucibus mi at pulvinar. Donec in dignissim nibh. Aenean in accumsan justo.'
      },
    ]
  }



  render() {
    const { posts } = this.state
    return (
      <div className="container mx-auto w-3/5 pb-12">
        {posts.map((post, i) => <Post key={i} post={post}  />)}
      </div>
    )
  }

}

export default Posts