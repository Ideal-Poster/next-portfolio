import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import { Component } from 'react';
import Layout from '../component/Layout';


export default class About extends Component {

  static async getInitialProps() {
    const res =  await fetch("https://api.github.com/users/reedbarger");
    const data = await res.json();
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);
    // });
    return { user: data }
  }

  // componentDidMount() {
  //   fetch("https://api.github.com/users/reedbarger")
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       user: data
  //     })
  //   });
  // }

  render() {
    const { user }=  this.props;
    return(
      <Layout title="About">
        <p>{user.name}</p>
        <p>AJavascript programmer</p>
        <img src={user.avatar_url} alt="read" height="200px"/>
      </Layout>
    );
  }
}
