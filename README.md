# personal_site

This repository is a React-based personal website for Gregory Campbell.

Quick commands

```bash
# install deps (use legacy peer deps if you hit TypeScript/react-scripts conflicts)
npm install --legacy-peer-deps

# run dev server
npm start

# build production
npm run build

# optimize images (requires sharp)
# install sharp (one-time):
npm run optimize-images:install
# then run optimization:
npm run optimize-images
```

Image optimization

This repo includes `scripts/optimize-images.js`, a small Node script that uses `sharp` to generate WebP resized variants for images found in `src/assets`. The script writes outputs to `public/images` by default.

If you prefer a different pipeline, consider using `imagemin` or a CI-integrated image optimization step.

Deployment / Amplify notes

- The project uses `package-lock.json` (npm) — ensure CI is configured to use `npm install` and not `yarn`.
- If deploying via AWS Amplify and it errors with multiple lockfiles, ensure only one lockfile (package-lock.json) is present.
[![Netlify Status](https://api.netlify.com/api/v1/badges/b9a5df97-64f4-4888-8d76-548e77e029ae/deploy-status)](https://app.netlify.com/projects/gregoryjcampbell/deploys)

This is the source code for my [Personal Website](https://gregoryjcampbell.netlify.app/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The website is being hosted through [Netlify](https://www.netlify.com).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
