import './style.css'
import { User } from './kolFrame/models/User'

const user = new User({ name: 'Niko', age: 30 })

console.log(user.get('name'), user.get('age'))
