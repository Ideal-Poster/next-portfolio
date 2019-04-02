import Layout from '../component/Layout';
import Link from 'next/link';

const PostLink = ({slug, title}) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout title="My Blog">
    <ul>
      <PostLink slug="react-post" title="react"/>
      <PostLink slug="angular-post" title="angular"/>
      <PostLink slug="vue-post" title="vue"/>
    </ul>
  </Layout>
);