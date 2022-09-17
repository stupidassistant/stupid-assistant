import { ValidatePhrase } from './ValidatePhrase';

describe('ValidatePhrase', () => {
	it('Valid', () => {
		expect(ValidatePhrase("")).toEqual(true);
		expect(ValidatePhrase("abc")).toEqual(true);
		expect(ValidatePhrase("abc {abc}")).toEqual(true);
		expect(ValidatePhrase("abc {abc:sds}")).toEqual(true);
	});

	it('Invalid', () => {
		expect(ValidatePhrase("{")).toEqual(false);
		expect(ValidatePhrase("}")).toEqual(false);
		expect(ValidatePhrase("abc {")).toEqual(false);
		expect(ValidatePhrase("abc {dd")).toEqual(false);
		expect(ValidatePhrase("abc dd}")).toEqual(false);
		expect(ValidatePhrase("abc {abc:sds:fdf}")).toEqual(false);
		expect(ValidatePhrase("abc {a bc}")).toEqual(false);
		expect(ValidatePhrase("abc {a bc:sds}")).toEqual(false);
		expect(ValidatePhrase("abc {abc:sd s}")).toEqual(false);
	});
});
