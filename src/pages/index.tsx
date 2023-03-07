import Link from 'next/link'
import Image from 'next/image'

// Layout
import Layout from '@/components/Layout'

// Css
import styles from '@/styles/home.module.css'

// Components
import Hero from '@/components/Hero'
import About from '@/components/About'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  )
}
