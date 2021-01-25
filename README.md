# Pokédex app made with React

## What could be improved?
- Add some delay indication on search and page changes
- Use an existing API wrapper with caching, like pokeapi-js-wrapper
- Better layout for mobile; now it's just fixed W/H
- Use CSS reset
- Better keyboard support (focusable moves and fav buttons)
- Routes (meaningful URLs)
- Test coverage

## Notes
- Most font recognition tools seem pretty terrible; www.whatfontis.com worked for me though.
- Collapsing the move info on page change:

   Problem: The component state doesn't change, so the selected move is rendered uncollapsed on a different page.  
   The navigation event itself is triggered by NavBar component and it changes the App state, but we also need to reset the state of the Contents (NavBar's sibling).

   One approach was to make the Contents component [fully uncontrolled with a (unique) key](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key). However, re-renders became very noticeable; perhaps it could work for smaller isolated components.  
   Another approach is to [get rid of the state](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component) and control everything from the App component. Gee that's ugly! Must see if Redux helps here.

- Let's say we render a list that we know to be static. React will of course complain about the absense of keys. I couldn't find a nice way to override this. Annoying!
- New thing learned: `Promise.all` with an array of promises passed as an argument, returns an array as well.
- To return an object from an arrow function, put it in parentheses: `types.map(one => ({ key: one.slot, name: one.type.name }))` (otherwise it's parsed as a block statement).
- To JSON.stringify a Set, convert it into Array first.
