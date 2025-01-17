const Router = require('./router')

/**
 * Example of how router can be used in an application
 *  */
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

function handler(request) {
    const init = {
        headers: { 'content-type': 'application/json' },
    }
    const body = JSON.stringify({ some: 'json' })
    return new Response(body, init)
}

class ElementHandler {
    constructor(links, socials) {
        this.links = links
        this.socials = socials
    }
    element(element) {
        if (element.getAttribute('id') === 'links') {
            element.setInnerContent(
                this.links
                    .map(({ name, url }) => `<a href="${url}">${name}</a>`)
                    .join(''),
                { html: true }
            )
        } else if (element.getAttribute('id') == 'profile') {
            element.setAttribute('style', 'display: flex')
        } else if (element.getAttribute('id') == 'avatar') {
            element.setAttribute(
                'src',
                'https://avatars3.githubusercontent.com/u/17861378?s=460&u=722f230f6ddf9b40cbe6536d5aea07f1a711808e&v=4'
            )
        } else if (element.getAttribute('id') == 'name') {
            element.setInnerContent('Ray Sy')
            element.setAttribute('style', 'text-align: center')
        } else if (element.getAttribute('id') === 'social') {
            element.setAttribute('style', 'display: flex')
            element.setInnerContent(
                this.socials
                    .map(({ icon, url }) => `<a href="${url}">${icon}</a>`)
                    .join(''),
                { html: true }
            )
        } else if (element.tagName === 'body') {
            element.removeAttribute('class')
            element.setAttribute('style', 'background: rgb(56,178,172); background: linear-gradient(80deg, rgba(56,178,172,1) 0%, rgba(205,236,234,1) 97%, rgba(255,255,255,1) 100%);')
        }
    }
}

async function handleRequest(request) {
    const r = new Router()
    const links = [
        { name: 'Personal Website', url: 'https://raysy.dev' },
        { name: 'Heat.wav', url: 'https://www.heatwav.co/' },
        { name: 'Devpost', url: 'https://devpost.com/fireteam' },
    ]
    const socials = [
        {
            icon:
                '<svg height="50" width="50" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
            url: 'https://www.linkedin.com/in/ray-sy/',
        },
        {
            icon:
                '<svg height="50" width="50" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
            url: 'https://github.com/fireteam99',
        },
        {
            icon:
                '<svg height="50" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img"><title>dev.to icon</title><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/></svg>',
            url: 'https://dev.to/fireteam99',
        },
    ]
    r.get(
        '.*/links',
        () =>
            new Response(JSON.stringify(links), {
                headers: { 'content-type': 'application/json' },
            })
    )
    r.get('.*', async () => {
        const response = await fetch(
            'https://static-links-page.signalnerve.workers.dev'
        )
        return new HTMLRewriter()
            .on('*', new ElementHandler(links, socials))
            .transform(response)
    })

    const resp = await r.route(request)
    return resp
}
