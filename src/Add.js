export const bot = ({ AUGEND = 1, ADDEND = 1 } = {}) => ([{ AUGEND, ADDEND }, { SUM: AUGEND + ADDEND }])

export const Add = component('Bot', ({bot}) => {
  const onChange = (key, value) => {
    return bot.setIn(['inputs', key], parseInt(value))
  }

  const name = <h4>{bot.get('process')}</h4>

  const controls = (
    <div>
      <input type='range' value={bot.get('inputs').toJS().AUGEND} onChange={(e) => onChange('AUGEND', e.target.value)} />
      <input type='number' value={bot.get('inputs').toJS().ADDEND} onChange={(e) => onChange('ADDEND', e.target.value)} />
    </div>
  )

  const preview = (
    <p>
      {bot.get('component')(bot.get('inputs').toJS())[0].AUGEND} +
      {bot.get('component')(bot.get('inputs').toJS())[0].ADDEND} =
      {bot.get('component')(bot.get('inputs').toJS())[1].SUM}
    </p>
  )

  return (
    <div>
      {name}
      {controls}
      {preview}
    </div>
  )
})
