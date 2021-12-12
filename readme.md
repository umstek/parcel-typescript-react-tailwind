# Trying-out Tailwind CSS with Parcel

Few years ago, I was searching for a UI kit to be used in one of my hobby react apps. I found some good-looking React UI kits like [Ant Design](http://ant.design), [BlueprintJS](https://blueprintjs.com) and [Evergreen](https://evergreen.segment.com) but sometimes the bloat becomes unbearable and customizability becomes a priority. [Material UI](https://material-ui.com) is said to be the most popular one, but, no thanks; not a fan of material UI. Anyway, the discussion on available react UI kits is a topic for a different post. Here what happened was that I tried to create my own UI kit with SASS and soon found out that there is a gap between my idea on how the components should look and my knowledge on how to use CSS properly.

# What is Tailwind CSS?

Then I found out Tailwind CSS, which focuses on being a low-level [utility-first](https://tailwindcss.com/docs/utility-first/) (meta) CSS framework.

> Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.

With Tailwind CSS, you can use class names to apply bite-sized styling to your html elements, almost eliminating the pain of manually writing CSS. The [homepage](https://tailwindcss.com/) has a good demo so visit and see; don't take my word for it.

# Let’s start!

I’m trying out Tailwind CSS together with [Parcel Bundler](https://parceljs.org/), [TypeScript](https://www.typescriptlang.org/) and [React](https://reactjs.org), but the official documentation [lists](https://tailwindcss.com/docs/installation#using-tailwind-cli) other ways to use it. The stack I’ve chosen might as well be harder to get started.

First I’ve created the `tailwind-test` folder and initialized the project with `yarn init -y` (create an empty project with [yarn](https://yarnpkg.com/), skipping all the questions). You can also use `npm init -y`.
First add parcel bundler; this takes care of how to load, process and bundle all the `.tsx`, .`css`, `.html` etc. you’re going to create.

```sh
yarn add --dev parcel
```

Then add Tailwind CSS as stated in the documentation.

```sh
yarn add tailwindcss postcss autoprefixer
```

Add the below `scripts` section to your `package.json` so that you can run, build and clean the project easily.

```json
"scripts": {
  "start": "parcel serve ./src/index.html --open",
  "build": "parcel build --dist-dir dist src/index.html",
  "clean": "rm -rf .parcel-cache dist"
},
```

Create the `src` folder and create the `index.html` file with a basic HTML5 template. You can also use `html:5` snippet/emmet if you’re using [vsocde](https://code.visualstudio.com/).
Add `<div class="app"></div>` and `<script src="./main.ts"></script>` inside body, so that React can mount your app there.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="./main.ts"></script>
  </body>
</html>
```

Create the `main.ts` and add your React app there. Note that we have added a custom card component which uses Tailwind styles with utility classes. `src/components/Card/index.tsx` and `src/views/App.tsx` are omitted for clarity. Utility classes is [not the only way](https://tailwindcss.com/docs/reusing-styles) you can add Tailwind styles. Since we’re trying Tailwind with React, utility classes is enough for us right now.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./views/App";

ReactDOM.render(React.createElement(App), document.getElementById("app"));
```

Create `main.css` file and add the below. These are tailwind directives. This is needed to inject tailwind [styles](https://tailwindcss.com/docs/preflight) and utility classes into your CSS.

```css
@tailwind base;

@tailwind components;

@tailwind utilities;
```

Add `.postcssrc` file inside the project folder (i.e.: one level up from `src` folder). Tailwind CSS is a [PostCSS](https://postcss.org/) plugin where PostCSS handles all pre/post processing of CSS you write, such as adding [vendor prefixes](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) [automatically](https://github.com/postcss/autoprefixer). Parcel has built-in support for PostCSS, but doesn’t know yet about Tailwind, so we have to configure it with the below content. Make sure you include `tailwindcss` before `autoprefixer`.

```js
{
  "plugins": {
    "postcss-import": true,
    "tailwindcss": true,
    "postcss-nested": true,
    "autoprefixer": true
  }
}
```

Now it’s show-time. Run `yarn` to install dependencies and `yarn start` to start. Since you have specified `--open` in `yarn start`, you’ll see the browser open with the `index.html` file.

You should see a card with a title and a description.

# Old tailwind versions

Find my blogpost here
https://umstek.tk/posts/trying-out-tailwindcss-with-parcel/ which includes the original content written for tailwind 1.x and then updated for tailwind 2.x.

# The good, the bad, and the ugly

I can notice several good things about Tailwind CSS at a glance.

- Get things done without having to write a lot of code.
- No need to worry about different CSS naming standards and conventions such as [BEM](http://getbem.com/naming/) or [OOCSS](http://oocss.org/).
- The built-in styles are pretty good and useful.
- Tailwind doesn’t hate customization. New plugins can be created and configuration is very flexible.
- Can write your own CSS also, if you want an escape route (No lock-in).

There isn’t much to complain about the library but,

- Fonts, Icons, animations aren’t built-in. Adding them can be complicated.
- Advanced controls such as switches, calendars, tables, floating notifications, modals etc. are not available.

(I had more points here for the old versions but looks like now tailwind supports pretty much everything you'll need.)

# Demo

![Demo](https://paper-attachments.dropbox.com/s_597CE0BBFBFE1EF1D6752296A9DAB2D8A884BE13707C4980DBFA5F0EAEC2575E_1574005327689_ezgif.com-video-to-gif.gif)

I created a template with the above plugins as a starting point [here](https://github.com/umstek/parcel-typescript-react-tailwind) on GitHub.

Or, [see it in action](https://parcel-typescript-react-tailwind.vercel.app/).

# Resources

https://headlessui.dev/

https://tailwindui.com/

https://www.tailwindtoolbox.com/

https://tailwindcomponents.com/

https://tailwindtemplates.io/

https://github.com/aniftyco/awesome-tailwindcss
