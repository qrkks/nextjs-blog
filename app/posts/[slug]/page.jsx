import { getAllPosts } from '@/lib/posts'
import React from 'react'

async function getPost(slug) {
    const posts = getAllPosts();
    return posts.find((post) => post.slug === slug);
}
export default function Post({params}) {
  return (
    <article><h1>234234</h1></article>
  )
}
