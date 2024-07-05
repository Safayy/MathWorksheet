import { useState, useEffect } from 'react'
import usePost from '../hooks/usePost'
import Header from '../components/Header'
import Question from '../components/Question'
import questions from '../assets/worksheet.json'

function Quiz () {
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
    }, [score, error])
    
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
        usePost({
            'name':name,
            'score':score
          }, 'leaderboard')
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
  
        <button className='roboto-bold button' onClick={calculateScore}>Submit</button>
        <button
        className={`roboto-bold button ${Object.keys(selections).length === 0 && 'button-disabled'}`}
        onClick={onClearOptions}
        >Reset</button>
    </>
    )
}
export default Quiz