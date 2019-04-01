import Link from 'next/link';

const Index = () => (
  <div>
    <h1>Home</h1>
    <Link href='/about'>
      <a>Go to about</a>
    </Link>
    <div>Welcome to the homepage</div>
  </div>
);

export default Index;