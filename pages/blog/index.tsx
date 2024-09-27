import Link from 'next/link';
import {blogPosts} from "./[slug]";

export default function Blog() {
    return (
        <>
            <h1>Blog Posts</h1>
            <ul>
                {Object.entries(blogPosts).map(([key, post]) => (
                    <li key={key}>
                        <Link href={`/blog/${key}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}