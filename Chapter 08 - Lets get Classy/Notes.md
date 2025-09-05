<!-- Chapter 08 - Lets get Classy -->

<!-- what we did in todays session -->

created based comp for About us component

1. created one comp. using both one with class based and second with functional based

2. created using
    * using props 
        - super(props)

    * using state
        - intially there was no concept of useState
        - to use in class comp, we need to use like
            this.state = {
                count: 0;                               // initial value stored here
            }
            this.state.count.                           // to access the count or I cam destructure as well


            - with functional how we use
                const [count, setCount] = useState(0)
                {count}                                 // to access the count

        - how to update the state
            - functional we updated using setCount funcition
                setCount(count++)

            - in class
                - React gives us function named as setState to update the state variables
                    {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }


<!-- Concepts used -->

1. Class based components:
    - when using this we extend React.Component and unlike functional component which directly returns JSX, in class based we return JSX but using render() method

    - since we are using React.Component in class which is build-in method of React it is mandatory to use constructor with super method to access all the propd, state of React

2. LifeCycle Methods 

    IMP. TO NOTE AND CHECK FOR FLOW: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    * componentDidMount() and useEffect()
        - execute after DOM loads
        - they both used to trigger the API calls

        WHY NEED OF THEM FOR APIs call?   
        - In React, if we place an API call directly inside the component body, it will be executed every time the component re-renders, which leads to unnecessary API calls and slows down the application. To prevent this, we use useEffect so that the API call is made only once when the component is mounted (on page load).

    * componentDidUpdate and useEffect( changes on basis of state changes in dependency)
        - In class components, when we perform DOM manipulation or make API calls after a state/prop change, it is usually done inside componentDidUpdate. In functional components, the equivalent is useEffect with the required dependencies.

    * componentWillUnmount and useEffect with return cleanup function:
        - In class components, componentWillUnmount is used for cleanup when a component is removed from the DOM. In functional components, we achieve the same behavior by returning a cleanup function inside useEffect.
