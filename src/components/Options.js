import './Option.css'

const Options = ({ num }) => {
  return (
    <div className="options">
      <label>{num.toString() + '.'}</label>
      <input type='text' id={'L' + num.toString()} placeholder={'Enter Answer'} />
    </div>
  )
}

export default Options
