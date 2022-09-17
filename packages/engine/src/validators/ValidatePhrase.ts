export const ValidatePhrase = (phrase: string): boolean => {
	return /^(([a-z0-9 ]+)|({[a-z0-9]+})|{[a-z0-9]+:[a-z0-9]+})*$/.test(phrase);
}