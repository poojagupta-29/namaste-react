<!-- Chapter 03 - Laying the Foundation -->

<!-- running commmand via script -->
1. the manual command is now
   - npx parcel index.html

2. now we want them to run via script, so that script will handle this script we dont have to write sam again and again
   - in package.json we have scripts object
   - there we need to add start and build
      start for 
      "scripts": {
         "start": "parcel index.html",    // for dev build
         "build": "parcel build index.html",  // for ptod build
         "test": "jest"
      },

3. now the updated command is:
   - npm run start or npm start
   - npm run build


<!-- Part 2 -->
1. JSX
   - JSX is HTML like strucrure
   - we use JSX in render method
   - Babel converts this JSX into JS code, because browser can't understand React

2. JSX syntax
   const heading = <h1>Hello</h1>

3. JSX is case sensitive
   - <H1> is not same as <h1>
   - JSX is case sensitive, so we need to use lower case for HTML tags
   - JSX is also case sensitive for attributes
   - <div className="container"> is not same as <div class="container">
   - JSX is not HTML
   - JSX is not HTML, it's a syntax extension to JavaScript
   - JSX is not a template engine
   - JSX is not a view engine
   - JSX is not a templating engine

4. React Elements

5. React Components
   - Functional Components
   - Class Components

   Functional Components
      - are pure functions
      - a function which returns JSX
      - they needs to be in CamelCase
      - a function which doesn't have any side effects
      - a function which doesn't change state
      - a function which doesn't change props
      - a function which doesn't call any other function which has side effects
      - a function which doesn't call any other function which changes state
      - a function which doesn't call any other function which changes props
