import Creator from '../models/Creator.js';

export default async function seedCreators() {
  const count = await Creator.countDocuments();
  if (count) return;

  await Creator.insertMany([
    {
      name: 'MrBeast',
      niche: 'Entertainment',
      description: 'Challenge videos and philanthropy content',
      location: 'USA',
      avatarUrl: 'https://i.pravatar.cc/150?img=5',
      authenticityScore: 92,
      platforms: [
        { platform: 'youtube', followers: 150000000, avgLikes: 3500000, engagementRate: 8.5, growthRate: 7.1 },
        { platform: 'instagram', followers: 38000000, avgLikes: 4200000, engagementRate: 11.3, growthRate: 5.4 }
      ],
      insights: 'Strong virality and philanthropic storytelling resonates with Gen-Z.',
      tags: ['viral', 'philanthropy']
    },
    {
      name: 'Marques Brownlee',
      niche: 'Technology',
      description: 'Premium gadget reviews and interviews',
      location: 'USA',
      avatarUrl: 'https://i.pravatar.cc/150?img=12',
      authenticityScore: 88,
      platforms: [
        { platform: 'youtube', followers: 18000000, avgLikes: 620000, engagementRate: 6.2, growthRate: 4.3 },
        { platform: 'instagram', followers: 4000000, avgLikes: 320000, engagementRate: 7.8, growthRate: 3.2 }
      ],
      insights: 'Highly trusted for premium tech launches.',
      tags: ['tech', 'gadgets']
    },
    {
      name: 'CarryMinati',
      niche: 'Comedy',
      description: 'Roast videos and creator commentary',
      location: 'India',
      avatarUrl: 'https://i.pravatar.cc/150?img=33',
      authenticityScore: 84,
      platforms: [
        { platform: 'youtube', followers: 40000000, avgLikes: 1200000, engagementRate: 7.4, growthRate: 6.1 },
        { platform: 'instagram', followers: 17000000, avgLikes: 980000, engagementRate: 9.2, growthRate: 4.7 }
      ],
      insights: 'High impact in South Asian Gen-Z communities.',
      tags: ['comedy', 'gaming']
    },
    {
      name: 'Jesser',
      niche: 'Sports',
      description: 'Basketball entertainment and lifestyle vlogs',
      location: 'USA',
      avatarUrl: 'https://i.pravatar.cc/150?img=23',
      authenticityScore: 81,
      platforms: [
        { platform: 'youtube', followers: 7500000, avgLikes: 310000, engagementRate: 5.9, growthRate: 3.8 },
        { platform: 'instagram', followers: 2300000, avgLikes: 210000, engagementRate: 6.7, growthRate: 3.5 }
      ],
      insights: 'Blends sports entertainment with lifestyle content for teen audiences.',
      tags: ['sports', 'lifestyle']
    }
  ]);
}
