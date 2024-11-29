import {getAllPosts} from "@/lib/posts";
import {notFound} from "next/navigation";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

async function getPost(slug) {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export default async function Post({params}) {
  const post = await getPost(params.slug);
  if (!post) {
    return notFound();
  }
  const html = md.render(post.content);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </article>
  );
}
