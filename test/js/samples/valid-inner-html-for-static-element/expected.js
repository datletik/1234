/* generated by Atletik vX.Y.Z */
import {
	AtletikComponent,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from "Atletik/internal";

function create_fragment(ctx) {
	let div;

	return {
		c() {
			div = element("div");
			div.innerHTML = `<img alt="Star" width="100" height="100" src="http://mdn.mozillademos.org/files/12676/star.svg"/>`;
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
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