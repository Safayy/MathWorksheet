import { useState } from 'react'

const Header = ({name, setName, score}) => {

    return (
        <>
        <h1>Rounding Off to Nearest 10</h1>
        <form>
            <label>Name : </label>
            <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}/>

            <label>Score : </label>
            <input value={score} type='text' disabled={true}/>
        </form>
        </>
    )
}

export default Header