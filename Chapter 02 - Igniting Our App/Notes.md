<!-- Chapter 02 - Igniting Our App -->

1. npm:
   - npm install
     - creates package.json
   - npm install -D parcel
     - create package-lock.json
     - its an bundler which minifies/cleans up code for production
2. add .gitignore
   - add nodemodules
3. node_modules
   - .bin folder - create shortcut for CLI commands
   - @ in folders e.g @parcel
     - they all are scoped packages/grouped packages
       node_modules/
       ├── @parcel/
       │ ├── core
       │ ├── transformer-css
       │ └── plugin-xyz
   - every files ave their own package.json and package-lock.json
   - sinlge node have their own dependencies

<!-- Converting Manuall React code with React application via node modules -->

1. we need to install react + reactdom package with

   - npm install react
   - npm install react-dom

2. we can now remove CDN from index.html

3. since we removed cnd links, now we have to tell App.js to use import which will get pull from node-modules
   - NOTE: now we have to tell script that now, App.js is not a normal JS file, for that we need to add type=module in script src file
   <script type="module" src="App.js"></script>
4. to make a production ready code we can run
   - npx parcel build index.html
     - this will create dist folder, since this automatically gets created in production environment, we can add this in .gitignore
