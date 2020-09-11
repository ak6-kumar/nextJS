import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm Khan and I'm not a terrorist</p>
        <p>
          Check out my new vlog!{' '}
        </p>
        <p><a href="/posts/firstPost">MyVlog</a></p>
      </section>
    </Layout>
  )
}