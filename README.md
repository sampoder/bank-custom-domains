# 🏦 Hack Club Bank Custom Domains

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fsampoder%2Fscrapbook-redirect&env=username&envDescription=Username%20refers%20to%20the%20last%20part%20of%20your%20Scrapbook%20URL.%20For%20example%20Sam's%20Scrapbook%20URL%20is%20scrapbook.hackclub.com%2Fsampoder%20so%20his%20username%20is%20'sampoder'.&project-name=my-scrapbook&repo-name=my-scrapbook&demo-title=Your%20Scrapbook%20-%20Your%20Domain&demo-description=Follow%20along%20with%20deploying%20this%20app%20to%20Vercel%20and%20then%20add%20your%20domain%20to%20the%20project.&demo-url=https%3A%2F%2Fscrapbook.hackclub.com&demo-image=https%3A%2F%2Fassets.hackclub.com%2Flog%2F2020-06-18_scrapbook.jpg)

What if my Hack Club Bank donatation page had a custom domain?

This world would be a cooler place!

So here's how you make it possible:

1. Click the big blue deploy to Vercel button
2. Choose a project name and click continue
3. Choose a name for what you'd like your project's git repo to be
4. You'll now have to fill out the required enviromental variable: `username`. This is your bank username, you can find it by inspecting the URLs. For example `bank.hackclub.com/hq`'s username would be `hq`.
5. If you'd like extra customisation you can add the following optional enviromental variables:
    - meta_image: this is an image URL that'll be your social media preview image
    - description: this is a string that'll be your social media preview description
    - title: this is a string that'll be the title of your website
    - site_name: this is a string that'll be the name of the website, shown in some social media previews
    - custom_css: a link to a css file that'll be added, hack around with the bank site to get classes ;)
6. Click Deploy!!
7. Follow [Vercel's docs](https://vercel.com/docs/custom-domains) to set a custom domain.
8. Profit!!

Hope this helps some folks - Sam
