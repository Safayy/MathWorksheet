import { useNavigate } from 'react-router-dom'
import Leaderboard from '../components/Leaderboard'

const Home = ({entries}) => {
    const navigate = useNavigate()
    return (
        <>
            <h1 className='roboto-regular center'>Quiz Game</h1>
            <div className=''>
                <div className='card landing-main'>
                    <h2 className='roboto-light'>Play the Quiz Game</h2>
                    <button
                    className='button button-large display-block item-center'
                    onClick={() => navigate('/quiz')}>
                        Play Now!</button>
                </div>
                <Leaderboard entries={entries}/>
                <button
                className='button'
                onClick={() => navigate('/leaderboard')}
                >See all Scores</button>
            </div>
        </>
    )
}
export default Home