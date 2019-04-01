import Link from 'next/link';

export default () => (
  <div>
    <h1>About</h1>
    <Link href="/">
      <a >Go to home</a>
    </Link>
    <p>AJavascript programmer</p>
    <img src="/static/JavaScript-logo.png" alt="Javascript" height="200px"/>
  </div>
)