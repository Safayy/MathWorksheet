import { useState } from 'react'

// const Question = (props) => {
function Question({text, options, index, onSelectOption}) {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null)

    function clearSelection() {
        setSelectedOptionIndex(null)
    }

    return (
        <span>
            <p>{text}</p>
            {options.map( (option, optionIndex) =>
                <label key={`${index}${optionIndex}`} htmlFor={text}>
                    <input
                        type="radio"
                        name={text}
                        value={optionIndex}
                        checked={selectedOptionIndex == optionIndex}
                        onClick={() => setSelectedOptionIndex(event.target.value)}
                        onChange={(event) => {onSelectOption(index, event.target.value)}}
                    />

                    {String.fromCharCode(97+optionIndex)}. {option}
                </label>
            )}
        </span>
    )
}
export default Question