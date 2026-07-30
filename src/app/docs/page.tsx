import Link from 'next/link';
import {redirect} from 'next/navigation';
import {Heading, Text} from '@pharos-ds/core/Text';
import {VStack} from '@pharos-ds/core/Layout';
import {getAllDocs} from '@/lib/docs';

export const metadata = {
  title: 'Documentação',
  description: 'Guias de instalação, Next.js, CLI, temas e mais.',
};

export default function DocsIndexPage() {
  const docs = getAllDocs();
  if (docs[0]) {
    redirect(`/docs/${docs[0].slug}`);
  }

  return (
    <div className="docs-page" style={{paddingBlock: 48}}>
      <VStack gap={4}>
        <Heading level={1}>Documentação</Heading>
        <Text color="secondary">Nenhum guia encontrado.</Text>
        <Link href="/">Voltar ao início</Link>
      </VStack>
    </div>
  );
}
