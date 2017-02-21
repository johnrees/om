var React = require('react')
var ReactDOM = require('react-dom')
var component = require('omniscient')

var HelloMessage = component(({name}) => <div>Hello {name}</div>)

ReactDOM.render(<HelloMessage name='John' />, document.querySelector('#app'))
