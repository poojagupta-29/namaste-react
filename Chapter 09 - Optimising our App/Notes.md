<!-- Chapter 09 - Optimising our App -->

<!-- what we did in todays session -->

1. moved all fecting logic of components, in custom hooks

2. created feature to show online/offline status of user, with Wifi connection check
    - to achieve we have use online event Listerner

3. added content in Contact us page for making junks of an file
    -
    


<!-- Concepts used -->

1. Custom Hooks:
    - By creating custom hooks, we can move the data-fetching or other reusable logic out of components.

    - This makes the component focused only on displaying the UI, while the custom hook is responsible for managing the logic (e.g., fetching data, handling state, etc.).

    - A custom hook must always start with the prefix use (like useFetch, useAuth) so React can correctly identify it as a hook.

2. online event listerner
    - use to check if user is online or offline

3. Lazy Loading / Chunking / Code Splitting / Dynamic Bundling / On Demand Loading

    - Problem:

        * When a React application runs, the bundler (like Parcel or Webpack) combines all JS files into a single large bundle.

        * If all code is merged, the bundle becomes heavy, which slows down the initial page load.

    - Solution:

        * Chunking / Code Splitting: Break the JS bundle into smaller chunks.

        * Lazy Loading / On-Demand Loading: Load only the JS needed for a specific page or component when it’s actually required, instead of loading everything upfront.

        * used lazy load: syntax
            
            const Contact = lazy(() => import('./components/Contact.js'))

            <Suspense fallback={<div>Loading.....</div>}><Contact /></Suspense>

            <Suspense>: this we used to load some data till the time, we get/render React comp.