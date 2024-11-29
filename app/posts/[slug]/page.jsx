import { getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";
import { use } from "react";

// 创建 MarkdownIt 实例
const md = new MarkdownIt();

// 异步获取单篇文章
async function getPost(slug) {
  const posts = await getAllPosts(); // 确保 await 获取文章
  return posts.find((post) => post.slug === slug);
}

// 处理动态路由参数
export default async function Post({ params }) {
  const {slug} = await params;
  // const {slug} = use(params);

  const post = await getPost(slug); // 获取对应的文章
  if (!post) {
    return notFound(); // 如果找不到文章，返回 404
  }

  const html = md.render(post.content); // 渲染 Markdown 为 HTML

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
