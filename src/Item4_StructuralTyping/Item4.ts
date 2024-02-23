interface DeckProps {
	monsters: number
	spells: number
}

interface DeckAndArchetype {
	monsters: number
	spells: number
	archetype: string
}

export function getDeckCount(deck: DeckProps): number {
	return deck.monsters + deck.spells
}

export class DeckCalculations {
	deck: DeckProps

	constructor(deck: DeckProps) {
		this.deck = deck
	}

	getDeckCount(deck: DeckProps): number {
		console.log(deck.monsters + deck.spells)
		return deck.monsters + deck.spells
	}

	getDeckAndArchetype(deck: DeckAndArchetype): void {
		console.log(`Deck: ${deck.monsters + deck.spells}, Archetype: ${deck.archetype}`)
	}
}
