import Header from '@/components/layout/header'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'

const Home: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Moogli</title>
            </Head>

            <section>
                <Header />
            </section>
        </Fragment>
    )
}

export default Home
