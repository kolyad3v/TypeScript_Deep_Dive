// 1.
// const cardColour = {
// 	monster: 'yellow',
// 	magic: 'green',
// 	trap: 'purple',
// }

// 2.
// const cardColourFrozen = Object.freeze({
// 	monster: 'yellow',
// 	magic: 'green',
// 	trap: 'purple',
// 	deep: {
// 		deeper: {
// 			deep: 'deep',
// 		},
// 	},
// })
// Operates at runtime
// cardColourFrozen.monster = 'blue' // Error because it's frozen
// // but only shallow
// cardColourFrozen.deep.deeper.deep = 'blue' // No error because it's not frozen

// 3.
const cardColours = {
	monster: 'yellow',
	magic: 'green',
	trap: 'purple',
} as const
// makes objects read only.

type cardColoursKeys = keyof typeof cardColours

type CardColour = (typeof cardColours)[cardColoursKeys]

const getCardColor = (cardCategory: CardColour) => {}

// getCardColor(cardColour.monster) // Error because cardColour.monster might change

// eg cardColor.monster = 'blue'

// It thinks that cardColor is an object with keys:string, and that means the subset of ALL strings and thus TS doesn't know if when we pass in cardColour.monster that it will be a valid key.
