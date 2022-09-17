const regex = new RegExp("../../admin", 'g');

export const ChangeResolveLocally = (str: string) =>
	str.replace(regex, "@stupidassistant/admin");