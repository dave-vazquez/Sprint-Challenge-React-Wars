# Answers

1.  What is React JS and what problems does it try and solve?

    React solves the problem of reducing operations that manipulate the DOM, for example if a webpage 
    or application has a lot of data that gets manipulated requires re-rendering over a short period of time.

    It does so by storing the state of the DOM in what's called a Virtual DOM. When an update to the DOM 
    is required, React will detect what state change has take place, compare it to the previous state of the DOM
    tree and re-render only the difference. 

2.  What does it mean to _think_ in react?

    Thinking in React is a process of breaking down your UI into components that have a single responsibility and that as
    a whole provide the minimal representation of the state of your application and update only what is needed on demand.

    Thinking in React means thinking about your data or state first and how to present it to the user. All composition that
    follows should be modeled after your data.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    A Class/Stateful component manage state. A Function/Presentational component presents a Stateful Component's data.

    Class/Stateful components are responsible for passing data and methods/behavior down to child components. 

    Presentational components typically have nothing more than a render method, or in the case of a Functional Component, a 
    return statement that returns some JSX. They do not alter the state of their Parent/Stateful container. They merely receive
    the state, and render it to the UI. 

4.  Describe state.

    State is the visual representation of your website or application. It's also an object used in a stateful component to
    store information about an applications state. 

    The state (or the state object) can be updated using the setState method which triggers a re-rendering of any componnt
    where a state object's value is passed as a prop.

    In this way, state does the work of managing which components get rendered or re-rendered and when. 

5.  Describe props.

    Props is the means by which a child component can become aware of parent component's state. State properties are passed
    down from the parent to child component's props which are in turn used to render that child component to the UI.

    When a state change occurs, so too does the values stored in the child component's props. On render(), the child component
    will be updated with the new state data stored in its props.
