import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';

export const metadata = {
    title: "blog",
};

export default function Blog() {
    const posts = getAllPosts();

    return (
        <div className="flex flex-col items-center px-6 py-6">
            <div className="w-full max-w-[800px]">
                {/* Header */}
                <h1 className="text-5xl font-bold">blog</h1>
                <hr className="border-navy dark:border-cream border-2 mb-12" />

                {posts.length === 0 ? (
                    <p className='pl-6 italic'>No posts yet. Check back soon!</p>
                ) : (
                    <div className='space-y-12'>
                        {posts.map(post => (
                            <article key={post.slug} className='pl-6'>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className='group'
                                >
                                    <div className="flex justify-between items-baseline">
                                        <h2 className='no-underline text=2xl font-bold mb-2 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-navy after:transition-all after:duration-500 group-hover:after:w-full'>
                                        {post.title}
                                        </h2>
                                        <p className='mb-2'>{post.date}</p>
                                    </div>
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