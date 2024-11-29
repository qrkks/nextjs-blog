import {getAllPosts} from "@/lib/posts";
import Link from "next/link";
import logger from "@/lib/logger";

export  default async function Home() {
  const posts = await getAllPosts();
  // console.log(import.meta.url)
  logger.debug(import.meta.url);
  logger.info(process.cwd());

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
