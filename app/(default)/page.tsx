export const metadata = {
  title: 'Value1 - World`s Most Inclusive Enterprises',
  description: '',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Advantage from '@/components/advantage'
import GetStarted from '@/components/get-started'
import Partners from '@/components/partners'
import Testimonials from '@/components/testimonials'
import FAQmini from '@/components/mini-faq'

export default function Home() {
  return (
    <>
        <Hero />
        <Features />
        <Advantage />
        <GetStarted />
        <Testimonials />
        <FAQmini />
        <Partners />
         {/* <Zigzag /> */}
        {/*<Newsletter /> */}
    </>
  )
}
