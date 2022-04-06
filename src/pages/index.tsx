import Header from '@/components/layout/header'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment, useEffect } from 'react'

const Home: NextPage = () => {
    useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    return (
        <Fragment>
            <Head>
                <title>Moogli</title>
            </Head>

            <section className="dark">
                <Header />
            </section>
        </Fragment>
    )
}

export default Home
