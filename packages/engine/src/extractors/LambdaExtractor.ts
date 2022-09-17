import { ProcessedModule } from '../types/Module';
import { StupidAssistantVM } from '../engines/StupidAssistantVM';
import * as admin from '../admin';

export const LambdaExtractor = (file: string): Record<string, ProcessedModule> => {
	return StupidAssistantVM(file, {
		'@stupidassistant/admin': admin
	});
}