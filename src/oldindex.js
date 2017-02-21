
// import App from './App';
// import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// ex 1
// var HelloMessage = component(({name}) => <div>Hello {name}</div>)
// ReactDOM.render(<HelloMessage name='John' />, document.getElementById('root'))

// ex 2
// var stop
// var Timer = component({
//   // Attaching life cycle methods
//   componentDidMount: () => stop = createTicker(),
//   componentWillUnmount: () => stop()
// }, ({time}) => <div>Seconds Elapsed: {time}</div>)

// function render (appState = { seconds: 0 }) {
//   ReactDOM.render(<Timer time={appState.seconds} />, document.getElementById('root'))
// }
// render()

// function createTicker () {
//   var seconds = 0
//   var interval = setInterval(() => render({ seconds: ++seconds }), 1000)
//   return function stop () {
//     clearInterval(interval)
//   }
// }

// ex 3 -------------
// var immutable = require('immutable')

// // List of todo items as a stateless function
// var TodoList = component(({items}) =>
//   <ul>
//     {items.map((itemText, i) =>
//       <li key={i + itemText}>{itemText}</li>
//     )}
//   </ul>
// )

// // Todo App as a stateless function. Just a render function.
// var TodoApp = component(({state}) => (
//   <div>
//     <h3>TODO</h3>
//     <TodoList items={state.get('items')} />
//     <form onSubmit={addItem}>
//       <input onChange={changeText} value={state.get('text')} />
//       <button>{'Add #' + (state.get('items').size + 1)}</button>
//     </form>
//   </div>
// ))

// // Render and re-render loop
// var mountNode = document.querySelector('#root')
// function render (state) {
//   ReactDOM.render(<TodoApp state={state} />, mountNode)
// }

// // Default initial structure as immutable data.
// var structure = immutable.Map({
//   items: immutable.List(),
//   text: ''
// })
// // Render out initial application
// render(structure)

// // Actions. Ways to update the current state and trigger a re-render

// function changeText (e) {
//   structure = structure.set('text', e.target.value)

//   // Re-render entire app
//   render(structure)
// }

// function addItem (e) {
//   e.preventDefault()
//   structure = structure.update('items',
//     (items) => items.concat(structure.get('text')))
//   structure = structure.set('text', '')

//   // Re-render entire app
//   render(structure)
// }
