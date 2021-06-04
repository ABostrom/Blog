import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'



import { getSortedPostsData } from '../lib/posts'

//get the static props for the home page.
//we use the function getSortedPosts in the libs file.
//to build the data.
//which will get passed through to the Home page function.
//could use getServerSideProps here to do server side rendering.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Lecturer in Computer Science at the University of East Anglia.</p>

        <p>
          I have worked in the Games industry, my PhD was in machine learning on time series data.
        </p>
        <p>
          I have worked in agri-tech as a machine learning scientist building algorithms to detect, size and count crops from UAV images.
        </p>
        <p>
          Currenlty I run the Computing and Creative technologies course, and this blog is my exploration of Javascript and the three.js framework.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {/*This builds the dynamic post listing based on the ID*/}
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
