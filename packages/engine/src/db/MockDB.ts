import { ProcessedModule } from "../types/Module";

export default class MockDB {
	private modules: Record<string, ProcessedModule> = {};

	addModule(mId: string, m: ProcessedModule): boolean {
		if (this.moduleExists(mId))
			return false;

		this.modules[mId] = m;
		return true;
	}

	moduleExists(mId: string): boolean {
		return this.modules[mId] != undefined;
	}

	getModule(mId: string): ProcessedModule | null {
		return this.modules[mId];
	}
}