import { useState } from 'react'

function Question({text, options, index, selectedOptionIndex, setSelectedOptionIndex}) {

    function handleClick(event) {
        setSelectedOptionIndex(event.target.value);
    }

    return (
        <div className='card flex-2-col-grid-item'>
            <p className='roboto-bold'>{text}</p>
            {options.map( (option, optionIndex) =>
                <label
                className='display-block'
                key={`${index}${optionIndex}`}
                htmlFor={text}>
                    <input
                        type="radio"
                        name={text}
                        value={optionIndex}
                        checked={selectedOptionIndex == optionIndex}
                        onClick={handleClick}
                        onChange={() => {}}
                    />

                    {String.fromCharCode(97+optionIndex)}. {option}
                </label>
            )}
        </div>
    )
}
export default Question