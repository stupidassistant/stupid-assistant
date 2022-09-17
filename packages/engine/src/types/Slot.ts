export type SlotBase = {
	id: string,
	type: "enum" | "regex" | "concat" | "union" | "function"
};

export type RegexSlot = SlotBase & {
	type: "regex"
	body: string
};

export type EnumSlot = SlotBase & {
	type: "enum"
	body: Record<string, string[] | string>
};

export type UnionSlot = SlotBase & {
	type: "union"
	body: string[]
};

export type ConcatSlot = SlotBase & {
	type: "concat"
	body: string[]
};

export type FunctionSlot = SlotBase & {
	type: "function",
	handler: (params: Record<string, string | number>) =>
		{
			type: "enum",
			body: Record<string, string[] | string>
		} | {
			type: "regex",
			body: string
		}
};

export type Slot = RegexSlot | EnumSlot | UnionSlot | ConcatSlot | FunctionSlot;

export type ProcessedSlot = (Slot & {
	valueRegexMap?: Record<string, string>,
	matchRegex: string
}) | FunctionSlot;