/* generated by Atletik vX.Y.Z */
import { AtletikComponent, init, safe_not_equal } from "Atletik/internal";

function instance($$self, $$props, $$invalidate) {
	let { x } = $$props;
	let a;
	let b;

	$$self.$$set = $$props => {
		if ('x' in $$props) $$invalidate(0, x = $$props.x);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*x*/ 1) {
			$: $$invalidate(1, b = x);
		}

		if ($$self.$$.dirty & /*b*/ 2) {
			$: a = b;
		}
	};

	return [x, b];
}

class Component extends AtletikComponent {
	constructor(options) {
		super();
		init(this, options, instance, null, safe_not_equal, { x: 0 });
	}
}

export default Component;