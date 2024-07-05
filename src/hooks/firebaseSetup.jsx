import { initializeApp } from 'firebase/app';
import { getDatabase} from 'firebase/database';
import firebaseConfig from '../assets/firebaseConfig';

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
console.log('Initialized database')

export default db