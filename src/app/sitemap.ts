import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ulatowski.net'

  // Define your pages here
  const routes = [
    '',
    '/about',
    '/services',
    '/skills',
    '/projects',
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : (['/about', '/contact'].includes(route) ? 'yearly' : 'monthly'),
    priority: route === '' ? 1 : 0.8,
  }))
}
