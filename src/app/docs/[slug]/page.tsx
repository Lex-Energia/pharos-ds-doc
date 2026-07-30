import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {Heading, Text} from '@pharos-ds/core/Text';
import {VStack} from '@pharos-ds/core/Layout';
import {DocsSidebar} from '@/components/shell/DocsSidebar';
import {MdxContent} from '@/components/mdx/MdxContent';
import {getAllDocs, getDoc, getDocSlugs} from '@/lib/docs';

type Props = {params: Promise<{slug: string}>};

export async function generateStaticParams() {
  return getDocSlugs().map(slug => ({slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const doc = getDoc(slug);
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.description,
  };
}

export default async function DocPage({params}: Props) {
  const {slug} = await params;
  const doc = getDoc(slug);
  if (!doc) notFound();
  const docs = getAllDocs();

  return (
    <div className="docs-page" style={{paddingBlock: 32}}>
      <div style={{display: 'flex', gap: 32, alignItems: 'flex-start'}}>
        <div className="docs-sidebar-desktop">
          <DocsSidebar docs={docs} />
        </div>
        <article style={{flex: 1, minWidth: 0}}>
          <VStack gap={4}>
            <VStack gap={2}>
              <Heading level={1}>{doc.title}</Heading>
              {doc.description ? (
                <Text type="body" color="secondary">
                  {doc.description}
                </Text>
              ) : null}
            </VStack>
            <MdxContent source={doc.content} />
          </VStack>
        </article>
      </div>
    </div>
  );
}
