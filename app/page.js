import {getAllPosts} from "@/lib/posts";
import Link from "next/link";
export default function Home() {
  const posts = getAllPosts();
  console.log(import.meta.url)
  // console.log(require.resolve('@/lib'));
  return (
    <div>
      <h2>Nextjs Blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
