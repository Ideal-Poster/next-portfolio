import Link from 'next/link';
import Layout from '../component/Layout';

export default () => (
  <Layout title="About">
    <Link href="/">
      <a >Go to home</a>
    </Link>
    <p>AJavascript programmer</p>
    <img src="/static/JavaScript-logo.png" alt="Javascript" height="200px"/>
  </Layout>
);