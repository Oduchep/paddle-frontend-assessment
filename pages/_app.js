import Layout from '../components/sections/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-gradient-to-b from-[#19073B] to-[#1C0C28]'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
    )
}

export default MyApp
