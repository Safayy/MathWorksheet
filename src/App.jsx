import { useState, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import questions from './assets/worksheet.json'
import Header from './components/Header'
import Question from './components/Question'

function App() {
  const [error, setError] = useState('')
  const [score, setScore] = useState('') /* TODO call back for score */
  const [name, setName] = useState('')
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const ref = useRef();

  function calculateScore() {
    setScore( (prevScore) => {
      // Check that name is given
      if (!name){
        setError("Name is required to submit score")
        return ''
      }

      setError('')
      let score = 0
      for ( let i = 0; i < questions.length ; i++ ) {
        if (questions[i].answer_index == selectedAnswers[i])
          score ++
      }
      return score
    })
  }

  function handleSelectOption(questionIndex, optionIndex){
    // Get object of all selected items
    console.log(questionIndex + ' ' + optionIndex)
    setSelectedAnswers( (prevSelectedAnswers) => ({
        ...prevSelectedAnswers,
        [questionIndex]: optionIndex,
      })
    )
    console.log(selectedAnswers)
  }

  function onClearOptions(){

  }

  return (
    <>
      <Header name={name} setName={setName} score={score}/> {/*TODO change */}
      {/*TODO  Router for scoreboard and homepage. Whatsapp share button? */}
      <p>Circle the correct answers.</p>
      {error && <p>{error}</p>}

      <form>
      { questions.map( (question, i) =>
        <Question
          onSelectOption={handleSelectOption}
          onClearOption={()=>{}}
          text={question.question}
          options={question.options}
          key={i}
          index={i}/*TODO required to pass index?*/
          // ref={ref}
        />
      )}
      </form>

      <button onClick={calculateScore}>Calculate Score</button>
      <button onClick={onClearOptions}>Reset Selections</button>
      
      <p>copyright: <a href='www.mathinenglish.com'>www.mathinenglish.com</a></p>
    </>
  )
}

export default App