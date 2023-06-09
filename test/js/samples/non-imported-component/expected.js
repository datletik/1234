/* generated by Atletik vX.Y.Z */
import {
	AtletikComponent,
	create_component,
	destroy_component,
	detach,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "Atletik/internal";

import Imported from 'Imported.Atletik';

function create_fragment(ctx) {
	let imported;
	let t;
	let nonimported;
	let current;
	imported = new Imported({});
	nonimported = new NonImported({});

	return {
		c() {
			create_component(imported.$$.fragment);
			t = space();
			create_component(nonimported.$$.fragment);
		},
		m(target, anchor) {
			mount_component(imported, target, anchor);
			insert(target, t, anchor);
			mount_component(nonimported, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(imported.$$.fragment, local);
			transition_in(nonimported.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(imported.$$.fragment, local);
			transition_out(nonimported.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(imported, detaching);
			if (detaching) detach(t);
			destroy_component(nonimported, detaching);
		}
	};
}

class Component extends AtletikComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Component;