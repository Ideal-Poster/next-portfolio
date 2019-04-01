import Layout from '../component/Layout';

export default ({statusCode}) => (
  <Layout title="Error!!!">
    {
      statusCode ? `Could not load user data:  ${statusCode}`:
      <p>Couldnt get that page, sorry</p>
    }
  </Layout>
)