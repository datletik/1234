/* generated by Atletik vX.Y.Z */
"use strict";

const { AtletikComponent, init, safe_not_equal } = require("Atletik/internal");
const { f: f_1, g: g_1 } = require("./d");
const { h: h_1 } = require("./e");
const { i: j } = require("./f");
exports.e = require("./c").d;
exports.c = require("./b").c;
exports.a = require("./a").a;
exports.b = require("./a").b;

class Component extends AtletikComponent {
	constructor(options) {
		super();
		init(this, options, null, null, safe_not_equal, {});
	}

	get f() {
		return f_1;
	}

	get g() {
		return g_1;
	}

	get h() {
		return h_1;
	}

	get j() {
		return j;
	}
}

exports.default = Component;