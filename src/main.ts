import './style.css'
// import { User } from './kolFrame/models/User'
import { DeckCalculations } from './Item4_StructuralTyping/Item4'

const user = new User({ name: 'Niko', age: 30 })

console.log(user.get('name'), user.get('age'))

// Item4_StructuralTyping
const deck = { monsters: 10, spells: 5, archetype: 'Dragon' }

// Errors!!!
const deckCalculation = new DeckCalculations({ monsters: 10, spells: 5, archetype: 'Dragon' })

// Works!!!
// Deck fits the "structure" of DeckProps
const deckCalculationWithArch = new DeckCalculations(deck)

deckCalculation.getDeckCount({ monsters: 10, spells: 5 })

deckCalculationWithArch.getDeckAndArchetype({ monsters: 10, spells: 5, archetype: 'Dragon' })
