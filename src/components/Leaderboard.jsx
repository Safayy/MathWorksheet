import { useEffect, useState } from 'react';

function Leaderboard ({entries}) {

    useEffect(() => {
        // Get entries from Firebase API
    }, []);

    return (
        <>
        <h2>Leaderboard</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {entries.map((entry, i) => 
                    <tr key={i}>
                        <td>{entry.name}</td>
                        <td>{entry.score}</td>
                    </tr>
                )}
            </tbody>
        </table>
        </>
    )
}
export default Leaderboard