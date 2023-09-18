export default function sitemap() {
    
    return [
      {
        url: 'https://wexorai.com',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://wexorai.com/contactus',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://wexorai.com/comingSoon',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    ]
  }