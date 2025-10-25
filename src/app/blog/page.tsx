import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';

export default function Blog() {
    const posts = getAllPosts();

    return (
        <div className="flex flex-col items-center px-6 py-6">
            <div className="w-full max-w-[800px]">
                {/* Header */}
                <h1 className="text-5xl font-bold">blog</h1>
                <hr className="border-navy border-2 mb-12" />

                {posts.length === 0 ? (
                    <p className='pl-6 italic'>No posts yet. Check back soon!</p>
                ) : (
                    <div className='space-y-8'>
                        {posts.map(post => (
                            <article key={post.slug} className='pl-6'>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className='group'
                                >
                                    <h2 className='text=2xl font-bold mb-2 group-hover:underline'>
                                        {post.title}
                                    </h2>
                                    <p className='text-gray-600 mb-2'>{post.date}</p>
                                    {post.excerpt && ( 
                                        <p>{post.excerpt}</p>
                                    )}
                                </Link>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}