export const pricing = {
  tiers: [
    {
      name: 'Essential',
      id: 'tier-essential',
      href: '#',
      price: '$100',
      description:
        'Ideal for businesses making their first step into the online world.',
      features: [
        'Google Business Profile setup',
        'Business information optimization, including the use of keywords in the business description',
        'Image uploading and optimization (using client-provided images)',
      ],
      mostPopular: false,
    },
    {
      name: 'Premium',
      id: 'tier-premium',
      href: '#',
      price: '$350',
      description:
        'Perfect for growing businesses aiming to enhance their online presence.',
      features: [
        'Includes all Essential Package services',
        'Google Business Profile Q&A management',
        'Insights analysis and reporting, with suggestions for improvement',
        'Optimization for multiple business locations (if applicable)',
      ],
      mostPopular: true,
    },
    {
      name: 'Platinum',
      id: 'tier-platinum',
      href: '#',
      price: '$500',
      description:
        'Designed for businesses seeking full control of their online impact.',
      features: [
        'Includes all Premium Package services',
        'Regular posting to the Google Business Profile for increased engagement (client provides content or approves content you create)',
        'Review management and responses, maintaining the brand voice and reputation',
        'Ongoing performance reporting to monitor effectiveness of posts and overall Google Business Profile',
      ],
      mostPopular: false,
    },
  ],
}
