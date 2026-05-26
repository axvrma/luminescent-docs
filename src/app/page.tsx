import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { CodeBlock } from '../components/CodeBlock';
import { HomeClient } from '../components/HomeClient';

const components = {
  pre: CodeBlock
};

const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark', keepBackground: false }]]
};

export default async function Home() {
  const installRaw = `\`\`\`bash
npm install luminescent
# or
yarn add luminescent
\`\`\``;

  const configureRaw = `\`\`\`tsx
import { Button } from "luminescent";

function App() {
  return <Button glowColor="peach">Click Me</Button>;
}
\`\`\``;

  const buildRaw = `\`\`\`tsx
<div className="luminescent-hero-bg">
  <SegmentedControl tabs={["Design", "Develop", "Deploy"]} />
</div>
\`\`\``;

  const installCode = (
    <MDXRemote 
      source={installRaw} 
      components={components} 
      options={{ mdxOptions: mdxOptions as any }} 
    />
  );

  const configureCode = (
    <MDXRemote 
      source={configureRaw} 
      components={components} 
      options={{ mdxOptions: mdxOptions as any }} 
    />
  );

  const buildCode = (
    <MDXRemote 
      source={buildRaw} 
      components={components} 
      options={{ mdxOptions: mdxOptions as any }} 
    />
  );

  return (
    <HomeClient 
      installCode={installCode} 
      configureCode={configureCode} 
      buildCode={buildCode} 
    />
  );
}
