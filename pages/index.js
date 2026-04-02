import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import ScrollToTop from '@/components/ScrollToTop'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdul Qayoom Mangi | Portfolio</title>
        <meta name="description" content="AI and Data scientist | Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-900 text-white">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <ScrollToTop />
        <Footer />
      </main>
    </>
  )
}
