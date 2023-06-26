import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'

import { CheckIcon } from '@heroicons/react/20/solid'

import { pricing } from '@/constants/pricing'

import classNames from '@/utils/classNames'

function Plan({ name, description, price, features, href, featured }) {
  return (
    <div
      className={clsx(
        'relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12',
        featured && 'bg-blue-600 sm:shadow-lg'
      )}
    >
      {featured && (
        <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern x="50%" y="50%" />
        </div>
      )}
      <div className="relative flex flex-col">
        <h3
          className={clsx(
            'mt-7 text-lg font-semibold tracking-tight',
            featured ? 'text-white' : 'text-slate-900'
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            'mt-2 text-lg tracking-tight',
            featured ? 'text-white' : 'text-slate-600'
          )}
        >
          {description}
        </p>
        <p className="order-first flex font-display font-bold">
          <span
            className={clsx(
              'text-[1.75rem] leading-tight',
              featured ? 'text-blue-200' : 'text-slate-500'
            )}
          >
            $
          </span>
          <span
            className={clsx(
              'ml-1 mt-1 text-7xl tracking-tight',
              featured ? 'text-white' : 'text-slate-900'
            )}
          >
            {price}
          </span>
        </p>
        <div className="order-last mt-8">
          <ul
            role="list"
            className={clsx(
              '-my-2 divide-y text-base tracking-tight',
              featured
                ? 'divide-white/10 text-white'
                : 'divide-slate-200 text-slate-900'
            )}
          >
            {features.map((feature) => (
              <li key={feature} className="flex py-2">
                <CheckIcon
                  className={clsx(
                    'h-8 w-8 flex-none',
                    featured ? 'fill-white' : 'fill-slate-600'
                  )}
                />
                <span className="ml-4">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          href={href}
          color={featured ? 'white' : 'slate'}
          className="mt-8"
          aria-label={`Get started with the ${name} plan for $${price}`}
        >
          Get started
        </Button>
      </div>
    </div>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32"
    >
      <Container>
        <SectionHeading number="2" id="pricing-title">
          Pricing
        </SectionHeading>
        <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Pick your package
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          Westmoreland Creative offers two different packages so you can pick
          the one that's right for you.
        </p>
      </Container>
      <div className="mx-auto mt-16 max-w-6xl lg:px-6">
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 rounded-xl bg-slate-800 p-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'bg-white/5 ring-2 ring-cornflower'
                  : 'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex flex-col">
                <div className="flex min-h-[184px] flex-col">
                  <div className="flex items-center justify-between gap-x-4">
                    <h2
                      id={tier.id}
                      className="text-lg font-semibold leading-8 text-white"
                    >
                      {tier.name}
                    </h2>
                    {tier.mostPopular ? (
                      <p className="rounded-full bg-cornflower px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                        Most popular
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-white">
                      {tier.price}
                    </span>
                  </p>
                  <p className="mt-4 text-sm leading-6 text-gray-300">
                    {tier.description}
                  </p>
                </div>
                <div className="flex min-h-[64px] flex-col">
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.mostPopular
                        ? 'bg-cornflower text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                        : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                      'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                    )}
                  >
                    Buy plan
                  </a>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          className="h-6 w-5 flex-none text-white"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
