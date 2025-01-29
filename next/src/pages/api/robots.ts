import type { NextApiRequest, NextApiResponse } from 'next'

import { environment } from '@/src/environment'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  // eslint-disable-next-line no-secrets/no-secrets
  if (environment.deployment === 'prod') {
    // docs: https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt
    return res.send(
      `
        User-agent: *
        Allow: /

        # Host
        Host: https://${environment.nextHost}

        # Sitemaps
        Sitemap: https://${environment.nextHost}/sitemap.xml
      `,
    )
  }

  return res.send(`
      User-Agent: *
      Disallow: /
      `)
}

export default handler
