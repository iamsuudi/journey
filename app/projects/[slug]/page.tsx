import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypeprism from "rehype-prism-plus";
import MDXContent from "./MdxContent";

const PROJECTS_DIR = path.join(process.cwd(), "app/projects/markdown");

interface Props {
    params: { slug: string };
}

async function Project({ params }: Props) {
    const { slug } = params;
    const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
    const source = fs.readFileSync(filePath, "utf8");

    const { content, data } = matter(source);
    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [rehypeprism],
        },
    });

    return (
        <div>
            <MDXContent source={mdxSource} />
        </div>
    );
}

export default Project;
