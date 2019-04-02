import Layout from '../component/Layout';
import withRouter  from 'next/router';

const Post = ({router }) => (
  <Layout title ={router.query.title}>
    <p>Blaoroeib ergbuew glwejrgeoj gej glewj rgwegew   ergwe</p>
  </Layout>
)
 
export default withRouter(Post);