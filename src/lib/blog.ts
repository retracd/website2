import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt?: string;
    content: string;
}

export function getAllPosts() : BlogPost[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(fileName => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf-8');
            const { data, content } = matter(fileContents);
        
            return {
                slug,
                title: data.title,
                date: data.date,
                excerpt: data.excerpt,
                content,
            };
        });

    // Sorts posts by newest date
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}