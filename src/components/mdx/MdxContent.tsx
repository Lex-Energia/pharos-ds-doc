import {MDXRemote} from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import type {ComponentPropsWithoutRef} from 'react';

const components = {
  h1: ({children, ...props}: ComponentPropsWithoutRef<'h1'>) => (
    <h1 {...props}>{children}</h1>
  ),
  h2: ({children, ...props}: ComponentPropsWithoutRef<'h2'>) => (
    <h2 {...props}>{children}</h2>
  ),
  h3: ({children, ...props}: ComponentPropsWithoutRef<'h3'>) => (
    <h3 {...props}>{children}</h3>
  ),
  p: ({children, ...props}: ComponentPropsWithoutRef<'p'>) => (
    <p {...props}>{children}</p>
  ),
  a: (props: ComponentPropsWithoutRef<'a'>) => <a {...props} />,
};

export async function MdxContent({source}: {source: string}) {
  return (
    <div className="docs-prose">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypePrettyCode,
                {
                  theme: 'github-dark',
                  keepBackground: true,
                },
              ],
            ],
          },
        }}
      />
    </div>
  );
}
