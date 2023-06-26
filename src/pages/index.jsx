import Head from 'next/head'

import { Owner } from '@/components/Owner'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { Features } from '@/components/Features'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Local SEO & Google Business Profile Expert | Boost Your Local Presence
        </title>
        <meta
          name="description"
          content="Enhance your local visibility with our expert Google Business Profile and local SEO services. We also offer professional website building for small businesses."
        />
      </Head>
      <Hero />
      <Introduction />
      <NavBar />
      <Features />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Tommy Stroman',
          role: 'Front-end developer',
          image: avatarImage1,
        }}
      >
        <p>
          "Thanks to Westmoreland Creative, my local business is thriving. Their
          team optimized my Google Business Profile and boosted my local SEO,
          resulting in noticeable growth in foot traffic and online engagement.
          I can't recommend them enough!"
        </p>
      </Testimonial>
      <Pricing />
      <Owner />
      <Contact />
      <Footer />
    </>
  )
}
