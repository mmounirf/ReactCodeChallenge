# react.js coding challenge

Dear candidate,

Thank you for accepting our invitation to this coding challenge, which we only send
out to candidates that look very promising! So, congratulations!

## Your tasks

- read these instructions carefully
- this project contains the boilerplate for a simple react app. Extend the code
  to render three links: "HOME", "MODELER" and "FRAMEWORKS" as part of a `Navigation` component.
- use `react-router` to implement the required routes: `/` to render `HomePage`, `/modeler` to render
  `ModelerPage` and `/frameworks` to render `FrameworksPage`
- The `HomePage` component should simply render `<h1>Home</h1>`
- The `ModelerPage` component should render `<h1>Modeler</h1>` as well as an initialized modeler
  instance which is rendered into a container after the `<h1>`. By 'modeler' we refer to our
  popular JavaScript library bpmn.js (docs can be found here: https://github.com/bpmn-io/bpmn-js)
- In the `FrameworksPage` make use of react, mobx and mobx-react to render a search input and a dynamic
  list of items (use the items array as a reference).
- Use the input field to filter the list, query title and description to do a full-text
  search, hide elements in the list where neither title nor description contain the search
  term.
- An empty search input should always make the list show all items (title & description).
- If no title or description matched show an empty state (e.g.: no results found)

## Note

- don't forget to save your changes by pressing above save button (or cmd+s), which will also
  fork the project and generate a new project URL.
- Let us know when you are done by replying to our email in which we invited you to this challenge.
  Don't forget to include the link to your codesandbox project.
- there is no time limit as we generally don't believe that stress will lead to better results.
  However, it should take you less than 1 hour to complete this exercise.
- We'll validate your submission by checking if your code is doing what it should do.
  We'll also inspect your style and attention to detail. So make sure your code is nicely structured,
  and generally readable. And the UI should be user-friendly and pleasant to look at.

HAPPY CODING! :-)
