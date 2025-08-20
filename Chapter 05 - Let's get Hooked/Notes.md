<!-- Chapter 05 - Let's get Hooked -->

1. Two types of Import/Export

    * Default Export / Import

        -   Ek file me sirf ek default export ho sakta hai.
        -   Import karte time curly braces {} ki zarurat nahi hoti.
        -   Import name ko aap chahe to rename bhi kar sakte ho.

        e.g
            // Header.js
            export default Header;

            // App.js
            import Header from "./Header";

    * Named Export / Import

        -   Ek file me multiple named exports ho sakte hain.
        -   Import karte time curly braces {} lagana zaruri hai.
        -   Import karte waqt naam exactly same hona chahiye (ya as use karke rename kar sakte ho).

        e.g
            // utils.js
                export const add = (a, b) => a + b;
                export const subtract = (a, b) => a - b;

            // App.js
                import { add, subtract } from "./utils";

                // ya rename karke
                import { add as sum } from "./utils";

2. Organize the file

    * components/ folder

        - Yahan pe saare reusable UI components rakhe jate hain.
            Example:
                - utils folder for the common code, which will can be used anywhere in the code

    * utils/ folder

        -   Yahan pe wo common/helper code rakha jata hai jo multiple components ya pages me use ho sakta hai.
        - e.g:
            constants.js   // e.g. API URLs, static data
            helpers.js     // e.g. formatDate, calculateDiscount
            mockData.js    // demo/mock JSON data

3. useState:
    - Any change in state triggers a re-render, and useState ensures the UI stays in sync with the data.
    - because of useStat, the UI gets update immeditely sync with data/BE data

4. Re-conciliation:
    - React uses the Virtual DOM to efficiently update the UI.
        - Virtual DOM: a lightweight JavaScript object that represents the actual DOM.
        - React uses a Diffing Algorithm on the Virtual DOM.
            - The algorithm compares the new Virtual DOM with the previous Virtual DOM.
            - It finds the differences and updates only the changed parts in the real DOM instead of re-rendering the whole UI.