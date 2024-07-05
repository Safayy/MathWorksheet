const Header = ({name, setName, score}) => {

    return (
        <header>
            <h1 className='center round-div'>Rounding Off to Nearest 10</h1>
            <form className='margin-between-10'>
                <label className='flex flex-row margin-left'> Name :
                    <input className='flex-fill'
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}/>
                </label>

                <label className='flex flex-row'> Score :
                    <input className='flex-fill' value={score} type='text' disabled={true}/>
                </label>
            </form>
        </header>
    )
}

export default Header