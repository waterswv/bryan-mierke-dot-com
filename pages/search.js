import React from 'react'
import fetch from 'isomorphic-unfetch'
import withNavBar from '../components/withNavBar'
const searchEndPt = 'https://bryanmierke.com/api/post'

const SearchPage = ({ posts }) => {
  const [post, updatePosts] = React.useState(posts)

  console.log(posts)
  return (
    <div>Search Coming Soon with posts like {post && post[0].postTitle ? post.postTitle : 'TBD'}</div>
  )
}

SearchPage.getInitialProps = async (context) => {
    const data = await fetch(searchEndPt)
    const posts = await data.json()

  return { posts }
}

export default SearchPage
