import React from 'react'
import ReactDOM from 'react-dom'
import immstruct from 'immstruct'
import component from 'omniscient'

// import Bento from 'bentobots'
// import * as math from 'bentobots-math'

const add = ({ AUGEND = 1, ADDEND = 1 } = {}) => ([{ AUGEND, ADDEND }, { SUM: AUGEND + ADDEND }])

var data = immstruct({
  bots: [
    { process: 'Add1', component: add, inputs: { AUGEND: 4, ADDEND: 5 }, outputs: { SUM: undefined } },
    { process: 'Add2', component: add, inputs: { AUGEND: 'Add1>SUM', ADDEND: 4 }, outputs: { SUM: undefined } }
  ]
})

var get = input => {
  var match
  if ((typeof input === 'string' || input instanceof String) && (match = input.match('([A-Z][a-zA-Z0-9]+)>([A-Z]+)'))) {
    var process = match[1]
    var port = match[2]
    return `GET ${process}>${port}`
  } else {
    return
  }
}

// component.debug()

const Bot = component('Bot', ({bot}) => {
  const onChange = (key, value) => {
    return bot.setIn(['inputs', key], parseInt(value))
  }

  const name = <h4>{bot.get('process')}</h4>

  const controls = (
    <div>
      <input type='range' value={bot.get('inputs').toJS().AUGEND} onChange={(e) => onChange('AUGEND', e.target.value)} />
      <input type='range' value={bot.get('inputs').toJS().ADDEND} onChange={(e) => onChange('ADDEND', e.target.value)} />
    </div>
  )

  const preview = (
    <div>
      <p>
        {bot.get('component')(bot.get('inputs').toJS())[0].AUGEND} +
        {bot.get('component')(bot.get('inputs').toJS())[0].ADDEND} =
        {bot.get('component')(bot.get('inputs').toJS())[1].SUM}
      </p>
      <p>{JSON.stringify(bot.get('component')(bot.get('inputs').toJS()))}</p>
    </div>
  )

  return (
    <div>
      {name}
      {controls}
      {preview}
    </div>
  )
})

const Graph = component('Graph', ({bots}) =>
  <ul>
    { bots.toArray().map((bot, i) => <li key={i}><Bot bot={bot} /></li>) }
  </ul>
)

function render () {
  ReactDOM.render(Graph({bots: data.cursor('bots')}), document.getElementById('root'))
}

data.on('swap', render)
render()
