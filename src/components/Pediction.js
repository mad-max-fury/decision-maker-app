
import { useState, useEffect } from "react"
import './Pediction.css'
import './Widget.css'
import { useHistory } from "react-router"
const Pediction = ({ question, opts, rPQ }) => {
  // const childrens = document.getElementById('cOptions').children
  // const childrensArr = [...childrens]
  const history = useHistory()
  const [state, setState] = useState(0)


  const handlePredict = () => {

    const optionLength = document.getElementById('cOptions').children.length
    const childrens = document.getElementById('cOptions').children
    const childrensArr = [...childrens]
    for (let i = 0; i < childrensArr.length; i++) {
      childrensArr[i].classList.remove('active')

    }

    const randomNumber = Math.trunc(Math.random() * optionLength)
    setState(randomNumber)

    for (let i = 0; i < childrensArr.length; i++) {
      if (i === state) {
        childrensArr[i].classList.add('active')
        break
      }

    }
  }
  useEffect(() => {
    handlePredict()
  }, [])
  const handleNextPage = () => {
    history.push('/')
  }
  const handleDisplay = () => {
    var element = document.getElementById("repeated");
    element.classList.toggle("active");
  }

  return (
    <div>
      {
        question.value === '' ?
          <div className="qAWrapper">
            <div className="qA" >
              <h1>some random questions ?</h1>
              <div className='cOptions' id={'cOptions'}>

                <div id="1"><label>1.</label> <span>Yes</span></div>
                <div id='2'><label>2.</label> <span>No</span></div>
              </div>
            </div>
            <div className="widget">
              <button onClick={handlePredict}> ↻ Ask Again ?</button>
              <button onClick={handleNextPage}>Get Another Random Answer</button>
              <button onClick={handleNextPage}>Ask Another Random Question</button>
            </div>
          </div>
          : <div className="qAWrapper">
            <div className="qA" >
              <h1>{question.value + ' ?'}</h1>
              <div className='cOptions' id="cOptions">
                {
                  opts.map((input, i) => {
                    return <div id={i + 1} key={i}><label>{i + 1}.</label> <span>{input.value}</span></div>
                  })
                }
              </div>
            </div>
            <div className="widget">
              <button onClick={handlePredict}> ↻ Ask Again ?</button>
              <button onClick={handleNextPage}>Get Another Random Answer</button>
              <button onClick={handleNextPage}>Ask Another Random Question</button>
              <button onClick={handleDisplay}>Freq Asked question</button>

            </div>
            <div className="repeated" id="repeated">
              <h1>You have Asked This Question :</h1>
              {
                rPQ.map((repeated, i) => {
                  return <div className="div" key={i + 1}>
                    <span>{i + 1}.</span>
                    <label>{repeated.rQuestion}</label>
                    <span>X{repeated.qCount}</span>
                  </div>
                })
              }
            </div>

          </div>
      }
    </div>
  )
}

export default Pediction
