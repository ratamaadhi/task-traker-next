import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Login from '../components/login'

const Home = (props) => {

  console.log("props",props)

  return (
    <Layout>
      <Login />
    </Layout>
  )
}

export async function getStaticProps() {

  return {
    props: {},
  };
}

export default Home
