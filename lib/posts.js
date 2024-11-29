import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getAllPosts() {
    const fileNames = await fs.readdir(postsDirectory);  // 使用异步 readdir
    const allPostsData = await Promise.all(fileNames.map(async (fileName) => {  // 使用异步读取文件
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, 'utf8');  // 使用异步 readFile
        const matterResult = matter(fileContents);
        return {
            slug,
            ...matterResult.data,
            content: matterResult.content
        };
    }));
    return allPostsData;
}
