import { TREATMENTS, CONDITIONS, SEO_AREAS } from '@/lib/constants';
import { THERAPISTS } from '@/lib/therapists';
import { getBlogPosts } from '@/lib/blog';
import { Metadata, Route } from 'next';

const BASE_URL = 'https://naturopathlucknow.in';

export default function sitemap() {
  const routes = [
    '',
    '/about-naturopathy',
    '/treatments',
    '/doctor',
    '/pricing',
    '/contact',
    '/faq',
    '/blog',
    '/case-studies',
    '/case-studies/satvik-diet-reversing-chronic-diseases',
    '/acupressure-acupuncture-lucknow',
    '/yoga-meditation-lucknow',
    '/physiotherapy-lucknow',
    '/physiotherapy',
    '/naturopathy-therapist/neelam-kumari',
    '/yoga-therapist/nand-lal-yadav',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const therapistRoutes = THERAPISTS.map((therapist) => ({
    url: `${BASE_URL}/acupressure-therapist/${therapist.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const treatmentRoutes = TREATMENTS.map((treatment) => ({
    url: `${BASE_URL}/treatment/${treatment.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const conditionRoutes = CONDITIONS.map((condition) => ({
    url: `${BASE_URL}/condition/${condition.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const locationRoutes = SEO_AREAS.map((area) => ({
    url: `${BASE_URL}/location/${area.replace(/\s+/g, '-').toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogRoutes = getBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...routes, ...therapistRoutes, ...treatmentRoutes, ...conditionRoutes, ...locationRoutes, ...blogRoutes];
}
