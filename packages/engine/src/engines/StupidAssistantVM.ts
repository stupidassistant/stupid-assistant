import { NodeVM } from 'vm2';

export const StupidAssistantVM = (code: string, node_modules: {
	[moduleName: string]: any
}): any | Record<string, any> => {
	const vm = new NodeVM({
		console: 'inherit',
		sandbox: {},
		require: {
			external: true,
			builtin: Object.keys(node_modules),
			root: './',
			mock: node_modules
		}
	});

	return vm.run(code);
};
