import { Container } from '@/components/Container'
import Image from 'next/image'

import { Expandable } from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

import addInfoIllo from '@/images/cover4.png'
import sharePhotosIllo from '@/images/share-photos.png'
import showWhoIllo from '@/images/show-who.png'

const tableOfContents = {
  'Take charge of your first impressions': [
    {
      title: 'Add essential info',
      image: <Image src={addInfoIllo} priority className="h-auto w-1/2" />,
      description:
        'Add information like your phone number, operating hours, and health and safety measures, so customers know what to expect.',
    },
    {
      title: 'Share photos, your logo and more',
      image: <Image src={sharePhotosIllo} priority className="h-auto w-1/2" />,
      description:
        'Show your business’s personality with photos, a cover image, your logo, and more to stand out to customers.',
    },
    {
      title: 'Show who you are',
      image: <Image src={showWhoIllo} priority className="h-auto w-1/2" />,
      description:
        'Add attributes to show your business identifies as Black-owned, women-owned, veteran-owned, and is LGBTQ+ friendly so people can learn more about your business.',
    },
  ],
}

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Google Business Profile Features
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Let's take a look at what a free Google Business Profile provides.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Google Business Profile is a powerful tool that helps businesses
          manage their online presence, engage with customers, and boost their
          visibility on Google Search and Maps.
        </p>
        <Expandable>
          {({ isExpanded }) => (
            <>
              <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
                {Object.entries(tableOfContents)
                  .slice(0, isExpanded ? undefined : 2)
                  .map(([title, pages]) => (
                    <li key={title}>
                      <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                        {title}
                      </h3>
                      <ol
                        role="list"
                        className="mt-8 flex flex-col divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                      >
                        {pages.map(({ title, image, description }) => {
                          return (
                            <li
                              key={title}
                              className="flex w-full items-center justify-between py-3 odd:flex-row-reverse"
                              aria-label={title}
                            >
                              <div className="flex flex-col">
                                <span
                                  className="flex font-medium text-slate-900"
                                  aria-hidden="true"
                                >
                                  {title}
                                </span>
                                <span
                                  className="flex text-sm text-slate-900"
                                  aria-hidden="true"
                                >
                                  {description}
                                </span>
                              </div>

                              {image}
                            </li>
                          )
                        })}
                      </ol>
                    </li>
                  ))}
              </ol>
              <Expandable.Button>See more</Expandable.Button>
            </>
          )}
        </Expandable>
      </Container>
    </section>
  )
}
