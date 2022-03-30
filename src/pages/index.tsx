import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'

const Home: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Moogli</title>
            </Head>

            <section className="flex justify-center flex-col text-brand-main-400 items-center h-screen w-screen font-primary">
                <h2>Moogli</h2>
            </section>
        </Fragment>
    )
}

export default Home
