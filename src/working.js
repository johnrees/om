import React from 'react'
import ReactDOM from 'react-dom'
import immstruct from 'immstruct'
import component from 'omniscient'

var data = immstruct({
  bots: [
    {text: 'Huey', checked: false},
    {text: 'Louie', checked: false},
    {text: 'Douey', checked: false}
  ]
})

component.debug()

const Item = component('Item', ({item}) => {
  const onChecked = () => {
    return item.update('checked', value => !value)
  }

  const style = {
    textDecoration: item.get('checked') ? 'line-through' : 'none'
  }
  return (
    <label style={style}>
      <input type='checkbox' onChange={onChecked} checked={item.get('checked')} />
      {item.get('text')}
    </label>
  )
})

const List = component('List', ({bots}) =>
  <form>
    <ul>
      {bots.toArray().map((item, i) => <li key={i}><Item item={item} /></li>)}
    </ul>
  </form>)

render()

data.on('swap', render)

function render () {
  ReactDOM.render(List({bots: data.cursor('bots')}), document.getElementById('root'))
}
