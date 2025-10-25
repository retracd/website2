import { getPostsBySlug } from "@/lib/blog";
import { notFound } from 'next/navigation';

export default async function Post({ params }: { params: { slug: string } }) {
    const post = await getPostsBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="flex flex-col items-center px-6 py-6">
            <article className="w-full max-w-[800px]">
                <div className="flex justify-between items-baseline">
                    <h1 className="text-5xl font-bold">{post.title}</h1>
                    <p className='mb-2'>{post.date}</p>
                </div>
                <hr className="border-navy border-2 mb-12" />

                <div
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </div>
    );
}