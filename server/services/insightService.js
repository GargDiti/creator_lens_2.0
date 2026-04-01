export function generateInsights(creator, brandPreferences) {
  const insights = [];

  if (creator.authenticityScore > 90) {
    insights.push(`${creator.name} maintains a high authenticity score, ideal for premium launches.`);
  }

  creator.platforms.forEach((platform) => {
    if (platform.engagementRate > 8) {
      insights.push(`${creator.name} over-indexes on engagement on ${platform.platform}.`);
    }
    if (brandPreferences?.platform === platform.platform) {
      insights.push(`${brandPreferences.platformLabel || platform.platform} focus aligns with your brief.`);
    }
  });

  if (!insights.length) {
    insights.push('No standout signals detected. Consider running a custom AI audit.');
  }

  return insights;
}

