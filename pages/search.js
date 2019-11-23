import React from 'react'
import fetch from 'isomorphic-unfetch'
import withNavBar from '../components/withNavBar'
const searchEndPt = 'https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty'

const SearchPage = ({ posts }) => {
  const [post, updatePosts] = React.useState(posts)

  console.log(posts)
  return (
    <div>Search Coming Soon with posts by {post && post.by ? post.by : 'TBD'}</div>
  )
}

SearchPage.getInitialProps = async (context) => {
console.log('hello')
  const data = await fetch(searchEndPt)
  const posts = await data.json()

  return { posts }
}

export default SearchPage
