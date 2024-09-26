import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MDXContent from "./MdxContent";

const BLOGS_DIR = path.join(process.cwd(), "app/blogs/markdown");

interface Props {
    params: { slug: string };
}

async function Blog({ params }: Props) {
    const { slug } = params;
    const filePath = path.join(BLOGS_DIR, `${slug}.mdx`);
    const source = fs.readFileSync(filePath, "utf8");

    const { content, data } = matter(source);
    const mdxSource = await serialize(content);

    return (
        <div>
            <MDXContent source={mdxSource} />
        </div>
    );
}

export default Blog;
