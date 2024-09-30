"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface Props {
    source: MDXRemoteSerializeResult;
}

export default function MDXContent({source}: Props) {
    return <MDXRemote {...source} />
}