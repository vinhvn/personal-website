<h2 align="center">
  ✨ Tailwind + TypeScript + Eslint + Airbnb + Prettier + Next.js Starter ✨
</h2>

A lightweight boilerplate to get up and running with Tailwind CSS, TypeScript, Eslint w/ Airbnb config and Prettier set up with Next.js.

## 🔍 Preview

![Preview](https://s.vincentnguyen.ca/UnsecularisedFirstgenerationMidge.png)

## 🔧 Getting Started

You can generate your own repo from this template by using [this link](https://github.com/vinhvn/next-tailwind-typescript-eslint-airbnb-prettier-starter/generate).

You can also clone this repository by using the command line:

```bash
git clone https://github.com/vinhvn/next-tailwind-typescript-eslint-airbnb-prettier-starter app
cd app
yarn # npm i
```

Remember to install dependencies after cloning it locally.

### Run Development Environment

```bash
yarn dev # npm run dev
```

### Test Production Environment

The `stage` script will build and start a production server.

```bash
yarn stage # npm run stage
```

Alternatively you can run:

```bash
yarn build # npm run build
yarn start # npm start
```

## 📝 Important Notes

* Be sure to update the `package.json` to include your own information for the project you're working on.
* Purge CSS will only run in production, so use either `build` or `stage` to run it and minimize your CSS file size. You can also modify the `postcss.config.js` file to enable Purge CSS in development.

## 🔖 Contributions

Thank you to kyrelldixon and their [amazing starter](https://github.com/kyrelldixon/next-tailwind-typescript-starter) that I used as a template.
