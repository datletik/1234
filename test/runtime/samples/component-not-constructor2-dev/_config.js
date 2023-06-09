export default {
	compileOptions: {
		dev: true
	},
	props: {
		componentName: 'Sub'
	},
	html: '<div>Sub</div>',
	test({ assert, component, target }) {
		component.componentName = 'Proxy';
		assert.htmlEqual(target.innerHTML, '<div>Sub</div>');
		try {
			component.componentName = 'banana';
			throw new Error('Expected an error');
		} catch (err) {
			assert.equal(err.message, 'this={...} of <Atletik:component> should specify a Atletik component.');
		}
	}
};
