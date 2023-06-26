import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Transform Your Local Business With Westmoreland Creative's
          Comprehensive Google Business Profile Services
        </p>
        <p className="mt-4">
          Struggling to make a mark in your local business scene? Introducing
          Westmoreland Creative's Google Business Profile services - your
          one-stop solution to improving your local SEO, setting up and
          optimizing your Google Business Profile, and building a website that
          stands out from the crowd.
        </p>
        <ul role="list" className="mt-4 space-y-3">
          {[
            {
              title: 'Expert Google Business Profile Setup:',
              subtitle:
                'At Westmoreland Creative, we help you create and optimize your Google Business Profile, making it easy for local customers to find you.',
            },
            {
              title: 'Local SEO Enhancement:',
              subtitle:
                'We improve your local SEO, increasing your visibility to customers in your area and driving more traffic to your website.',
            },
            {
              title: 'Website Building:',
              subtitle:
                'Our Westmoreland Creative team designs and builds a high-quality website that truly represents your business and attracts more customers.',
            },
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">
                <bold className="font-bold">{feature.title} </bold>
                {feature.subtitle}
              </span>
            </li>
          ))}
        </ul>
        {/* <p className="mt-4 font-display text-3xl font-bold">Benefits</p>
        <p className="mt-4">
          By taking advantage of Westmoreland Creative's services, you can:
        </p>
        <ul role="list" className="mt-4 space-y-3">
          {[
            'Attract more local customers both online and offline.',
            "Improve your business's visibility in local search results.",
            'Stand out from the competition with a well-designed, engaging website.',
            'Save time and resources by letting our experts handle the technical aspects of your online presence.',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul> */}
      </Container>
    </section>
  )
}
