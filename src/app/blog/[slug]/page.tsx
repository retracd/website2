import { getPostsBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map(post => ({
        slug: post.slug,
    }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostsBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="flex flex-col items-center px-6 py-6">
            <article className="w-full max-w-[800px]">
                <div className="flex justify-between items-baseline">
                    <h1 className="text-5xl font-bold lowercase">{post.title}</h1>
                    <p>{post.date}</p>
                </div>
                <hr className="border-navy border-2 mb-12" />

                <div
                    className="prose prose-sm max-w-none [&>h1]:mb-2 [&>h2]:mb-2 [&>h2]:mt-6 [&>h3]:mb-2 [&>h3]:mt-4 [&>p]:my-2 [&>ul]:my-2 [&>li]:my-1"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </div>
    );
}