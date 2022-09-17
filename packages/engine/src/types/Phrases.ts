export type Phrase = string | ProcessedPhrase;

export type SlotAliasMapping = {
	[alias: string]: string // Slot Id
};

export type PhraseSlots = {
	slots: string[],
	aliases: {
		[alias: string]: string // Slot Id
	}
};

export type ProcessedPhrase = {
	utterance: string,
	baseUtterance: string,
	slots: PhraseSlots
};