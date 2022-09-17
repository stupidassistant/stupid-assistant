import * as fs from 'fs';
import * as path from 'path';
import { ChangeResolveLocally } from './ChangeResolveLocally';

const LoadExamples = (fileFormat: "javascript"|"typescript") => fs.readdirSync(path.join(__dirname, `./${fileFormat}`))
	.map((filename) =>
		ChangeResolveLocally(
			fs.readFileSync(path.join(__dirname, `./${fileFormat}`, filename)).toString()
		)
	);

export const StringExamples = {
	JS: LoadExamples("javascript"),
	TS: LoadExamples("typescript")
};
