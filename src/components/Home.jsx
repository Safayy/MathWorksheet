import { useNavigate } from 'react-router-dom'
import Leaderboard from '../components/Leaderboard'

const Home = ({entries}) => {
    const navigate = useNavigate()
    return (
        <>
            <h1 className="center">Quiz Game</h1>
            <div>
                <h2>Play the Quiz Game</h2>
                <img src='/play.jpg'/>
                <button onClick={() => navigate('/quiz')}>Play</button>
            </div>
            <Leaderboard entries={entries}/>
        </>
    )
}
export default Home