module.exports = {
    async rewrites() {
      return [
        {
          source: '/',
          destination: `/api`,
        },
        {
          source: `/donations/start/${process.env.username}`,
          destination: `/api/donate`
        }
      ]
    },
    // async redirects() {
       // return [
           //  { "source": "/attachments/:id/:id2", "destination": "https://scrapbook.hackclub.com/attachments/:id/:id2", permanent: true},
           //  { "source": "/:id/", "destination": "https://scrapbook.hackclub.com/:id", permanent: true},
           //  { "source": "/:id", "destination": "https://scrapbook.hackclub.com/:id", permanent: true},
           //  { "source": "/api/vercel-finished", "destination": "/api/vercel-finished", permanent: true},
           //  { "source": "/:id/:id2/", "destination": "https://scrapbook.hackclub.com/:id/:id2", permanent: true},
          //   { "source": "/:id/:id2", "destination": "https://scrapbook.hackclub.com/:id/:id2", permanent: true},
          //   { "source": "/:id/:id2/:id3/", "destination": "https://scrapbook.hackclub.com/:id/:id2/:id3", permanent: true},
          //   { "source": "/:id/:id2/:id3", "destination": "https://scrapbook.hackclub.com/:id/:id2/:id3", permanent: true},
          //   { "source": "/:id/:id2/:id3/:id4/", "destination": "https://scrapbook.hackclub.com/:id/:id2/:id3/:id4", permanent: true},
          //   { "source": "/:id/:id2/:id3/:id4", "destination": "https://scrapbook.hackclub.com/:id/:id2/:id3/:id4", permanent: true},
          //   { "source": "/_next/static/:id/:id2.css", "destination": "https://scrapbook.hackclub.com/_next/static/:id/:id2.css", permanent: true},
          //   { "source": "/_next/static/:id/:id2.js", "destination": "https://scrapbook.hackclub.com/_next/static/:id/:id2.js", permanent: true},
          //   { "source": "/_next/static/chunks/pages/:id2.js", "destination": "https://scrapbook.hackclub.com/_next/static/chunks/pages/:id2.js", permanent: true }
       //  ]
      // },
  }