import Layout from '../components/sections/layout'
import '../styles/globals.css'
import { DataProvider } from '../utilities/data'

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <div className='bg-gradient-to-b from-[#19073B] to-[#1C0C28]'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </DataProvider>
    )
}

export default MyApp
