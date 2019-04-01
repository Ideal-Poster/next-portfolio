import Link from 'next/link';
import Layout from '../component/Layout';

const Index = () => (
  <Layout title="Home ">
    <Link href='/about'>
      <a>Go to about</a>
    </Link>
    <div>Welcome to the homepage</div>
  </Layout>
);

export default Index;