import { child, get, ref } from 'firebase/database';
import db from './firebaseSetup';

function useFetchData(query) {

    return new Promise((resolve, reject) => {
      get(child(ref(db), query))
          .then((snapshot) => {
              if (snapshot.exists()) {
                  let data = snapshot.val();
                  resolve(data);
              } else {
                  console.log("Data not found");
                  resolve(null);
              }
          })
          .catch((error) => {
              console.error("Error fetching data:", error);
              reject(error);
          });
      });
}
export default useFetchData