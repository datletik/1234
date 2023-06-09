/* generated by Atletik vX.Y.Z */
import {
	AtletikComponent,
	append,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	safe_not_equal,
	set_data,
	space,
	subscribe,
	text
} from "Atletik/internal";

import { writable } from 'Atletik/store';

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let button;
	let mounted;
	let dispose;

	return {
		c() {
			h1 = element("h1");
			t0 = text(/*$foo*/ ctx[1]);
			t1 = space();
			button = element("button");
			button.textContent = "reset";
		},
		m(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, button, anchor);

			if (!mounted) {
				dispose = listen(button, "click", /*click_handler*/ ctx[2]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*$foo*/ 2) set_data(t0, /*$foo*/ ctx[1]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(h1);
			if (detaching) detach(t1);
			if (detaching) detach(button);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $foo,
		$$unsubscribe_foo = noop,
		$$subscribe_foo = () => ($$unsubscribe_foo(), $$unsubscribe_foo = subscribe(foo, $$value => $$invalidate(1, $foo = $$value)), foo);

	$$self.$$.on_destroy.push(() => $$unsubscribe_foo());
	let foo = writable(0);
	$$subscribe_foo();
	const click_handler = () => $$subscribe_foo($$invalidate(0, foo = writable(0)));
	return [foo, $foo, click_handler];
}

class Component extends AtletikComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Component;