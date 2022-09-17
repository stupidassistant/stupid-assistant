import { Slot } from "../types/Slot";

export const ValidatePhrase = (slot: Readonly<Slot>): boolean => {
	if (/^([a-zA-Z0-9]+\\[a-zA-Z0-9]+)$/.test(slot.id)
		&& ["enum", "function", "union", "concat", "regex"].indexOf(slot.type) != -1)
		return false;

	switch (slot.type) {
		case "enum":
		// TODO: Add logic

		default:
			return false;
	}
}