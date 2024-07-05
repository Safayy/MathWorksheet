import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

function Leaderboard () {
    const [entries, setEntries] = useState();

    useEffect(() => {
        (async () => {
            try {
                const data = await useFetch('leaderboard')
                setEntries(data)
            } catch (error){
                console.log(error)
            }
        })()
    }, []);

    return (
        <div>
            <h2>Leaderboard</h2>
            { entries == null ?
                <p className='center'>Loading...</p>
                : 
                <table className='item-center table'>
                    <thead>
                        <tr>
                            <th>Ranking</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.sort((a, b) => b.score - a.score)
                            .map((entry, i) =>
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{i==0&&String.fromCodePoint('0x1F451')}{entry.name}</td>
                                <td>{entry.score}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            }
        </div>
    )
}
export default Leaderboard