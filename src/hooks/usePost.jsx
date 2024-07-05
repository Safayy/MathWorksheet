import { set, ref } from 'firebase/database'
import useFetch from '../hooks/useFetch'
import db from './firebaseSetup'

function usePost(newEntry, query) {
    (async () => {
        try {
            const data = await useFetch(query);
            set(ref(db, query + '/' + data.length), newEntry).then(() => {
                console.log("Successfully added entry")
            }).catch( (error) => {
                console.log(error);
            });

        } catch (error) {
            console.log(error);
            return [];
        }
    })()
}
export default usePost