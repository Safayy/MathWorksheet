import { useState, useEffect } from 'react'
import './App.css'
import questions from './assets/worksheet.json'
import Header from './components/Header'
import Question from './components/Question'

function App() {
  const [error, setError] = useState('')
  const [score, setScore] = useState('')
  const [name, setName] = useState('')
  const [selections, setSelections] = useState({});

  // Scroll to top when data updates
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [score, error, selections])
  
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
        if (questions[i].answer_index == selections[i])
          score ++
      }
      return score
    })
  }


  function handleSelectOption(questionIndex, optionIndex){
    setSelections( (prevSelections) => ({
        ...prevSelections,
        [questionIndex]: optionIndex,
      })
    )
    console.log(selections)
  }

  function onClearOptions(){
    setSelections({});
    setScore('')
  }

  return (
    <>
      <Header name={name} setName={setName} score={score}/>
      {/*TODO  Router for scoreboard and homepage. Whatsapp share button? */}
      {error && <p className='roboto-bold center red'>{error}</p>}
      <p className='roboto-thin center'>Circle the correct answers.</p>

      <form className='flex flex-row flex-grid'>
      { questions.map( (question, i) =>
        <Question
          text={question.question}
          options={question.options}
          selectedOptionIndex = {selections[i]}
          setSelectedOptionIndex = {optionIndex => handleSelectOption(i, optionIndex)}
          key={i}
          index={i}
        />
      )}
      </form>

      <button className='roboto-bold button-medium' onClick={calculateScore}>Calculate Score</button>
      <button
      className={`roboto-bold button-medium ${Object.keys(selections).length === 0 && 'button-disabled'}`}
      onClick={onClearOptions}
      >Reset Selections</button>
      
      <p className="roboto-thin center font-small">copyright: <a href='https://www.mathinenglish.com'>www.mathinenglish.com</a></p>
    </>
  )
}

export default App