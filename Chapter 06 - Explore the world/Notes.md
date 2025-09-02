<!-- Chapter 06 - Explore the world -->

<!-- what we did in todays session -->
1. converted mock data into real data, using swiggys API
    - API used: https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

2. used CORS, by using extension (Allow Cors)

3. created new comp for shimmer UI
    
4. added Login and Looged out btn, using useState to toggle them

5. added Search functionlity using controlled inputs

6. added shimmer UI, by simply creating component


<!-- Concepts used -->

1. useEffect:
    - used to handle APIs
    - we can use this to load data

2. CORS:
    - if we try to access other domain, with out domain, whohc is a mismatch we use CORS to excute our code or else it will block our code and throe error in console

    - corsproxy.io - we append this before URL of an API used, so that when hosting this, the cors error will not be shown