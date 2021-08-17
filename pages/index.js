import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Footer from '../components/footer'
import Layout from '../components/layout'
import Login from '../components/login'
import Register from '../components/register'
import ToggleRegLog from '../components/toggleRegLog'

const Home = (props) => {

  console.log("props",props)
  const [enabled, setEnabled] = useState(false)

  return (
    <Layout>
      {enabled ? 
        <Register />
      :
        <Login />
      }
      <ToggleRegLog setEnabled={setEnabled} enabled={enabled} />
      <Footer />
    </Layout>
  )
}

export async function getStaticProps() {

  return {
    props: {},
  };
}

export default Home
