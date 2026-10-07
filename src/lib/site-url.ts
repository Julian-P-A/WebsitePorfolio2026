export function getSiteUrl(): URL {
  const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const configuredUrl = process.env.SITE_URL;

  if (configuredUrl) return new URL(configuredUrl);
  if (productionDomain) return new URL(`https://${productionDomain}`);

  if (process.env.VERCEL) {
    throw new Error(
      "VERCEL_PROJECT_PRODUCTION_URL is missing. Enable Vercel system environment variables or set SITE_URL."
    );
  }

  return new URL("http://localhost:3000");
}
