<!-- Chapter 07 - Finding the Path -->

<!-- what we did in todays session -->

1. created components for pages - Contactus, About, and Error page

2. setup for pages
    - install: npm i react-router-dom
    - need to creat paths for routing, and then in render we need to give routerProvider to render every pages

<!-- Concepts used -->

1. react-router-dom
    - used to navigate to different pages
    - need to import from react-router-dom
    - to use this we need to import {createRouterBrowser, RouterProvider}

2. useRouteError 
    - handled errors using useRouteError

3. <Outlet> comp:
    - this uses as children, of root side
    - e.g insider Header and Footer comp, the content will always changes at that time we will be using Outlet comp, to render comp. based on pages redrection

4. Link tag:
    - why Link not <a> tag??
        - because <a> tag refreshes the pages
        - react provides us Link tag, so that while redirecting the page wont get refresh

5. dynamic routing (useParams):
    - the resturant items to open there won page, for that we need to create a page for them
    - for this we need to use params to use dynamic id for every specifi page

