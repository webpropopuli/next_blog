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
Anyway, Nothing special in the Express server except a couple of lines up top to insert it in place of Next's server:

```
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
// I'm guessing Next is wrapping Exp as everything after this is pure Exp.
```

# Styling, CSS and other pretty-makers

Using [Reactstrap](https://reactstrap.github.io/) Basically Bootstrap 4 written in a comonent-friendly way. And since I suck at design, I'll take the assist.

## \_app.js

Next.js uses the App component to initialize pages. Override it to control page initialization which allows persisting layout and state between page changes and more.
