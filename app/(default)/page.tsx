export const metadata = {
  title: 'Value1 - World`s Most Inclusive Enterprises',
  description: '',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Advantage from '@/components/advantage'
import GetStarted from '@/components/get-started'

export default function Home() {
  return (
    <>
        <Hero />
        <Features />
        <Advantage />
        <GetStarted />
        {/* <Zigzag />
        <Testimonials />
        <Newsletter /> */}
    </>
  )
}
