import * as fs from 'fs';
import * as path from 'path';

const LoadExamples = (fileFormat: "javascript" | "typescript") => fs.readdirSync(path.join(__dirname, `./${fileFormat}`))
	.reduce((o: Record<string, any>, filename) => {
		o[path.parse(filename).name] = require(path.join(__dirname, `./${fileFormat}`, filename));
		return o;
	}, {});

export const ObjectExamples = {
	JS: LoadExamples("javascript"),
	TS: LoadExamples("typescript")
};
