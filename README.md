# David's Portfolio and Blog Site

It's crazy that I'm not already doing this, but I'm so sick of WordPress as that's my business, and I wanted to roll my own. I did an earlier site in Gatsby, but for me it wasn't quite right, so here we are.

## SITE Notes

## NEXT Notes

Next takes over the NPM run scripts (see package.json) Use `npm run [dev/build/start]`

### Pages

Pages live in /pages/page.js (filename must start with lowercase)

```
const Index = () => {
  return (<h1>index of my portfolio</h1>);
};

export default Index;
```

### Navigation

### Components

Same as pages. Start with a capital letter to differentiate from pages - not required.

## REACT Notes

### Lifecycle fns

Constructor, render, ...DidMount....
getInitialProps() is NextJS specific. Runs on both SRV and CLI

### Server side support for clean URLS

Well, here it gets stupid, since I have to bring in Express to support the clean URLS. Makes me want to leave them ugly. Seems like I could map the id to the long name and that would allow the reload. But I'm new here.

So now we have replace the NextJS server and drag Express in.....grrrrr
