/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(3);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _app = __webpack_require__(4);

	var _app2 = _interopRequireDefault(_app);

	var _routes = __webpack_require__(24);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vueRouter2.default);

	var router = (0, _routes2.default)(_vueRouter2.default);

	new _vue2.default({
	  router: router,
	  el: '#js-app',
	  render: function render(h) {
	    return h(_app2.default);
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * Vue.js v2.1.7
	 * (c) 2014-2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	/*  */

	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function _toString (val) {
	  return val == null
	    ? ''
	    : typeof val === 'object'
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}

	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val, 10);
	  return (n || n === 0) ? n : val
	}

	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}

	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);

	/**
	 * Remove an item from an array
	 */
	function remove$1 (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}

	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}

	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return typeof value === 'string' || typeof value === 'number'
	}

	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null);
	  return function cachedFn (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str))
	  }
	}

	/**
	 * Camelize a hyphen-delmited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	});

	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	});

	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /([^-])([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase()
	});

	/**
	 * Simple bind, faster than native
	 */
	function bind$1 (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length;
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	  // record original fn length
	  boundFn._length = fn.length;
	  return boundFn
	}

	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret
	}

	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject (obj) {
	  return toString.call(obj) === OBJECT_STRING
	}

	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res
	}

	/**
	 * Perform no operation.
	 */
	function noop () {}

	/**
	 * Always return false.
	 */
	var no = function () { return false; };

	/**
	 * Return same value
	 */
	var identity = function (_) { return _; };

	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys (modules) {
	  return modules.reduce(function (keys, m) {
	    return keys.concat(m.staticKeys || [])
	  }, []).join(',')
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  var isObjectA = isObject(a);
	  var isObjectB = isObject(b);
	  if (isObjectA && isObjectB) {
	    return JSON.stringify(a) === JSON.stringify(b)
	  } else if (!isObjectA && !isObjectB) {
	    return String(a) === String(b)
	  } else {
	    return false
	  }
	}

	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
	}

	/*  */

	var config = {
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  optionMergeStrategies: Object.create(null),

	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,

	  /**
	   * Whether to enable devtools
	   */
	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,

	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: [],

	  /**
	   * Custom user key aliases for v-on
	   */
	  keyCodes: Object.create(null),

	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,

	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,

	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,

	  /**
	   * Parse the real tag name for the specific platform.
	   */
	  parsePlatformTagName: identity,

	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,

	  /**
	   * List of asset types that a component can own.
	   */
	  _assetTypes: [
	    'component',
	    'directive',
	    'filter'
	  ],

	  /**
	   * List of lifecycle hooks.
	   */
	  _lifecycleHooks: [
	    'beforeCreate',
	    'created',
	    'beforeMount',
	    'mounted',
	    'beforeUpdate',
	    'updated',
	    'beforeDestroy',
	    'destroyed',
	    'activated',
	    'deactivated'
	  ],

	  /**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
	  _maxUpdateCount: 100
	};

	/*  */

	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F
	}

	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w.$]/;
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  } else {
	    var segments = path.split('.');
	    return function (obj) {
	      for (var i = 0; i < segments.length; i++) {
	        if (!obj) { return }
	        obj = obj[segments[i]];
	      }
	      return obj
	    }
	  }
	}

	/*  */
	/* globals MutationObserver */

	// can we use __proto__?
	var hasProto = '__proto__' in {};

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined';
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

	// this needs to be lazy-evaled because vue may be required before
	// vue-server-renderer can set VUE_ENV
	var _isServer;
	var isServerRendering = function () {
	  if (_isServer === undefined) {
	    /* istanbul ignore if */
	    if (!inBrowser && typeof global !== 'undefined') {
	      // detect presence of vue-server-renderer and avoid
	      // Webpack shimming the process
	      _isServer = global['process'].env.VUE_ENV === 'server';
	    } else {
	      _isServer = false;
	    }
	  }
	  return _isServer
	};

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	/* istanbul ignore next */
	function isNative (Ctor) {
	  return /native code/.test(Ctor.toString())
	}

	/**
	 * Defer a task to execute it asynchronously.
	 */
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;

	  function nextTickHandler () {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    var logError = function (err) { console.error(err); };
	    timerFunc = function () {
	      p.then(nextTickHandler).catch(logError);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) { setTimeout(noop); }
	    };
	  } else if (typeof MutationObserver !== 'undefined' && (
	    isNative(MutationObserver) ||
	    // PhantomJS and iOS 7.x
	    MutationObserver.toString() === '[object MutationObserverConstructor]'
	  )) {
	    // use MutationObserver where native Promise is not available,
	    // e.g. PhantomJS IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = function () {
	      setTimeout(nextTickHandler, 0);
	    };
	  }

	  return function queueNextTick (cb, ctx) {
	    var _resolve;
	    callbacks.push(function () {
	      if (cb) { cb.call(ctx); }
	      if (_resolve) { _resolve(ctx); }
	    });
	    if (!pending) {
	      pending = true;
	      timerFunc();
	    }
	    if (!cb && typeof Promise !== 'undefined') {
	      return new Promise(function (resolve) {
	        _resolve = resolve;
	      })
	    }
	  }
	})();

	var _Set;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = (function () {
	    function Set () {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] === true
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = true;
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null);
	    };

	    return Set;
	  }());
	}

	var warn = noop;
	var formatComponentName;

	if (process.env.NODE_ENV !== 'production') {
	  var hasConsole = typeof console !== 'undefined';

	  warn = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.error("[Vue warn]: " + msg + " " + (
	        vm ? formatLocation(formatComponentName(vm)) : ''
	      ));
	    }
	  };

	  formatComponentName = function (vm) {
	    if (vm.$root === vm) {
	      return 'root instance'
	    }
	    var name = vm._isVue
	      ? vm.$options.name || vm.$options._componentTag
	      : vm.name;
	    return (
	      (name ? ("component <" + name + ">") : "anonymous component") +
	      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
	    )
	  };

	  var formatLocation = function (str) {
	    if (str === 'anonymous component') {
	      str += " - use the \"name\" option for better debugging messages.";
	    }
	    return ("\n(found in " + str + ")")
	  };
	}

	/*  */


	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid$1++;
	  this.subs = [];
	};

	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub);
	};

	Dep.prototype.removeSub = function removeSub (sub) {
	  remove$1(this.subs, sub);
	};

	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};

	Dep.prototype.notify = function notify () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];

	function pushTarget (_target) {
	  if (Dep.target) { targetStack.push(Dep.target); }
	  Dep.target = _target;
	}

	function popTarget () {
	  Dep.target = targetStack.pop();
	}

	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator () {
	    var arguments$1 = arguments;

	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments$1[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break
	      case 'unshift':
	        inserted = args;
	        break
	      case 'splice':
	        inserted = args.slice(2);
	        break
	    }
	    if (inserted) { ob.observeArray(inserted); }
	    // notify change
	    ob.dep.notify();
	    return result
	  });
	});

	/*  */

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */
	var observerState = {
	  shouldConvert: true,
	  isSettingProps: false
	};

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = hasProto
	      ? protoAugment
	      : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	};

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive$$1(obj, keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 */
	/* istanbul ignore next */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value, asRootData) {
	  if (!isObject(value)) {
	    return
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (
	    observerState.shouldConvert &&
	    !isServerRendering() &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value);
	  }
	  if (asRootData && ob) {
	    ob.vmCount++;
	  }
	  return ob
	}

	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive$$1 (
	  obj,
	  key,
	  val,
	  customSetter
	) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (Array.isArray(value)) {
	          dependArray(value);
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val;
	      /* eslint-disable no-self-compare */
	      if (newVal === value || (newVal !== newVal && value !== value)) {
	        return
	      }
	      /* eslint-enable no-self-compare */
	      if (process.env.NODE_ENV !== 'production' && customSetter) {
	        customSetter();
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set$1 (obj, key, val) {
	  if (Array.isArray(obj)) {
	    obj.length = Math.max(obj.length, key);
	    obj.splice(key, 1, val);
	    return val
	  }
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return
	  }
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    );
	    return
	  }
	  if (!ob) {
	    obj[key] = val;
	    return
	  }
	  defineReactive$$1(ob.value, key, val);
	  ob.dep.notify();
	  return val
	}

	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (obj, key) {
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    );
	    return
	  }
	  if (!hasOwn(obj, key)) {
	    return
	  }
	  delete obj[key];
	  if (!ob) {
	    return
	  }
	  ob.dep.notify();
	}

	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray (value) {
	  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}

	/*  */

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies;

	/**
	 * Options with restrictions
	 */
	if (process.env.NODE_ENV !== 'production') {
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      );
	    }
	    return defaultStrat(parent, child)
	  };
	}

	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  if (!from) { return to }
	  var key, toVal, fromVal;
	  var keys = Object.keys(from);
	  for (var i = 0; i < keys.length; i++) {
	    key = keys[i];
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set$1(to, key, fromVal);
	    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to
	}

	/**
	 * Data
	 */
	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      );
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal;
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}

	config._lifecycleHooks.forEach(function (hook) {
	  strats[hook] = mergeHook;
	});

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal
	    ? extend(res, childVal)
	    : res
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (parentVal, childVal) {
	  /* istanbul ignore if */
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child];
	  }
	  return ret
	};

	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret
	};

	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	};

	/**
	 * Validate component names
	 */
	function checkComponents (options) {
	  for (var key in options.components) {
	    var lower = key.toLowerCase();
	    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	      warn(
	        'Do not use built-in or reserved HTML elements as component ' +
	        'id: ' + key
	      );
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options) {
	  var props = options.props;
	  if (!props) { return }
	  var res = {};
	  var i, val, name;
	  if (Array.isArray(props)) {
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        name = camelize(val);
	        res[name] = { type: null };
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('props must be strings when using array syntax.');
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key];
	      name = camelize(key);
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val };
	    }
	  }
	  options.props = res;
	}

	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives;
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key];
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def };
	      }
	    }
	  }
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  if (process.env.NODE_ENV !== 'production') {
	    checkComponents(child);
	  }
	  normalizeProps(child);
	  normalizeDirectives(child);
	  var extendsFrom = child.extends;
	  if (extendsFrom) {
	    parent = typeof extendsFrom === 'function'
	      ? mergeOptions(parent, extendsFrom.options, vm)
	      : mergeOptions(parent, extendsFrom, vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      if (mixin.prototype instanceof Vue$2) {
	        mixin = mixin.options;
	      }
	      parent = mergeOptions(parent, mixin, vm);
	    }
	  }
	  var options = {};
	  var key;
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type];
	  // check local registration variations first
	  if (hasOwn(assets, id)) { return assets[id] }
	  var camelizedId = camelize(id);
	  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
	  var PascalCaseId = capitalize(camelizedId);
	  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
	  // fallback to prototype chain
	  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    );
	  }
	  return res
	}

	/*  */

	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  var prop = propOptions[key];
	  var absent = !hasOwn(propsData, key);
	  var value = propsData[key];
	  // handle boolean props
	  if (isType(Boolean, prop.type)) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
	      value = true;
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key);
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldConvert = observerState.shouldConvert;
	    observerState.shouldConvert = true;
	    observe(value);
	    observerState.shouldConvert = prevShouldConvert;
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    assertProp(prop, key, value, vm, absent);
	  }
	  return value
	}

	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, key) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Invalid default value for prop "' + key + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    );
	  }
	  // the raw prop value was also undefined from previous render,
	  // return previous default value to avoid unnecessary watcher trigger
	  if (vm && vm.$options.propsData &&
	    vm.$options.propsData[key] === undefined &&
	    vm[key] !== undefined) {
	    return vm[key]
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && prop.type !== Function
	    ? def.call(vm)
	    : def
	}

	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    );
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type;
	  var valid = !type || type === true;
	  var expectedTypes = [];
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    warn(
	      'Invalid prop: type check failed for prop "' + name + '".' +
	      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
	      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
	      vm
	    );
	    return
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      );
	    }
	  }
	}

	/**
	 * Assert the type of a value
	 */
	function assertType (value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (expectedType === 'String') {
	    valid = typeof value === (expectedType = 'string');
	  } else if (expectedType === 'Number') {
	    valid = typeof value === (expectedType = 'number');
	  } else if (expectedType === 'Boolean') {
	    valid = typeof value === (expectedType = 'boolean');
	  } else if (expectedType === 'Function') {
	    valid = typeof value === (expectedType = 'function');
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value);
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}

	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match && match[1]
	}

	function isType (type, fn) {
	  if (!Array.isArray(fn)) {
	    return getType(fn) === getType(type)
	  }
	  for (var i = 0, len = fn.length; i < len; i++) {
	    if (getType(fn[i]) === getType(type)) {
	      return true
	    }
	  }
	  /* istanbul ignore next */
	  return false
	}



	var util = Object.freeze({
		defineReactive: defineReactive$$1,
		_toString: _toString,
		toNumber: toNumber,
		makeMap: makeMap,
		isBuiltInTag: isBuiltInTag,
		remove: remove$1,
		hasOwn: hasOwn,
		isPrimitive: isPrimitive,
		cached: cached,
		camelize: camelize,
		capitalize: capitalize,
		hyphenate: hyphenate,
		bind: bind$1,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		toObject: toObject,
		noop: noop,
		no: no,
		identity: identity,
		genStaticKeys: genStaticKeys,
		looseEqual: looseEqual,
		looseIndexOf: looseIndexOf,
		isReserved: isReserved,
		def: def,
		parsePath: parsePath,
		hasProto: hasProto,
		inBrowser: inBrowser,
		UA: UA,
		isIE: isIE,
		isIE9: isIE9,
		isEdge: isEdge,
		isAndroid: isAndroid,
		isIOS: isIOS,
		isServerRendering: isServerRendering,
		devtools: devtools,
		nextTick: nextTick,
		get _Set () { return _Set; },
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		get warn () { return warn; },
		get formatComponentName () { return formatComponentName; },
		validateProp: validateProp
	});

	/* not type checking this file because flow doesn't play well with Proxy */

	var initProxy;

	if (process.env.NODE_ENV !== 'production') {
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );

	  var warnNonPresent = function (target, key) {
	    warn(
	      "Property or method \"" + key + "\" is not defined on the instance but " +
	      "referenced during render. Make sure to declare reactive data " +
	      "properties in the data option.",
	      target
	    );
	  };

	  var hasProxy =
	    typeof Proxy !== 'undefined' &&
	    Proxy.toString().match(/native code/);

	  if (hasProxy) {
	    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
	    config.keyCodes = new Proxy(config.keyCodes, {
	      set: function set (target, key, value) {
	        if (isBuiltInModifier(key)) {
	          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
	          return false
	        } else {
	          target[key] = value;
	          return true
	        }
	      }
	    });
	  }

	  var hasHandler = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warnNonPresent(target, key);
	      }
	      return has || !isAllowed
	    }
	  };

	  var getHandler = {
	    get: function get (target, key) {
	      if (typeof key === 'string' && !(key in target)) {
	        warnNonPresent(target, key);
	      }
	      return target[key]
	    }
	  };

	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      // determine which proxy handler to use
	      var options = vm.$options;
	      var handlers = options.render && options.render._withStripped
	        ? getHandler
	        : hasHandler;
	      vm._renderProxy = new Proxy(vm, handlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}

	/*  */


	var queue = [];
	var has$1 = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;

	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  queue.length = 0;
	  has$1 = {};
	  if (process.env.NODE_ENV !== 'production') {
	    circular = {};
	  }
	  waiting = flushing = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  flushing = true;

	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; });

	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    var watcher = queue[index];
	    var id = watcher.id;
	    has$1[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has$1[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        );
	        break
	      }
	    }
	  }

	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }

	  resetSchedulerState();
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id;
	  if (has$1[id] == null) {
	    has$1[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i >= 0 && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(Math.max(i, index) + 1, 0, watcher);
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushSchedulerQueue);
	    }
	  }
	}

	/*  */

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options
	) {
	  this.vm = vm;
	  vm._watchers.push(this);
	  // options
	  if (options) {
	    this.deep = !!options.deep;
	    this.user = !!options.user;
	    this.lazy = !!options.lazy;
	    this.sync = !!options.sync;
	  } else {
	    this.deep = this.user = this.lazy = this.sync = false;
	  }
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.expression = process.env.NODE_ENV !== 'production'
	    ? expOrFn.toString()
	    : '';
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      );
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get();
	};

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this);
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  popTarget();
	  this.cleanupDeps();
	  return value
	};

	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	    var this$1 = this;

	  var i = this.deps.length;
	  while (i--) {
	    var dep = this$1.deps[i];
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync) {
	    this.run();
	  } else {
	    queueWatcher(this);
	  }
	};

	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get();
	    if (
	      value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          /* istanbul ignore else */
	          if (config.errorHandler) {
	            config.errorHandler.call(null, e, this.vm);
	          } else {
	            process.env.NODE_ENV !== 'production' && warn(
	              ("Error in watcher \"" + (this.expression) + "\""),
	              this.vm
	            );
	            throw e
	          }
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get();
	  this.dirty = false;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	    var this$1 = this;

	  var i = this.deps.length;
	  while (i--) {
	    this$1.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subscriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	    var this$1 = this;

	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      remove$1(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this$1.deps[i].removeSub(this$1);
	    }
	    this.active = false;
	  }
	};

	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	var seenObjects = new _Set();
	function traverse (val) {
	  seenObjects.clear();
	  _traverse(val, seenObjects);
	}

	function _traverse (val, seen) {
	  var i, keys;
	  var isA = Array.isArray(val);
	  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
	    return
	  }
	  if (val.__ob__) {
	    var depId = val.__ob__.dep.id;
	    if (seen.has(depId)) {
	      return
	    }
	    seen.add(depId);
	  }
	  if (isA) {
	    i = val.length;
	    while (i--) { _traverse(val[i], seen); }
	  } else {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) { _traverse(val[keys[i]], seen); }
	  }
	}

	/*  */

	function initState (vm) {
	  vm._watchers = [];
	  var opts = vm.$options;
	  if (opts.props) { initProps(vm, opts.props); }
	  if (opts.methods) { initMethods(vm, opts.methods); }
	  if (opts.data) {
	    initData(vm);
	  } else {
	    observe(vm._data = {}, true /* asRootData */);
	  }
	  if (opts.computed) { initComputed(vm, opts.computed); }
	  if (opts.watch) { initWatch(vm, opts.watch); }
	}

	var isReservedProp = { key: 1, ref: 1, slot: 1 };

	function initProps (vm, props) {
	  var propsData = vm.$options.propsData || {};
	  var keys = vm.$options._propKeys = Object.keys(props);
	  var isRoot = !vm.$parent;
	  // root instance props should be converted
	  observerState.shouldConvert = isRoot;
	  var loop = function ( i ) {
	    var key = keys[i];
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      if (isReservedProp[key]) {
	        warn(
	          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
	          vm
	        );
	      }
	      defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
	        if (vm.$parent && !observerState.isSettingProps) {
	          warn(
	            "Avoid mutating a prop directly since the value will be " +
	            "overwritten whenever the parent component re-renders. " +
	            "Instead, use a data or computed property based on the prop's " +
	            "value. Prop being mutated: \"" + key + "\"",
	            vm
	          );
	        }
	      });
	    } else {
	      defineReactive$$1(vm, key, validateProp(key, props, propsData, vm));
	    }
	  };

	  for (var i = 0; i < keys.length; i++) loop( i );
	  observerState.shouldConvert = true;
	}

	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? data.call(vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    process.env.NODE_ENV !== 'production' && warn(
	      'data functions should return an object:\n' +
	      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
	      vm
	    );
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var i = keys.length;
	  while (i--) {
	    if (props && hasOwn(props, keys[i])) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      );
	    } else {
	      proxy(vm, keys[i]);
	    }
	  }
	  // observe data
	  observe(data, true /* asRootData */);
	}

	var computedSharedDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};

	function initComputed (vm, computed) {
	  for (var key in computed) {
	    var userDef = computed[key];
	    if (typeof userDef === 'function') {
	      computedSharedDefinition.get = makeComputedGetter(userDef, vm);
	      computedSharedDefinition.set = noop;
	    } else {
	      computedSharedDefinition.get = userDef.get
	        ? userDef.cache !== false
	          ? makeComputedGetter(userDef.get, vm)
	          : bind$1(userDef.get, vm)
	        : noop;
	      computedSharedDefinition.set = userDef.set
	        ? bind$1(userDef.set, vm)
	        : noop;
	    }
	    Object.defineProperty(vm, key, computedSharedDefinition);
	  }
	}

	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, noop, {
	    lazy: true
	  });
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (Dep.target) {
	      watcher.depend();
	    }
	    return watcher.value
	  }
	}

	function initMethods (vm, methods) {
	  for (var key in methods) {
	    vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
	    if (process.env.NODE_ENV !== 'production' && methods[key] == null) {
	      warn(
	        "method \"" + key + "\" has an undefined value in the component definition. " +
	        "Did you reference the function correctly?",
	        vm
	      );
	    }
	  }
	}

	function initWatch (vm, watch) {
	  for (var key in watch) {
	    var handler = watch[key];
	    if (Array.isArray(handler)) {
	      for (var i = 0; i < handler.length; i++) {
	        createWatcher(vm, key, handler[i]);
	      }
	    } else {
	      createWatcher(vm, key, handler);
	    }
	  }
	}

	function createWatcher (vm, key, handler) {
	  var options;
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  vm.$watch(key, handler, options);
	}

	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () {
	    return this._data
	  };
	  if (process.env.NODE_ENV !== 'production') {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      );
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);

	  Vue.prototype.$set = set$1;
	  Vue.prototype.$delete = del;

	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this;
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn () {
	      watcher.teardown();
	    }
	  };
	}

	function proxy (vm, key) {
	  if (!isReserved(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter () {
	        return vm._data[key]
	      },
	      set: function proxySetter (val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}

	/*  */

	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  context,
	  componentOptions
	) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = undefined;
	  this.context = context;
	  this.functionalContext = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.child = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	  this.isOnce = false;
	};

	var createEmptyVNode = function () {
	  var node = new VNode();
	  node.text = '';
	  node.isComment = true;
	  return node
	};

	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}

	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.context,
	    vnode.componentOptions
	  );
	  cloned.ns = vnode.ns;
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isCloned = true;
	  return cloned
	}

	function cloneVNodes (vnodes) {
	  var res = new Array(vnodes.length);
	  for (var i = 0; i < vnodes.length; i++) {
	    res[i] = cloneVNode(vnodes[i]);
	  }
	  return res
	}

	/*  */

	function mergeVNodeHook (def, hookKey, hook, key) {
	  key = key + hookKey;
	  var injectedHash = def.__injected || (def.__injected = {});
	  if (!injectedHash[key]) {
	    injectedHash[key] = true;
	    var oldHook = def[hookKey];
	    if (oldHook) {
	      def[hookKey] = function () {
	        oldHook.apply(this, arguments);
	        hook.apply(this, arguments);
	      };
	    } else {
	      def[hookKey] = hook;
	    }
	  }
	}

	/*  */

	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1,
	  vm
	) {
	  var name, cur, old, fn, event, capture, once;
	  for (name in on) {
	    cur = on[name];
	    old = oldOn[name];
	    if (!cur) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Invalid handler for event \"" + name + "\": got " + String(cur),
	        vm
	      );
	    } else if (!old) {
	      once = name.charAt(0) === '~'; // Prefixed last, checked first
	      event = once ? name.slice(1) : name;
	      capture = event.charAt(0) === '!';
	      event = capture ? event.slice(1) : event;
	      if (Array.isArray(cur)) {
	        add(event, (cur.invoker = arrInvoker(cur)), once, capture);
	      } else {
	        if (!cur.invoker) {
	          fn = cur;
	          cur = on[name] = {};
	          cur.fn = fn;
	          cur.invoker = fnInvoker(cur);
	        }
	        add(event, cur.invoker, once, capture);
	      }
	    } else if (cur !== old) {
	      if (Array.isArray(old)) {
	        old.length = cur.length;
	        for (var i = 0; i < old.length; i++) { old[i] = cur[i]; }
	        on[name] = old;
	      } else {
	        old.fn = cur;
	        on[name] = old;
	      }
	    }
	  }
	  for (name in oldOn) {
	    if (!on[name]) {
	      once = name.charAt(0) === '~'; // Prefixed last, checked first
	      event = once ? name.slice(1) : name;
	      capture = event.charAt(0) === '!';
	      event = capture ? event.slice(1) : event;
	      remove$$1(event, oldOn[name].invoker, capture);
	    }
	  }
	}

	function arrInvoker (arr) {
	  return function (ev) {
	    var arguments$1 = arguments;

	    var single = arguments.length === 1;
	    for (var i = 0; i < arr.length; i++) {
	      single ? arr[i](ev) : arr[i].apply(null, arguments$1);
	    }
	  }
	}

	function fnInvoker (o) {
	  return function (ev) {
	    var single = arguments.length === 1;
	    single ? o.fn(ev) : o.fn.apply(null, arguments);
	  }
	}

	/*  */

	// The template compiler attempts to minimize the need for normalization by
	// statically analyzing the template at compile time.
	//
	// For plain HTML markup, normalization can be completely skipped because the
	// generated render function is guaranteed to return Array<VNode>. There are
	// two cases where extra normalization is needed:

	// 1. When the children contains components - because a functional component
	// may return an Array instead of a single root. In this case, just a simple
	// nomralization is needed - if any child is an Array, we flatten the whole
	// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
	// because functional components already normalize their own children.
	function simpleNormalizeChildren (children) {
	  for (var i = 0; i < children.length; i++) {
	    if (Array.isArray(children[i])) {
	      return Array.prototype.concat.apply([], children)
	    }
	  }
	  return children
	}

	// 2. When the children contains constrcuts that always generated nested Arrays,
	// e.g. <template>, <slot>, v-for, or when the children is provided by user
	// with hand-written render functions / JSX. In such cases a full normalization
	// is needed to cater to all possible types of children values.
	function normalizeChildren (children) {
	  return isPrimitive(children)
	    ? [createTextVNode(children)]
	    : Array.isArray(children)
	      ? normalizeArrayChildren(children)
	      : undefined
	}

	function normalizeArrayChildren (children, nestedIndex) {
	  var res = [];
	  var i, c, last;
	  for (i = 0; i < children.length; i++) {
	    c = children[i];
	    if (c == null || typeof c === 'boolean') { continue }
	    last = res[res.length - 1];
	    //  nested
	    if (Array.isArray(c)) {
	      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
	    } else if (isPrimitive(c)) {
	      if (last && last.text) {
	        last.text += String(c);
	      } else if (c !== '') {
	        // convert primitive to vnode
	        res.push(createTextVNode(c));
	      }
	    } else {
	      if (c.text && last && last.text) {
	        res[res.length - 1] = createTextVNode(last.text + c.text);
	      } else {
	        // default key for nested array children (likely generated by v-for)
	        if (c.tag && c.key == null && nestedIndex != null) {
	          c.key = "__vlist" + nestedIndex + "_" + i + "__";
	        }
	        res.push(c);
	      }
	    }
	  }
	  return res
	}

	/*  */

	function getFirstComponentChild (children) {
	  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
	}

	/*  */

	function initEvents (vm) {
	  vm._events = Object.create(null);
	  vm._hasHookEvent = false;
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  if (listeners) {
	    updateComponentListeners(vm, listeners);
	  }
	}

	var target;

	function add$1 (event, fn, once) {
	  if (once) {
	    target.$once(event, fn);
	  } else {
	    target.$on(event, fn);
	  }
	}

	function remove$2 (event, fn) {
	  target.$off(event, fn);
	}

	function updateComponentListeners (
	  vm,
	  listeners,
	  oldListeners
	) {
	  target = vm;
	  updateListeners(listeners, oldListeners || {}, add$1, remove$2, vm);
	}

	function eventsMixin (Vue) {
	  var hookRE = /^hook:/;
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
	    // optimize hook:event cost by using a boolean flag marked at registration
	    // instead of a hash lookup
	    if (hookRE.test(event)) {
	      vm._hasHookEvent = true;
	    }
	    return vm
	  };

	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on () {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm
	  };

	  Vue.prototype.$off = function (event, fn) {
	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm
	    }
	    if (arguments.length === 1) {
	      vm._events[event] = null;
	      return vm
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1);
	        break
	      }
	    }
	    return vm
	  };

	  Vue.prototype.$emit = function (event) {
	    var vm = this;
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        cbs[i].apply(vm, args);
	      }
	    }
	    return vm
	  };
	}

	/*  */

	var activeInstance = null;

	function initLifecycle (vm) {
	  var options = vm.$options;

	  // locate first non-abstract parent
	  var parent = options.parent;
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent;
	    }
	    parent.$children.push(vm);
	  }

	  vm.$parent = parent;
	  vm.$root = parent ? parent.$root : vm;

	  vm.$children = [];
	  vm.$refs = {};

	  vm._watcher = null;
	  vm._inactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}

	function lifecycleMixin (Vue) {
	  Vue.prototype._mount = function (
	    el,
	    hydrating
	  ) {
	    var vm = this;
	    vm.$el = el;
	    if (!vm.$options.render) {
	      vm.$options.render = createEmptyVNode;
	      if (process.env.NODE_ENV !== 'production') {
	        /* istanbul ignore if */
	        if (vm.$options.template && vm.$options.template.charAt(0) !== '#') {
	          warn(
	            'You are using the runtime-only build of Vue where the template ' +
	            'option is not available. Either pre-compile the templates into ' +
	            'render functions, or use the compiler-included build.',
	            vm
	          );
	        } else {
	          warn(
	            'Failed to mount component: template or render function not defined.',
	            vm
	          );
	        }
	      }
	    }
	    callHook(vm, 'beforeMount');
	    vm._watcher = new Watcher(vm, function () {
	      vm._update(vm._render(), hydrating);
	    }, noop);
	    hydrating = false;
	    // manually mounted instance, call mounted on self
	    // mounted is called for render-created child components in its inserted hook
	    if (vm.$vnode == null) {
	      vm._isMounted = true;
	      callHook(vm, 'mounted');
	    }
	    return vm
	  };

	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this;
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate');
	    }
	    var prevEl = vm.$el;
	    var prevVnode = vm._vnode;
	    var prevActiveInstance = activeInstance;
	    activeInstance = vm;
	    vm._vnode = vnode;
	    // Vue.prototype.__patch__ is injected in entry points
	    // based on the rendering backend used.
	    if (!prevVnode) {
	      // initial render
	      vm.$el = vm.__patch__(
	        vm.$el, vnode, hydrating, false /* removeOnly */,
	        vm.$options._parentElm,
	        vm.$options._refElm
	      );
	    } else {
	      // updates
	      vm.$el = vm.__patch__(prevVnode, vnode);
	    }
	    activeInstance = prevActiveInstance;
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null;
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm;
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el;
	    }
	    if (vm._isMounted) {
	      callHook(vm, 'updated');
	    }
	  };

	  Vue.prototype._updateFromParent = function (
	    propsData,
	    listeners,
	    parentVnode,
	    renderChildren
	  ) {
	    var vm = this;
	    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
	    vm.$options._parentVnode = parentVnode;
	    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
	    if (vm._vnode) { // update child tree's parent
	      vm._vnode.parent = parentVnode;
	    }
	    vm.$options._renderChildren = renderChildren;
	    // update props
	    if (propsData && vm.$options.props) {
	      observerState.shouldConvert = false;
	      if (process.env.NODE_ENV !== 'production') {
	        observerState.isSettingProps = true;
	      }
	      var propKeys = vm.$options._propKeys || [];
	      for (var i = 0; i < propKeys.length; i++) {
	        var key = propKeys[i];
	        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
	      }
	      observerState.shouldConvert = true;
	      if (process.env.NODE_ENV !== 'production') {
	        observerState.isSettingProps = false;
	      }
	      vm.$options.propsData = propsData;
	    }
	    // update listeners
	    if (listeners) {
	      var oldListeners = vm.$options._parentListeners;
	      vm.$options._parentListeners = listeners;
	      updateComponentListeners(vm, listeners, oldListeners);
	    }
	    // resolve slots + force update if has children
	    if (hasChildren) {
	      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
	      vm.$forceUpdate();
	    }
	  };

	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	  };

	  Vue.prototype.$destroy = function () {
	    var vm = this;
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy');
	    vm._isBeingDestroyed = true;
	    // remove self from parent
	    var parent = vm.$parent;
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove$1(parent.$children, vm);
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown();
	    }
	    var i = vm._watchers.length;
	    while (i--) {
	      vm._watchers[i].teardown();
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--;
	    }
	    // call the last hook...
	    vm._isDestroyed = true;
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	    // invoke destroy hooks on current rendered tree
	    vm.__patch__(vm._vnode, null);
	  };
	}

	function callHook (vm, hook) {
	  var handlers = vm.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(vm);
	    }
	  }
	  if (vm._hasHookEvent) {
	    vm.$emit('hook:' + hook);
	  }
	}

	/*  */

	var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
	var hooksToMerge = Object.keys(hooks);

	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (!Ctor) {
	    return
	  }

	  var baseCtor = context.$options._base;
	  if (isObject(Ctor)) {
	    Ctor = baseCtor.extend(Ctor);
	  }

	  if (typeof Ctor !== 'function') {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(("Invalid Component definition: " + (String(Ctor))), context);
	    }
	    return
	  }

	  // async component
	  if (!Ctor.cid) {
	    if (Ctor.resolved) {
	      Ctor = Ctor.resolved;
	    } else {
	      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
	        // it's ok to queue this on every render because
	        // $forceUpdate is buffered by the scheduler.
	        context.$forceUpdate();
	      });
	      if (!Ctor) {
	        // return nothing if this is indeed an async component
	        // wait for the callback to trigger parent update.
	        return
	      }
	    }
	  }

	  // resolve constructor options in case global mixins are applied after
	  // component constructor creation
	  resolveConstructorOptions(Ctor);

	  data = data || {};

	  // extract props
	  var propsData = extractProps(data, Ctor);

	  // functional component
	  if (Ctor.options.functional) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }

	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  data.on = data.nativeOn;

	  if (Ctor.options.abstract) {
	    // abstract components do not keep anything
	    // other than props & listeners
	    data = {};
	  }

	  // merge component management hooks onto the placeholder node
	  mergeHooks(data);

	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
	  );
	  return vnode
	}

	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  context,
	  children
	) {
	  var props = {};
	  var propOptions = Ctor.options.props;
	  if (propOptions) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData);
	    }
	  }
	  // ensure the createElement function in functional components
	  // gets a unique context - this is necessary for correct named slot check
	  var _context = Object.create(context);
	  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
	  var vnode = Ctor.options.render.call(null, h, {
	    props: props,
	    data: data,
	    parent: context,
	    children: children,
	    slots: function () { return resolveSlots(children, context); }
	  });
	  if (vnode instanceof VNode) {
	    vnode.functionalContext = context;
	    if (data.slot) {
	      (vnode.data || (vnode.data = {})).slot = data.slot;
	    }
	  }
	  return vnode
	}

	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent, // activeInstance in lifecycle state
	  parentElm,
	  refElm
	) {
	  var vnodeComponentOptions = vnode.componentOptions;
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children,
	    _parentElm: parentElm || null,
	    _refElm: refElm || null
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (inlineTemplate) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnodeComponentOptions.Ctor(options)
	}

	function init (
	  vnode,
	  hydrating,
	  parentElm,
	  refElm
	) {
	  if (!vnode.child || vnode.child._isDestroyed) {
	    var child = vnode.child = createComponentInstanceForVnode(
	      vnode,
	      activeInstance,
	      parentElm,
	      refElm
	    );
	    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	  } else if (vnode.data.keepAlive) {
	    // kept-alive components, treat as a patch
	    var mountedNode = vnode; // work around flow
	    prepatch(mountedNode, mountedNode);
	  }
	}

	function prepatch (
	  oldVnode,
	  vnode
	) {
	  var options = vnode.componentOptions;
	  var child = vnode.child = oldVnode.child;
	  child._updateFromParent(
	    options.propsData, // updated props
	    options.listeners, // updated listeners
	    vnode, // new parent vnode
	    options.children // new children
	  );
	}

	function insert (vnode) {
	  if (!vnode.child._isMounted) {
	    vnode.child._isMounted = true;
	    callHook(vnode.child, 'mounted');
	  }
	  if (vnode.data.keepAlive) {
	    vnode.child._inactive = false;
	    callHook(vnode.child, 'activated');
	  }
	}

	function destroy$1 (vnode) {
	  if (!vnode.child._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.child.$destroy();
	    } else {
	      vnode.child._inactive = true;
	      callHook(vnode.child, 'deactivated');
	    }
	  }
	}

	function resolveAsyncComponent (
	  factory,
	  baseCtor,
	  cb
	) {
	  if (factory.requested) {
	    // pool callbacks
	    factory.pendingCallbacks.push(cb);
	  } else {
	    factory.requested = true;
	    var cbs = factory.pendingCallbacks = [cb];
	    var sync = true;

	    var resolve = function (res) {
	      if (isObject(res)) {
	        res = baseCtor.extend(res);
	      }
	      // cache resolved
	      factory.resolved = res;
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res);
	        }
	      }
	    };

	    var reject = function (reason) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      );
	    };

	    var res = factory(resolve, reject);

	    // handle promise
	    if (res && typeof res.then === 'function' && !factory.resolved) {
	      res.then(resolve, reject);
	    }

	    sync = false;
	    // return in case resolved synchronously
	    return factory.resolved
	  }
	}

	function extractProps (data, Ctor) {
	  // we are only extracting raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (!propOptions) {
	    return
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  var domProps = data.domProps;
	  if (attrs || props || domProps) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey) ||
	      checkProp(res, domProps, key, altKey);
	    }
	  }
	  return res
	}

	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (hash) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true
	    }
	  }
	  return false
	}

	function mergeHooks (data) {
	  if (!data.hook) {
	    data.hook = {};
	  }
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    var fromParent = data.hook[key];
	    var ours = hooks[key];
	    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
	  }
	}

	function mergeHook$1 (one, two) {
	  return function (a, b, c, d) {
	    one(a, b, c, d);
	    two(a, b, c, d);
	  }
	}

	/*  */

	var SIMPLE_NORMALIZE = 1;
	var ALWAYS_NORMALIZE = 2;

	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  context,
	  tag,
	  data,
	  children,
	  normalizationType,
	  alwaysNormalize
	) {
	  if (Array.isArray(data) || isPrimitive(data)) {
	    normalizationType = children;
	    children = data;
	    data = undefined;
	  }
	  if (alwaysNormalize) { normalizationType = ALWAYS_NORMALIZE; }
	  return _createElement(context, tag, data, children, normalizationType)
	}

	function _createElement (
	  context,
	  tag,
	  data,
	  children,
	  normalizationType
	) {
	  if (data && data.__ob__) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return createEmptyVNode()
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return createEmptyVNode()
	  }
	  // support single function children as default scoped slot
	  if (Array.isArray(children) &&
	      typeof children[0] === 'function') {
	    data = data || {};
	    data.scopedSlots = { default: children[0] };
	    children.length = 0;
	  }
	  if (normalizationType === ALWAYS_NORMALIZE) {
	    children = normalizeChildren(children);
	  } else if (normalizationType === SIMPLE_NORMALIZE) {
	    children = simpleNormalizeChildren(children);
	  }
	  var vnode, ns;
	  if (typeof tag === 'string') {
	    var Ctor;
	    ns = config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      vnode = new VNode(
	        config.parsePlatformTagName(tag), data, children,
	        undefined, undefined, context
	      );
	    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      vnode = createComponent(Ctor, data, context, children, tag);
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      vnode = new VNode(
	        tag, data, children,
	        undefined, undefined, context
	      );
	    }
	  } else {
	    // direct component options / constructor
	    vnode = createComponent(tag, data, context, children);
	  }
	  if (vnode) {
	    if (ns) { applyNS(vnode, ns); }
	    return vnode
	  } else {
	    return createEmptyVNode()
	  }
	}

	function applyNS (vnode, ns) {
	  vnode.ns = ns;
	  if (vnode.tag === 'foreignObject') {
	    // use default namespace inside foreignObject
	    return
	  }
	  if (vnode.children) {
	    for (var i = 0, l = vnode.children.length; i < l; i++) {
	      var child = vnode.children[i];
	      if (child.tag && !child.ns) {
	        applyNS(child, ns);
	      }
	    }
	  }
	}

	/*  */

	function initRender (vm) {
	  vm.$vnode = null; // the placeholder node in parent tree
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null;
	  var parentVnode = vm.$options._parentVnode;
	  var renderContext = parentVnode && parentVnode.context;
	  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
	  vm.$scopedSlots = {};
	  // bind the createElement fn to this instance
	  // so that we get proper render context inside it.
	  // args order: tag, data, children, normalizationType, alwaysNormalize
	  // internal version is used by render functions compiled from templates
	  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
	  // normalization is always applied for the public version, used in
	  // user-written render functions.
	  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
	  if (vm.$options.el) {
	    vm.$mount(vm.$options.el);
	  }
	}

	function renderMixin (Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    return nextTick(fn, this)
	  };

	  Vue.prototype._render = function () {
	    var vm = this;
	    var ref = vm.$options;
	    var render = ref.render;
	    var staticRenderFns = ref.staticRenderFns;
	    var _parentVnode = ref._parentVnode;

	    if (vm._isMounted) {
	      // clone slot nodes on re-renders
	      for (var key in vm.$slots) {
	        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
	      }
	    }

	    if (_parentVnode && _parentVnode.data.scopedSlots) {
	      vm.$scopedSlots = _parentVnode.data.scopedSlots;
	    }

	    if (staticRenderFns && !vm._staticTrees) {
	      vm._staticTrees = [];
	    }
	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode;
	    // render self
	    var vnode;
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement);
	    } catch (e) {
	      /* istanbul ignore else */
	      if (config.errorHandler) {
	        config.errorHandler.call(null, e, vm);
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
	        }
	        throw e
	      }
	      // return previous vnode to prevent render error causing blank component
	      vnode = vm._vnode;
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        );
	      }
	      vnode = createEmptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode
	  };

	  // toString for mustaches
	  Vue.prototype._s = _toString;
	  // convert text to vnode
	  Vue.prototype._v = createTextVNode;
	  // number conversion
	  Vue.prototype._n = toNumber;
	  // empty vnode
	  Vue.prototype._e = createEmptyVNode;
	  // loose equal
	  Vue.prototype._q = looseEqual;
	  // loose indexOf
	  Vue.prototype._i = looseIndexOf;

	  // render static tree by index
	  Vue.prototype._m = function renderStatic (
	    index,
	    isInFor
	  ) {
	    var tree = this._staticTrees[index];
	    // if has already-rendered static tree and not inside v-for,
	    // we can reuse the same tree by doing a shallow clone.
	    if (tree && !isInFor) {
	      return Array.isArray(tree)
	        ? cloneVNodes(tree)
	        : cloneVNode(tree)
	    }
	    // otherwise, render a fresh tree.
	    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
	    markStatic(tree, ("__static__" + index), false);
	    return tree
	  };

	  // mark node as static (v-once)
	  Vue.prototype._o = function markOnce (
	    tree,
	    index,
	    key
	  ) {
	    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
	    return tree
	  };

	  function markStatic (tree, key, isOnce) {
	    if (Array.isArray(tree)) {
	      for (var i = 0; i < tree.length; i++) {
	        if (tree[i] && typeof tree[i] !== 'string') {
	          markStaticNode(tree[i], (key + "_" + i), isOnce);
	        }
	      }
	    } else {
	      markStaticNode(tree, key, isOnce);
	    }
	  }

	  function markStaticNode (node, key, isOnce) {
	    node.isStatic = true;
	    node.key = key;
	    node.isOnce = isOnce;
	  }

	  // filter resolution helper
	  Vue.prototype._f = function resolveFilter (id) {
	    return resolveAsset(this.$options, 'filters', id, true) || identity
	  };

	  // render v-for
	  Vue.prototype._l = function renderList (
	    val,
	    render
	  ) {
	    var ret, i, l, keys, key;
	    if (Array.isArray(val) || typeof val === 'string') {
	      ret = new Array(val.length);
	      for (i = 0, l = val.length; i < l; i++) {
	        ret[i] = render(val[i], i);
	      }
	    } else if (typeof val === 'number') {
	      ret = new Array(val);
	      for (i = 0; i < val; i++) {
	        ret[i] = render(i + 1, i);
	      }
	    } else if (isObject(val)) {
	      keys = Object.keys(val);
	      ret = new Array(keys.length);
	      for (i = 0, l = keys.length; i < l; i++) {
	        key = keys[i];
	        ret[i] = render(val[key], key, i);
	      }
	    }
	    return ret
	  };

	  // renderSlot
	  Vue.prototype._t = function (
	    name,
	    fallback,
	    props,
	    bindObject
	  ) {
	    var scopedSlotFn = this.$scopedSlots[name];
	    if (scopedSlotFn) { // scoped slot
	      props = props || {};
	      if (bindObject) {
	        extend(props, bindObject);
	      }
	      return scopedSlotFn(props) || fallback
	    } else {
	      var slotNodes = this.$slots[name];
	      // warn duplicate slot usage
	      if (slotNodes && process.env.NODE_ENV !== 'production') {
	        slotNodes._rendered && warn(
	          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	          "- this will likely cause render errors.",
	          this
	        );
	        slotNodes._rendered = true;
	      }
	      return slotNodes || fallback
	    }
	  };

	  // apply v-bind object
	  Vue.prototype._b = function bindProps (
	    data,
	    tag,
	    value,
	    asProp
	  ) {
	    if (value) {
	      if (!isObject(value)) {
	        process.env.NODE_ENV !== 'production' && warn(
	          'v-bind without argument expects an Object or Array value',
	          this
	        );
	      } else {
	        if (Array.isArray(value)) {
	          value = toObject(value);
	        }
	        for (var key in value) {
	          if (key === 'class' || key === 'style') {
	            data[key] = value[key];
	          } else {
	            var hash = asProp || config.mustUseProp(tag, key)
	              ? data.domProps || (data.domProps = {})
	              : data.attrs || (data.attrs = {});
	            hash[key] = value[key];
	          }
	        }
	      }
	    }
	    return data
	  };

	  // check v-on keyCodes
	  Vue.prototype._k = function checkKeyCodes (
	    eventKeyCode,
	    key,
	    builtInAlias
	  ) {
	    var keyCodes = config.keyCodes[key] || builtInAlias;
	    if (Array.isArray(keyCodes)) {
	      return keyCodes.indexOf(eventKeyCode) === -1
	    } else {
	      return keyCodes !== eventKeyCode
	    }
	  };
	}

	function resolveSlots (
	  children,
	  context
	) {
	  var slots = {};
	  if (!children) {
	    return slots
	  }
	  var defaultSlot = [];
	  var name, child;
	  for (var i = 0, l = children.length; i < l; i++) {
	    child = children[i];
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.functionalContext === context) &&
	        child.data && (name = child.data.slot)) {
	      var slot = (slots[name] || (slots[name] = []));
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children);
	      } else {
	        slot.push(child);
	      }
	    } else {
	      defaultSlot.push(child);
	    }
	  }
	  // ignore single whitespace
	  if (defaultSlot.length && !(
	    defaultSlot.length === 1 &&
	    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
	  )) {
	    slots.default = defaultSlot;
	  }
	  return slots
	}

	/*  */

	var uid = 0;

	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid++;
	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm.constructor),
	        options || {},
	        vm
	      );
	    }
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      initProxy(vm);
	    } else {
	      vm._renderProxy = vm;
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    callHook(vm, 'beforeCreate');
	    initState(vm);
	    callHook(vm, 'created');
	    initRender(vm);
	  };
	}

	function initInternalComponent (vm, options) {
	  var opts = vm.$options = Object.create(vm.constructor.options);
	  // doing this because it's faster than dynamic enumeration.
	  opts.parent = options.parent;
	  opts.propsData = options.propsData;
	  opts._parentVnode = options._parentVnode;
	  opts._parentListeners = options._parentListeners;
	  opts._renderChildren = options._renderChildren;
	  opts._componentTag = options._componentTag;
	  opts._parentElm = options._parentElm;
	  opts._refElm = options._refElm;
	  if (options.render) {
	    opts.render = options.render;
	    opts.staticRenderFns = options.staticRenderFns;
	  }
	}

	function resolveConstructorOptions (Ctor) {
	  var options = Ctor.options;
	  if (Ctor.super) {
	    var superOptions = Ctor.super.options;
	    var cachedSuperOptions = Ctor.superOptions;
	    var extendOptions = Ctor.extendOptions;
	    if (superOptions !== cachedSuperOptions) {
	      // super option changed
	      Ctor.superOptions = superOptions;
	      extendOptions.render = options.render;
	      extendOptions.staticRenderFns = options.staticRenderFns;
	      extendOptions._scopeId = options._scopeId;
	      options = Ctor.options = mergeOptions(superOptions, extendOptions);
	      if (options.name) {
	        options.components[options.name] = Ctor;
	      }
	    }
	  }
	  return options
	}

	function Vue$2 (options) {
	  if (process.env.NODE_ENV !== 'production' &&
	    !(this instanceof Vue$2)) {
	    warn('Vue is a constructor and should be called with the `new` keyword');
	  }
	  this._init(options);
	}

	initMixin(Vue$2);
	stateMixin(Vue$2);
	eventsMixin(Vue$2);
	lifecycleMixin(Vue$2);
	renderMixin(Vue$2);

	/*  */

	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this
	  };
	}

	/*  */

	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    this.options = mergeOptions(this.options, mixin);
	  };
	}

	/*  */

	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var SuperId = Super.cid;
	    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
	    if (cachedCtors[SuperId]) {
	      return cachedCtors[SuperId]
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn(
	          'Invalid component name: "' + name + '". Component names ' +
	          'can only contain alphanumeric characters and the hyphen, ' +
	          'and must start with a letter.'
	        );
	      }
	    }
	    var Sub = function VueComponent (options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    );
	    Sub['super'] = Super;
	    // allow further extension/mixin/plugin usage
	    Sub.extend = Super.extend;
	    Sub.mixin = Super.mixin;
	    Sub.use = Super.use;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options;
	    Sub.extendOptions = extendOptions;
	    // cache constructor
	    cachedCtors[SuperId] = Sub;
	    return Sub
	  };
	}

	/*  */

	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && config.isReservedTag(id)) {
	            warn(
	              'Do not use built-in or reserved HTML elements as component ' +
	              'id: ' + id
	            );
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id;
	          definition = this.options._base.extend(definition);
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition };
	        }
	        this.options[type + 's'][id] = definition;
	        return definition
	      }
	    };
	  });
	}

	/*  */

	var patternTypes = [String, RegExp];

	function matches (pattern, name) {
	  if (typeof pattern === 'string') {
	    return pattern.split(',').indexOf(name) > -1
	  } else {
	    return pattern.test(name)
	  }
	}

	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,
	  props: {
	    include: patternTypes,
	    exclude: patternTypes
	  },
	  created: function created () {
	    this.cache = Object.create(null);
	  },
	  render: function render () {
	    var vnode = getFirstComponentChild(this.$slots.default);
	    if (vnode && vnode.componentOptions) {
	      var opts = vnode.componentOptions;
	      // check pattern
	      var name = opts.Ctor.options.name || opts.tag;
	      if (name && (
	        (this.include && !matches(this.include, name)) ||
	        (this.exclude && matches(this.exclude, name))
	      )) {
	        return vnode
	      }
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? opts.Ctor.cid + (opts.tag ? ("::" + (opts.tag)) : '')
	        : vnode.key;
	      if (this.cache[key]) {
	        vnode.child = this.cache[key].child;
	      } else {
	        this.cache[key] = vnode;
	      }
	      vnode.data.keepAlive = true;
	    }
	    return vnode
	  },
	  destroyed: function destroyed () {
	    var this$1 = this;

	    for (var key in this.cache) {
	      var vnode = this$1.cache[key];
	      callHook(vnode.child, 'deactivated');
	      vnode.child.$destroy();
	    }
	  }
	};

	var builtInComponents = {
	  KeepAlive: KeepAlive
	};

	/*  */

	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () { return config; };
	  if (process.env.NODE_ENV !== 'production') {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);
	  Vue.util = util;
	  Vue.set = set$1;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;

	  Vue.options = Object.create(null);
	  config._assetTypes.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });

	  // this is used to identify the "base" constructor to extend all plain-object
	  // components with in Weex's multi-instance scenarios.
	  Vue.options._base = Vue;

	  extend(Vue.options.components, builtInComponents);

	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}

	initGlobalAPI(Vue$2);

	Object.defineProperty(Vue$2.prototype, '$isServer', {
	  get: isServerRendering
	});

	Vue$2.version = '2.1.7';

	/*  */

	// attributes that should be using props for binding
	var acceptValue = makeMap('input,textarea,option,select');
	var mustUseProp = function (tag, attr) {
	  return (
	    (attr === 'value' && acceptValue(tag)) ||
	    (attr === 'selected' && tag === 'option') ||
	    (attr === 'checked' && tag === 'input') ||
	    (attr === 'muted' && tag === 'video')
	  )
	};

	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	);

	var xlinkNS = 'http://www.w3.org/1999/xlink';

	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	};

	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	};

	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	};

	/*  */

	function genClassForVnode (vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (childNode.child) {
	    childNode = childNode.child._vnode;
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return genClassFromData(data)
	}

	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: child.class
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}

	function genClassFromData (data) {
	  var dynamicClass = data.class;
	  var staticClass = data.staticClass;
	  if (staticClass || dynamicClass) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}

	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}

	function stringifyClass (value) {
	  var res = '';
	  if (!value) {
	    return res
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  if (Array.isArray(value)) {
	    var stringified;
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        if ((stringified = stringifyClass(value[i]))) {
	          res += stringified + ' ';
	        }
	      }
	    }
	    return res.slice(0, -1)
	  }
	  if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) { res += key + ' '; }
	    }
	    return res.slice(0, -1)
	  }
	  /* istanbul ignore next */
	  return res
	}

	/*  */

	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML'
	};

	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template'
	);

	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,' +
	  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	);



	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	};

	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}

	var unknownElementCache = Object.create(null);
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}

	/*  */

	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn(
	        'Cannot find element: ' + selector
	      );
	      return document.createElement('div')
	    }
	  }
	  return el
	}

	/*  */

	function createElement$1 (tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm
	  }
	  if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm
	}

	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}

	function createTextNode (text) {
	  return document.createTextNode(text)
	}

	function createComment (text) {
	  return document.createComment(text)
	}

	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}

	function removeChild (node, child) {
	  node.removeChild(child);
	}

	function appendChild (node, child) {
	  node.appendChild(child);
	}

	function parentNode (node) {
	  return node.parentNode
	}

	function nextSibling (node) {
	  return node.nextSibling
	}

	function tagName (node) {
	  return node.tagName
	}

	function setTextContent (node, text) {
	  node.textContent = text;
	}

	function setAttribute (node, key, val) {
	  node.setAttribute(key, val);
	}


	var nodeOps = Object.freeze({
		createElement: createElement$1,
		createElementNS: createElementNS,
		createTextNode: createTextNode,
		createComment: createComment,
		insertBefore: insertBefore,
		removeChild: removeChild,
		appendChild: appendChild,
		parentNode: parentNode,
		nextSibling: nextSibling,
		tagName: tagName,
		setTextContent: setTextContent,
		setAttribute: setAttribute
	});

	/*  */

	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true);
	  }
	};

	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!key) { return }

	  var vm = vnode.context;
	  var ref = vnode.child || vnode.elm;
	  var refs = vm.$refs;
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove$1(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
	        refs[key].push(ref);
	      } else {
	        refs[key] = [ref];
	      }
	    } else {
	      refs[key] = ref;
	    }
	  }
	}

	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *

	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */

	var emptyNode = new VNode('', {}, []);

	var hooks$1 = ['create', 'activate', 'update', 'remove', 'destroy'];

	function isUndef (s) {
	  return s == null
	}

	function isDef (s) {
	  return s != null
	}

	function sameVnode (vnode1, vnode2) {
	  return (
	    vnode1.key === vnode2.key &&
	    vnode1.tag === vnode2.tag &&
	    vnode1.isComment === vnode2.isComment &&
	    !vnode1.data === !vnode2.data
	  )
	}

	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) { map[key] = i; }
	  }
	  return map
	}

	function createPatchFunction (backend) {
	  var i, j;
	  var cbs = {};

	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;

	  for (i = 0; i < hooks$1.length; ++i) {
	    cbs[hooks$1[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
	    }
	  }

	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }

	  function createRmCb (childElm, listeners) {
	    function remove$$1 () {
	      if (--remove$$1.listeners === 0) {
	        removeNode(childElm);
	      }
	    }
	    remove$$1.listeners = listeners;
	    return remove$$1
	  }

	  function removeNode (el) {
	    var parent = nodeOps.parentNode(el);
	    // element may have already been removed due to v-html / v-text
	    if (parent) {
	      nodeOps.removeChild(parent, el);
	    }
	  }

	  var inPre = 0;
	  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
	    vnode.isRootInsert = !nested; // for transition enter check
	    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
	      return
	    }

	    var data = vnode.data;
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (data && data.pre) {
	          inPre++;
	        }
	        if (
	          !inPre &&
	          !vnode.ns &&
	          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
	          config.isUnknownElement(tag)
	        ) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          );
	        }
	      }
	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag, vnode);
	      setScope(vnode);

	      /* istanbul ignore if */
	      {
	        createChildren(vnode, children, insertedVnodeQueue);
	        if (isDef(data)) {
	          invokeCreateHooks(vnode, insertedVnodeQueue);
	        }
	        insert(parentElm, vnode.elm, refElm);
	      }

	      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
	        inPre--;
	      }
	    } else if (vnode.isComment) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    }
	  }

	  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i = vnode.data;
	    if (isDef(i)) {
	      var isReactivated = isDef(vnode.child) && i.keepAlive;
	      if (isDef(i = i.hook) && isDef(i = i.init)) {
	        i(vnode, false /* hydrating */, parentElm, refElm);
	      }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(vnode.child)) {
	        initComponent(vnode, insertedVnodeQueue);
	        if (isReactivated) {
	          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
	        }
	        return true
	      }
	    }
	  }

	  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i;
	    // hack for #4339: a reactivated component with inner transition
	    // does not trigger because the inner node's created hooks are not called
	    // again. It's not ideal to involve module-specific logic in here but
	    // there doesn't seem to be a better way to do it.
	    var innerNode = vnode;
	    while (innerNode.child) {
	      innerNode = innerNode.child._vnode;
	      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
	        for (i = 0; i < cbs.activate.length; ++i) {
	          cbs.activate[i](emptyNode, innerNode);
	        }
	        insertedVnodeQueue.push(innerNode);
	        break
	      }
	    }
	    // unlike a newly created component,
	    // a reactivated keep-alive component doesn't insert itself
	    insert(parentElm, vnode.elm, refElm);
	  }

	  function insert (parent, elm, ref) {
	    if (parent) {
	      if (ref) {
	        nodeOps.insertBefore(parent, elm, ref);
	      } else {
	        nodeOps.appendChild(parent, elm);
	      }
	    }
	  }

	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
	    }
	  }

	  function isPatchable (vnode) {
	    while (vnode.child) {
	      vnode = vnode.child._vnode;
	    }
	    return isDef(vnode.tag)
	  }

	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (i.create) { i.create(emptyNode, vnode); }
	      if (i.insert) { insertedVnodeQueue.push(vnode); }
	    }
	  }

	  function initComponent (vnode, insertedVnodeQueue) {
	    if (vnode.data.pendingInsert) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	    }
	    vnode.elm = vnode.child.$el;
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue);
	      setScope(vnode);
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode);
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode);
	    }
	  }

	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i;
	    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	    if (isDef(i = activeInstance) &&
	        i !== vnode.context &&
	        isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	  }

	  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
	    }
	  }

	  function invokeDestroyHook (vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }

	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else { // Text node
	          removeNode(ch.elm);
	        }
	      }
	    }
	  }

	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (rm || isDef(vnode.data)) {
	      var listeners = cbs.remove.length + 1;
	      if (!rm) {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      } else {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm);
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm);
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm);
	      } else {
	        rm();
	      }
	    } else {
	      removeNode(vnode.elm);
	    }
	  }

	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0;
	    var newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, elmToMove, refElm;

	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly;

	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
	        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
	        if (isUndef(idxInOld)) { // New element
	          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	          newStartVnode = newCh[++newStartIdx];
	        } else {
	          elmToMove = oldCh[idxInOld];
	          /* istanbul ignore if */
	          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
	            warn(
	              'It seems there are duplicate keys that is causing an update error. ' +
	              'Make sure each v-for item has a unique key.'
	            );
	          }
	          if (sameVnode(elmToMove, newStartVnode)) {
	            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          } else {
	            // same key but different element. treat as new element
	            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          }
	        }
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	    }
	  }

	  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return
	    }
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (vnode.isStatic &&
	        oldVnode.isStatic &&
	        vnode.key === oldVnode.key &&
	        (vnode.isCloned || vnode.isOnce)) {
	      vnode.elm = oldVnode.elm;
	      vnode.child = oldVnode.child;
	      return
	    }
	    var i;
	    var data = vnode.data;
	    var hasData = isDef(data);
	    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }
	    var elm = vnode.elm = oldVnode.elm;
	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (hasData && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
	      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '');
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text);
	    }
	    if (hasData) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
	    }
	  }

	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (initial && vnode.parent) {
	      vnode.parent.data.pendingInsert = queue;
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i]);
	      }
	    }
	  }

	  var bailed = false;
	  // list of modules that can skip create hook during hydration because they
	  // are already rendered on the client or has no need for initialization
	  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

	  // Note: this is a browser-only function so we can assume elms are DOM nodes.
	  function hydrate (elm, vnode, insertedVnodeQueue) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!assertNodeMatch(elm, vnode)) {
	        return false
	      }
	    }
	    vnode.elm = elm;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
	      if (isDef(i = vnode.child)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        // empty element, allow client to pick up and populate children
	        if (!elm.hasChildNodes()) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          var childrenMatch = true;
	          var childNode = elm.firstChild;
	          for (var i$1 = 0; i$1 < children.length; i$1++) {
	            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
	              childrenMatch = false;
	              break
	            }
	            childNode = childNode.nextSibling;
	          }
	          // if childNode is not null, it means the actual childNodes list is
	          // longer than the virtual children list.
	          if (!childrenMatch || childNode) {
	            if (process.env.NODE_ENV !== 'production' &&
	                typeof console !== 'undefined' &&
	                !bailed) {
	              bailed = true;
	              console.warn('Parent: ', elm);
	              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
	            }
	            return false
	          }
	        }
	      }
	      if (isDef(data)) {
	        for (var key in data) {
	          if (!isRenderedModule(key)) {
	            invokeCreateHooks(vnode, insertedVnodeQueue);
	            break
	          }
	        }
	      }
	    }
	    return true
	  }

	  function assertNodeMatch (node, vnode) {
	    if (vnode.tag) {
	      return (
	        vnode.tag.indexOf('vue-component') === 0 ||
	        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
	      )
	    } else {
	      return _toString(vnode.text) === node.data
	    }
	  }

	  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
	    if (!vnode) {
	      if (oldVnode) { invokeDestroyHook(oldVnode); }
	      return
	    }

	    var elm, parent;
	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];

	    if (!oldVnode) {
	      // empty mount (likely as component), create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        // patch existing root node
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
	            oldVnode.removeAttribute('server-rendered');
	            hydrating = true;
	          }
	          if (hydrating) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode
	            } else if (process.env.NODE_ENV !== 'production') {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              );
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }
	        // replacing existing element
	        elm = oldVnode.elm;
	        parent = nodeOps.parentNode(elm);
	        createElm(vnode, insertedVnodeQueue, parent, nodeOps.nextSibling(elm));

	        if (vnode.parent) {
	          // component root element replaced.
	          // update parent placeholder node element, recursively
	          var ancestor = vnode.parent;
	          while (ancestor) {
	            ancestor.elm = vnode.elm;
	            ancestor = ancestor.parent;
	          }
	          if (isPatchable(vnode)) {
	            for (var i = 0; i < cbs.create.length; ++i) {
	              cbs.create[i](emptyNode, vnode.parent);
	            }
	          }
	        }

	        if (parent !== null) {
	          removeVnodes(parent, [oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }

	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	    return vnode.elm
	  }
	}

	/*  */

	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives (vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	};

	function updateDirectives (oldVnode, vnode) {
	  if (oldVnode.data.directives || vnode.data.directives) {
	    _update(oldVnode, vnode);
	  }
	}

	function _update (oldVnode, vnode) {
	  var isCreate = oldVnode === emptyNode;
	  var isDestroy = vnode === emptyNode;
	  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

	  var dirsWithInsert = [];
	  var dirsWithPostpatch = [];

	  var key, oldDir, dir;
	  for (key in newDirs) {
	    oldDir = oldDirs[key];
	    dir = newDirs[key];
	    if (!oldDir) {
	      // new directive, bind
	      callHook$1(dir, 'bind', vnode, oldVnode);
	      if (dir.def && dir.def.inserted) {
	        dirsWithInsert.push(dir);
	      }
	    } else {
	      // existing directive, update
	      dir.oldValue = oldDir.value;
	      callHook$1(dir, 'update', vnode, oldVnode);
	      if (dir.def && dir.def.componentUpdated) {
	        dirsWithPostpatch.push(dir);
	      }
	    }
	  }

	  if (dirsWithInsert.length) {
	    var callInsert = function () {
	      for (var i = 0; i < dirsWithInsert.length; i++) {
	        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
	      }
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
	    } else {
	      callInsert();
	    }
	  }

	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
	      for (var i = 0; i < dirsWithPostpatch.length; i++) {
	        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
	      }
	    }, 'dir-postpatch');
	  }

	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
	      }
	    }
	  }
	}

	var emptyModifiers = Object.create(null);

	function normalizeDirectives$1 (
	  dirs,
	  vm
	) {
	  var res = Object.create(null);
	  if (!dirs) {
	    return res
	  }
	  var i, dir;
	  for (i = 0; i < dirs.length; i++) {
	    dir = dirs[i];
	    if (!dir.modifiers) {
	      dir.modifiers = emptyModifiers;
	    }
	    res[getRawDirName(dir)] = dir;
	    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	  }
	  return res
	}

	function getRawDirName (dir) {
	  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
	}

	function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
	  }
	}

	var baseModules = [
	  ref,
	  directives
	];

	/*  */

	function updateAttrs (oldVnode, vnode) {
	  if (!oldVnode.data.attrs && !vnode.data.attrs) {
	    return
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (attrs.__ob__) {
	    attrs = vnode.data.attrs = extend({}, attrs);
	  }

	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  // #4391: in IE9, setting type can reset value for input[type=radio]
	  /* istanbul ignore if */
	  if (isIE9 && attrs.value !== oldAttrs.value) {
	    setAttr(elm, 'value', attrs.value);
	  }
	  for (key in oldAttrs) {
	    if (attrs[key] == null) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}

	function setAttr (el, key, value) {
	  if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, key);
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, value);
	    }
	  }
	}

	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	};

	/*  */

	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (!data.staticClass && !data.class &&
	      (!oldData || (!oldData.staticClass && !oldData.class))) {
	    return
	  }

	  var cls = genClassForVnode(vnode);

	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (transitionClass) {
	    cls = concat(cls, stringifyClass(transitionClass));
	  }

	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}

	var klass = {
	  create: updateClass,
	  update: updateClass
	};

	/*  */

	var target$1;

	function add$2 (event, handler, once, capture) {
	  if (once) {
	    var oldHandler = handler;
	    handler = function (ev) {
	      remove$3(event, handler, capture);
	      arguments.length === 1
	        ? oldHandler(ev)
	        : oldHandler.apply(null, arguments);
	    };
	  }
	  target$1.addEventListener(event, handler, capture);
	}

	function remove$3 (event, handler, capture) {
	  target$1.removeEventListener(event, handler, capture);
	}

	function updateDOMListeners (oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  target$1 = vnode.elm;
	  updateListeners(on, oldOn, add$2, remove$3, vnode.context);
	}

	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};

	/*  */

	function updateDOMProps (oldVnode, vnode) {
	  if (!oldVnode.data.domProps && !vnode.data.domProps) {
	    return
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (props.__ob__) {
	    props = vnode.data.domProps = extend({}, props);
	  }

	  for (key in oldProps) {
	    if (props[key] == null) {
	      elm[key] = '';
	    }
	  }
	  for (key in props) {
	    cur = props[key];
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if (key === 'textContent' || key === 'innerHTML') {
	      if (vnode.children) { vnode.children.length = 0; }
	      if (cur === oldProps[key]) { continue }
	    }
	    // #4521: if a click event triggers update before the change event is
	    // dispatched on a checkbox/radio input, the input's checked state will
	    // be reset and fail to trigger another update.
	    /* istanbul ignore next */
	    if (key === 'checked' && !isDirty(elm, cur)) {
	      continue
	    }
	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur;
	      // avoid resetting cursor position when value is the same
	      var strCur = cur == null ? '' : String(cur);
	      if (shouldUpdateValue(elm, vnode, strCur)) {
	        elm.value = strCur;
	      }
	    } else {
	      elm[key] = cur;
	    }
	  }
	}

	// check platforms/web/util/attrs.js acceptValue


	function shouldUpdateValue (
	  elm,
	  vnode,
	  checkVal
	) {
	  if (!elm.composing && (
	    vnode.tag === 'option' ||
	    isDirty(elm, checkVal) ||
	    isInputChanged(vnode, checkVal)
	  )) {
	    return true
	  }
	  return false
	}

	function isDirty (elm, checkVal) {
	  return document.activeElement !== elm && elm.value !== checkVal
	}

	function isInputChanged (vnode, newVal) {
	  var value = vnode.elm.value;
	  var modifiers = vnode.elm._vModifiers; // injected by v-model runtime
	  if ((modifiers && modifiers.number) || vnode.elm.type === 'number') {
	    return toNumber(value) !== toNumber(newVal)
	  }
	  if (modifiers && modifiers.trim) {
	    return value.trim() !== newVal.trim()
	  }
	  return value !== newVal
	}

	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	};

	/*  */

	var parseStyleText = cached(function (cssText) {
	  var res = {};
	  var listDelimiter = /;(?![^(]*\))/g;
	  var propertyDelimiter = /:(.+)/;
	  cssText.split(listDelimiter).forEach(function (item) {
	    if (item) {
	      var tmp = item.split(propertyDelimiter);
	      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
	    }
	  });
	  return res
	});

	// merge static and dynamic style data on the same vnode
	function normalizeStyleData (data) {
	  var style = normalizeStyleBinding(data.style);
	  // static style is pre-processed into an object during compilation
	  // and is always a fresh object, so it's safe to merge into it
	  return data.staticStyle
	    ? extend(data.staticStyle, style)
	    : style
	}

	// normalize possible array / string values into Object
	function normalizeStyleBinding (bindingStyle) {
	  if (Array.isArray(bindingStyle)) {
	    return toObject(bindingStyle)
	  }
	  if (typeof bindingStyle === 'string') {
	    return parseStyleText(bindingStyle)
	  }
	  return bindingStyle
	}

	/**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */
	function getStyle (vnode, checkChild) {
	  var res = {};
	  var styleData;

	  if (checkChild) {
	    var childNode = vnode;
	    while (childNode.child) {
	      childNode = childNode.child._vnode;
	      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
	        extend(res, styleData);
	      }
	    }
	  }

	  if ((styleData = normalizeStyleData(vnode.data))) {
	    extend(res, styleData);
	  }

	  var parentNode = vnode;
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
	      extend(res, styleData);
	    }
	  }
	  return res
	}

	/*  */

	var cssVarRE = /^--/;
	var importantRE = /\s*!important$/;
	var setProp = function (el, name, val) {
	  /* istanbul ignore if */
	  if (cssVarRE.test(name)) {
	    el.style.setProperty(name, val);
	  } else if (importantRE.test(val)) {
	    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
	  } else {
	    el.style[normalize(name)] = val;
	  }
	};

	var prefixes = ['Webkit', 'Moz', 'ms'];

	var testEl;
	var normalize = cached(function (prop) {
	  testEl = testEl || document.createElement('div');
	  prop = camelize(prop);
	  if (prop !== 'filter' && (prop in testEl.style)) {
	    return prop
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixed
	    }
	  }
	});

	function updateStyle (oldVnode, vnode) {
	  var data = vnode.data;
	  var oldData = oldVnode.data;

	  if (!data.staticStyle && !data.style &&
	      !oldData.staticStyle && !oldData.style) {
	    return
	  }

	  var cur, name;
	  var el = vnode.elm;
	  var oldStaticStyle = oldVnode.data.staticStyle;
	  var oldStyleBinding = oldVnode.data.style || {};

	  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
	  var oldStyle = oldStaticStyle || oldStyleBinding;

	  var style = normalizeStyleBinding(vnode.data.style) || {};

	  vnode.data.style = style.__ob__ ? extend({}, style) : style;

	  var newStyle = getStyle(vnode, true);

	  for (name in oldStyle) {
	    if (newStyle[name] == null) {
	      setProp(el, name, '');
	    }
	  }
	  for (name in newStyle) {
	    cur = newStyle[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      setProp(el, name, cur == null ? '' : cur);
	    }
	  }
	}

	var style = {
	  create: updateStyle,
	  update: updateStyle
	};

	/*  */

	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
	    } else {
	      el.classList.add(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
	    } else {
	      el.classList.remove(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    el.setAttribute('class', cur.trim());
	  }
	}

	/*  */

	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';

	// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}

	var raf = (inBrowser && window.requestAnimationFrame) || setTimeout;
	function nextFrame (fn) {
	  raf(function () {
	    raf(fn);
	  });
	}

	function addTransitionClass (el, cls) {
	  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
	  addClass(el, cls);
	}

	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove$1(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}

	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function () {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end();
	      }
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(event, onEnd);
	}

	var transformRE = /\b(transform|all)(,|$)/;

	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
	  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
	  var animationDelays = styles[animationProp + 'Delay'].split(', ');
	  var animationDurations = styles[animationProp + 'Duration'].split(', ');
	  var animationTimeout = getTimeout(animationDelays, animationDurations);

	  var type;
	  var timeout = 0;
	  var propCount = 0;
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null;
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0;
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}

	function getTimeout (delays, durations) {
	  /* istanbul ignore next */
	  while (delays.length < durations.length) {
	    delays = delays.concat(delays);
	  }

	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}

	function toMs (s) {
	  return Number(s.slice(0, -1)) * 1000
	}

	/*  */

	function enter (vnode, toggleDisplay) {
	  var el = vnode.elm;

	  // call leave callback now
	  if (el._leaveCb) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return
	  }

	  /* istanbul ignore if */
	  if (el._enterCb || el.nodeType !== 1) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;

	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var context = activeInstance;
	  var transitionNode = activeInstance.$vnode;
	  while (transitionNode && transitionNode.parent) {
	    transitionNode = transitionNode.parent;
	    context = transitionNode.context;
	  }

	  var isAppear = !context._isMounted || !vnode.isRootInsert;

	  if (isAppear && !appear && appear !== '') {
	    return
	  }

	  var startClass = isAppear ? appearClass : enterClass;
	  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
	  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter;
	  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter;
	  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter;
	  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    enterHook &&
	    // enterHook may be a bound method which exposes
	    // the length of original fn as _length
	    (enterHook._length || enterHook.length) > 1;

	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, activeClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass);
	      }
	      enterCancelledHook && enterCancelledHook(el);
	    } else {
	      afterEnterHook && afterEnterHook(el);
	    }
	    el._enterCb = null;
	  });

	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	      var parent = el.parentNode;
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	      if (pendingNode &&
	          pendingNode.context === vnode.context &&
	          pendingNode.tag === vnode.tag &&
	          pendingNode.elm._leaveCb) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    }, 'transition-insert');
	  }

	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el);
	  if (expectsCSS) {
	    addTransitionClass(el, startClass);
	    nextFrame(function () {
	      removeTransitionClass(el, startClass);
	      addTransitionClass(el, activeClass);
	      if (!cb.cancelled && !userWantsControl) {
	        whenTransitionEnds(el, type, cb);
	      }
	    });
	  }

	  if (vnode.data.show) {
	    toggleDisplay && toggleDisplay();
	    enterHook && enterHook(el, cb);
	  }

	  if (!expectsCSS && !userWantsControl) {
	    cb();
	  }
	}

	function leave (vnode, rm) {
	  var el = vnode.elm;

	  // call enter callback now
	  if (el._enterCb) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return rm()
	  }

	  /* istanbul ignore if */
	  if (el._leaveCb || el.nodeType !== 1) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    leave &&
	    // leave hook may be a bound method which exposes
	    // the length of original fn as _length
	    (leave._length || leave.length) > 1;

	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null;
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveActiveClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass);
	      }
	      leaveCancelled && leaveCancelled(el);
	    } else {
	      rm();
	      afterLeave && afterLeave(el);
	    }
	    el._leaveCb = null;
	  });

	  if (delayLeave) {
	    delayLeave(performLeave);
	  } else {
	    performLeave();
	  }

	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      nextFrame(function () {
	        removeTransitionClass(el, leaveClass);
	        addTransitionClass(el, leaveActiveClass);
	        if (!cb.cancelled && !userWantsControl) {
	          whenTransitionEnds(el, type, cb);
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}

	function resolveTransition (def$$1) {
	  if (!def$$1) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def$$1 === 'object') {
	    var res = {};
	    if (def$$1.css !== false) {
	      extend(res, autoCssTransition(def$$1.name || 'v'));
	    }
	    extend(res, def$$1);
	    return res
	  } else if (typeof def$$1 === 'string') {
	    return autoCssTransition(def$$1)
	  }
	}

	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    leaveClass: (name + "-leave"),
	    appearClass: (name + "-enter"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveActiveClass: (name + "-leave-active"),
	    appearActiveClass: (name + "-enter-active")
	  }
	});

	function once (fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn();
	    }
	  }
	}

	function _enter (_, vnode) {
	  if (!vnode.data.show) {
	    enter(vnode);
	  }
	}

	var transition = inBrowser ? {
	  create: _enter,
	  activate: _enter,
	  remove: function remove (vnode, rm) {
	    /* istanbul ignore else */
	    if (!vnode.data.show) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {};

	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	];

	/*  */

	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);

	var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });

	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */

	var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;

	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement;
	    if (el && el.vmodel) {
	      trigger(el, 'input');
	    }
	  });
	}

	var model = {
	  inserted: function inserted (el, binding, vnode) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!modelableTagRE.test(vnode.tag)) {
	        warn(
	          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
	          'If you are working with contenteditable, it\'s recommended to ' +
	          'wrap a library dedicated for that purpose inside a custom component.',
	          vnode.context
	        );
	      }
	    }
	    if (vnode.tag === 'select') {
	      var cb = function () {
	        setSelected(el, binding, vnode.context);
	      };
	      cb();
	      /* istanbul ignore if */
	      if (isIE || isEdge) {
	        setTimeout(cb, 0);
	      }
	    } else if (vnode.tag === 'textarea' || el.type === 'text') {
	      el._vModifiers = binding.modifiers;
	      if (!binding.modifiers.lazy) {
	        if (!isAndroid) {
	          el.addEventListener('compositionstart', onCompositionStart);
	          el.addEventListener('compositionend', onCompositionEnd);
	        }
	        /* istanbul ignore if */
	        if (isIE9) {
	          el.vmodel = true;
	        }
	      }
	    }
	  },
	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matching
	      // option in the DOM.
	      var needReset = el.multiple
	        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
	        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
	      if (needReset) {
	        trigger(el, 'change');
	      }
	    }
	  }
	};

	function setSelected (el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    );
	    return
	  }
	  var selected, option;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i];
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1;
	      if (option.selected !== selected) {
	        option.selected = selected;
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i;
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}

	function hasNoMatchingOption (value, options) {
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (looseEqual(getValue(options[i]), value)) {
	      return false
	    }
	  }
	  return true
	}

	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}

	function onCompositionStart (e) {
	  e.target.composing = true;
	}

	function onCompositionEnd (e) {
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}

	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}

	/*  */

	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.child && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.child._vnode)
	    : vnode
	}

	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;

	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    var originalDisplay = el.__vOriginalDisplay =
	      el.style.display === 'none' ? '' : el.style.display;
	    if (value && transition && !isIE9) {
	      vnode.data.show = true;
	      enter(vnode, function () {
	        el.style.display = originalDisplay;
	      });
	    } else {
	      el.style.display = value ? originalDisplay : 'none';
	    }
	  },

	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;

	    /* istanbul ignore if */
	    if (value === oldValue) { return }
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (transition && !isIE9) {
	      vnode.data.show = true;
	      if (value) {
	        enter(vnode, function () {
	          el.style.display = el.__vOriginalDisplay;
	        });
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
	    }
	  },

	  unbind: function unbind (
	    el,
	    binding,
	    vnode,
	    oldVnode,
	    isDestroy
	  ) {
	    if (!isDestroy) {
	      el.style.display = el.__vOriginalDisplay;
	    }
	  }
	};

	var platformDirectives = {
	  model: model,
	  show: show
	};

	/*  */

	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)

	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String
	};

	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}

	function extractTransitionData (comp) {
	  var data = {};
	  var options = comp.$options;
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key];
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners;
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1].fn;
	  }
	  return data
	}

	function placeholder (h, rawChild) {
	  return /\d-keep-alive$/.test(rawChild.tag)
	    ? h('keep-alive')
	    : null
	}

	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}

	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,
	  render: function render (h) {
	    var this$1 = this;

	    var children = this.$slots.default;
	    if (!children) {
	      return
	    }

	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag; });
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }

	    // warn multiple elements
	    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      );
	    }

	    var mode = this.mode;

	    // warn invalid mode
	    if (process.env.NODE_ENV !== 'production' &&
	        mode && mode !== 'in-out' && mode !== 'out-in') {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      );
	    }

	    var rawChild = children[0];

	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }

	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }

	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }

	    var key = child.key = child.key == null || child.isStatic
	      ? ("__v" + (child.tag + this._uid) + "__")
	      : child.key;
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);

	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
	      child.data.show = true;
	    }

	    if (oldChild && oldChild.data && oldChild.key !== key) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild.data.transition = extend({}, data);

	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true;
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false;
	          this$1.$forceUpdate();
	        }, key);
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        var delayedLeave;
	        var performLeave = function () { delayedLeave(); };
	        mergeVNodeHook(data, 'afterEnter', performLeave, key);
	        mergeVNodeHook(data, 'enterCancelled', performLeave, key);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
	          delayedLeave = leave;
	        }, key);
	      }
	    }

	    return rawChild
	  }
	};

	/*  */

	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.

	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.

	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps);

	delete props.mode;

	var TransitionGroup = {
	  props: props,

	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span';
	    var map = Object.create(null);
	    var prevChildren = this.prevChildren = this.children;
	    var rawChildren = this.$slots.default || [];
	    var children = this.children = [];
	    var transitionData = extractTransitionData(this);

	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i];
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c);
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData;
	        } else if (process.env.NODE_ENV !== 'production') {
	          var opts = c.componentOptions;
	          var name = opts
	            ? (opts.Ctor.options.name || opts.tag)
	            : c.tag;
	          warn(("<transition-group> children must be keyed: <" + name + ">"));
	        }
	      }
	    }

	    if (prevChildren) {
	      var kept = [];
	      var removed = [];
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1];
	        c$1.data.transition = transitionData;
	        c$1.data.pos = c$1.elm.getBoundingClientRect();
	        if (map[c$1.key]) {
	          kept.push(c$1);
	        } else {
	          removed.push(c$1);
	        }
	      }
	      this.kept = h(tag, null, kept);
	      this.removed = removed;
	    }

	    return h(tag, null, children)
	  },

	  beforeUpdate: function beforeUpdate () {
	    // force removing pass
	    this.__patch__(
	      this._vnode,
	      this.kept,
	      false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	    );
	    this._vnode = this.kept;
	  },

	  updated: function updated () {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }

	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs);
	    children.forEach(recordPosition);
	    children.forEach(applyTranslation);

	    // force reflow to put everything in position
	    var f = document.body.offsetHeight; // eslint-disable-line

	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm;
	        var s = el.style;
	        addTransitionClass(el, moveClass);
	        s.transform = s.WebkitTransform = s.transitionDuration = '';
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        });
	      }
	    });
	  },

	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      if (this._hasMove != null) {
	        return this._hasMove
	      }
	      addTransitionClass(el, moveClass);
	      var info = getTransitionInfo(el);
	      removeTransitionClass(el, moveClass);
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	};

	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}

	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}

	function applyTranslation (c) {
	  var oldPos = c.data.pos;
	  var newPos = c.data.newPos;
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    c.data.moved = true;
	    var s = c.elm.style;
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = '0s';
	  }
	}

	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	};

	/*  */

	// install platform specific utils
	Vue$2.config.isUnknownElement = isUnknownElement;
	Vue$2.config.isReservedTag = isReservedTag;
	Vue$2.config.getTagNamespace = getTagNamespace;
	Vue$2.config.mustUseProp = mustUseProp;

	// install platform runtime directives & components
	extend(Vue$2.options.directives, platformDirectives);
	extend(Vue$2.options.components, platformComponents);

	// install platform patch function
	Vue$2.prototype.__patch__ = inBrowser ? patch$1 : noop;

	// wrap mount
	Vue$2.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && inBrowser ? query(el) : undefined;
	  return this._mount(el, hydrating)
	};

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue$2);
	    } else if (
	      process.env.NODE_ENV !== 'production' &&
	      inBrowser && !isEdge && /Chrome\/\d+/.test(window.navigator.userAgent)
	    ) {
	      console.log(
	        'Download the Vue Devtools for a better development experience:\n' +
	        'https://github.com/vuejs/vue-devtools'
	      );
	    }
	  }
	}, 0);

	module.exports = Vue$2;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	  * vue-router v2.1.1
	  * (c) 2016 Evan You
	  * @license MIT
	  */
	'use strict';

	var View = {
	  name: 'router-view',
	  functional: true,
	  props: {
	    name: {
	      type: String,
	      default: 'default'
	    }
	  },
	  render: function render (h, ref) {
	    var props = ref.props;
	    var children = ref.children;
	    var parent = ref.parent;
	    var data = ref.data;

	    data.routerView = true

	    var route = parent.$route
	    var cache = parent._routerViewCache || (parent._routerViewCache = {})
	    var depth = 0
	    var inactive = false

	    while (parent) {
	      if (parent.$vnode && parent.$vnode.data.routerView) {
	        depth++
	      }
	      if (parent._inactive) {
	        inactive = true
	      }
	      parent = parent.$parent
	    }

	    data.routerViewDepth = depth
	    var matched = route.matched[depth]
	    if (!matched) {
	      return h()
	    }

	    var name = props.name
	    var component = inactive
	      ? cache[name]
	      : (cache[name] = matched.components[name])

	    if (!inactive) {
	      var hooks = data.hook || (data.hook = {})
	      hooks.init = function (vnode) {
	        matched.instances[name] = vnode.child
	      }
	      hooks.prepatch = function (oldVnode, vnode) {
	        matched.instances[name] = vnode.child
	      }
	      hooks.destroy = function (vnode) {
	        if (matched.instances[name] === vnode.child) {
	          matched.instances[name] = undefined
	        }
	      }
	    }

	    return h(component, data, children)
	  }
	}

	/*  */

	function assert (condition, message) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}

	function warn (condition, message) {
	  if (!condition) {
	    typeof console !== 'undefined' && console.warn(("[vue-router] " + message))
	  }
	}

	/*  */

	var encode = encodeURIComponent
	var decode = decodeURIComponent

	function resolveQuery (
	  query,
	  extraQuery
	) {
	  if ( extraQuery === void 0 ) extraQuery = {};

	  if (query) {
	    var parsedQuery
	    try {
	      parsedQuery = parseQuery(query)
	    } catch (e) {
	      process.env.NODE_ENV !== 'production' && warn(false, e.message)
	      parsedQuery = {}
	    }
	    for (var key in extraQuery) {
	      parsedQuery[key] = extraQuery[key]
	    }
	    return parsedQuery
	  } else {
	    return extraQuery
	  }
	}

	function parseQuery (query) {
	  var res = {}

	  query = query.trim().replace(/^(\?|#|&)/, '')

	  if (!query) {
	    return res
	  }

	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=')
	    var key = decode(parts.shift())
	    var val = parts.length > 0
	      ? decode(parts.join('='))
	      : null

	    if (res[key] === undefined) {
	      res[key] = val
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val)
	    } else {
	      res[key] = [res[key], val]
	    }
	  })

	  return res
	}

	function stringifyQuery (obj) {
	  var res = obj ? Object.keys(obj).map(function (key) {
	    var val = obj[key]

	    if (val === undefined) {
	      return ''
	    }

	    if (val === null) {
	      return encode(key)
	    }

	    if (Array.isArray(val)) {
	      var result = []
	      val.slice().forEach(function (val2) {
	        if (val2 === undefined) {
	          return
	        }
	        if (val2 === null) {
	          result.push(encode(key))
	        } else {
	          result.push(encode(key) + '=' + encode(val2))
	        }
	      })
	      return result.join('&')
	    }

	    return encode(key) + '=' + encode(val)
	  }).filter(function (x) { return x.length > 0; }).join('&') : null
	  return res ? ("?" + res) : ''
	}

	/*  */

	function createRoute (
	  record,
	  location,
	  redirectedFrom
	) {
	  var route = {
	    name: location.name || (record && record.name),
	    meta: (record && record.meta) || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: location.query || {},
	    params: location.params || {},
	    fullPath: getFullPath(location),
	    matched: record ? formatMatch(record) : []
	  }
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom)
	  }
	  return Object.freeze(route)
	}

	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	})

	function formatMatch (record) {
	  var res = []
	  while (record) {
	    res.unshift(record)
	    record = record.parent
	  }
	  return res
	}

	function getFullPath (ref) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';

	  return (path || '/') + stringifyQuery(query) + hash
	}

	var trailingSlashRE = /\/$/
	function isSameRoute (a, b) {
	  if (b === START) {
	    return a === b
	  } else if (!b) {
	    return false
	  } else if (a.path && b.path) {
	    return (
	      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query)
	    )
	  } else if (a.name && b.name) {
	    return (
	      a.name === b.name &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query) &&
	      isObjectEqual(a.params, b.params)
	    )
	  } else {
	    return false
	  }
	}

	function isObjectEqual (a, b) {
	  if ( a === void 0 ) a = {};
	  if ( b === void 0 ) b = {};

	  var aKeys = Object.keys(a)
	  var bKeys = Object.keys(b)
	  if (aKeys.length !== bKeys.length) {
	    return false
	  }
	  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
	}

	function isIncludedRoute (current, target) {
	  return (
	    current.path.indexOf(target.path.replace(/\/$/, '')) === 0 &&
	    (!target.hash || current.hash === target.hash) &&
	    queryIncludes(current.query, target.query)
	  )
	}

	function queryIncludes (current, target) {
	  for (var key in target) {
	    if (!(key in current)) {
	      return false
	    }
	  }
	  return true
	}

	/*  */

	// work around weird flow bug
	var toTypes = [String, Object]

	var Link = {
	  name: 'router-link',
	  props: {
	    to: {
	      type: toTypes,
	      required: true
	    },
	    tag: {
	      type: String,
	      default: 'a'
	    },
	    exact: Boolean,
	    append: Boolean,
	    replace: Boolean,
	    activeClass: String,
	    event: {
	      type: [String, Array],
	      default: 'click'
	    }
	  },
	  render: function render (h) {
	    var this$1 = this;

	    var router = this.$router
	    var current = this.$route
	    var ref = router.resolve(this.to, current, this.append);
	    var normalizedTo = ref.normalizedTo;
	    var resolved = ref.resolved;
	    var href = ref.href;
	    var classes = {}
	    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active'
	    var compareTarget = normalizedTo.path ? createRoute(null, normalizedTo) : resolved
	    classes[activeClass] = this.exact
	      ? isSameRoute(current, compareTarget)
	      : isIncludedRoute(current, compareTarget)

	    var handler = function (e) {
	      if (guardEvent(e)) {
	        if (this$1.replace) {
	          router.replace(normalizedTo)
	        } else {
	          router.push(normalizedTo)
	        }
	      }
	    }

	    var on = { click: guardEvent }
	    if (Array.isArray(this.event)) {
	      this.event.forEach(function (e) { on[e] = handler })
	    } else {
	      on[this.event] = handler
	    }

	    var data = {
	      class: classes
	    }

	    if (this.tag === 'a') {
	      data.on = on
	      data.attrs = { href: href }
	    } else {
	      // find the first <a> child and apply listener and href
	      var a = findAnchor(this.$slots.default)
	      if (a) {
	        // in case the <a> is a static node
	        a.isStatic = false
	        var extend = _Vue.util.extend
	        var aData = a.data = extend({}, a.data)
	        aData.on = on
	        var aAttrs = a.data.attrs = extend({}, a.data.attrs)
	        aAttrs.href = href
	      } else {
	        // doesn't have <a> child, apply listener to self
	        data.on = on
	      }
	    }

	    return h(this.tag, data, this.$slots.default)
	  }
	}

	function guardEvent (e) {
	  // don't redirect with control keys
	  /* istanbul ignore if */
	  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
	  // don't redirect when preventDefault called
	  /* istanbul ignore if */
	  if (e.defaultPrevented) { return }
	  // don't redirect on right click
	  /* istanbul ignore if */
	  if (e.button !== 0) { return }
	  // don't redirect if `target="_blank"`
	  /* istanbul ignore if */
	  var target = e.target.getAttribute('target')
	  if (/\b_blank\b/i.test(target)) { return }

	  e.preventDefault()
	  return true
	}

	function findAnchor (children) {
	  if (children) {
	    var child
	    for (var i = 0; i < children.length; i++) {
	      child = children[i]
	      if (child.tag === 'a') {
	        return child
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child
	      }
	    }
	  }
	}

	var _Vue

	function install (Vue) {
	  if (install.installed) { return }
	  install.installed = true

	  _Vue = Vue

	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get () { return this.$root._router }
	  })

	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get$1 () { return this.$root._route }
	  })

	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      if (this.$options.router) {
	        this._router = this.$options.router
	        this._router.init(this)
	        Vue.util.defineReactive(this, '_route', this._router.history.current)
	      }
	    }
	  })

	  Vue.component('router-view', View)
	  Vue.component('router-link', Link)

	  var strats = Vue.config.optionMergeStrategies
	  // use the same hook merging strategy for route hooks
	  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created
	}

	/*  */

	function resolvePath (
	  relative,
	  base,
	  append
	) {
	  if (relative.charAt(0) === '/') {
	    return relative
	  }

	  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
	    return base + relative
	  }

	  var stack = base.split('/')

	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop()
	  }

	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/')
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i]
	    if (segment === '.') {
	      continue
	    } else if (segment === '..') {
	      stack.pop()
	    } else {
	      stack.push(segment)
	    }
	  }

	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('')
	  }

	  return stack.join('/')
	}

	function parsePath (path) {
	  var hash = ''
	  var query = ''

	  var hashIndex = path.indexOf('#')
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex)
	    path = path.slice(0, hashIndex)
	  }

	  var queryIndex = path.indexOf('?')
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1)
	    path = path.slice(0, queryIndex)
	  }

	  return {
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function cleanPath (path) {
	  return path.replace(/\/\//g, '/')
	}

	/*  */

	function createRouteMap (routes) {
	  var pathMap = Object.create(null)
	  var nameMap = Object.create(null)

	  routes.forEach(function (route) {
	    addRouteRecord(pathMap, nameMap, route)
	  })

	  return {
	    pathMap: pathMap,
	    nameMap: nameMap
	  }
	}

	function addRouteRecord (
	  pathMap,
	  nameMap,
	  route,
	  parent,
	  matchAs
	) {
	  var path = route.path;
	  var name = route.name;
	  if (process.env.NODE_ENV !== 'production') {
	    assert(path != null, "\"path\" is required in a route configuration.")
	    assert(
	      typeof route.component !== 'string',
	      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
	      "string id. Use an actual component instead."
	    )
	  }

	  var record = {
	    path: normalizePath(path, parent),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {}
	  }

	  if (route.children) {
	    // Warn if route is named and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    if (process.env.NODE_ENV !== 'production') {
	      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
	        warn(false, ("Named Route '" + (route.name) + "' has a default child route.\n          When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), the default child route will not be rendered.\n          Remove the name from this route and use the name of the default child route for named links instead.")
	        )
	      }
	    }
	    route.children.forEach(function (child) {
	      addRouteRecord(pathMap, nameMap, child, record)
	    })
	  }

	  if (route.alias !== undefined) {
	    if (Array.isArray(route.alias)) {
	      route.alias.forEach(function (alias) {
	        addRouteRecord(pathMap, nameMap, { path: alias }, parent, record.path)
	      })
	    } else {
	      addRouteRecord(pathMap, nameMap, { path: route.alias }, parent, record.path)
	    }
	  }

	  if (!pathMap[record.path]) {
	    pathMap[record.path] = record
	  }
	  if (name) {
	    if (!nameMap[name]) {
	      nameMap[name] = record
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, ("Duplicate named routes definition: { name: \"" + name + "\", path: \"" + (record.path) + "\" }"))
	    }
	  }
	}

	function normalizePath (path, parent) {
	  path = path.replace(/\/$/, '')
	  if (path[0] === '/') { return path }
	  if (parent == null) { return path }
	  return cleanPath(((parent.path) + "/" + path))
	}

	var __moduleExports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	var isarray = __moduleExports

	/**
	 * Expose `pathToRegexp`.
	 */
	var index = pathToRegexp
	var parse_1 = parse
	var compile_1 = compile
	var tokensToFunction_1 = tokensToFunction
	var tokensToRegExp_1 = tokensToRegExp

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var defaultDelimiter = options && options.delimiter || '/'
	  var res

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }

	    var next = str[index]
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var modifier = res[6]
	    var asterisk = res[7]

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }

	    var partial = prefix != null && next != null && next !== prefix
	    var repeat = modifier === '+' || modifier === '*'
	    var optional = modifier === '?' || modifier === '*'
	    var delimiter = res[2] || defaultDelimiter
	    var pattern = capture || group

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    })
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
	    }
	  }

	  return function (obj, opts) {
	    var path = ''
	    var data = obj || {}
	    var options = opts || {}
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]

	      if (typeof token === 'string') {
	        path += token

	        continue
	      }

	      var value = data[token.name]
	      var segment

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j])

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      })
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }

	  options = options || {}

	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]

	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = '(?:' + token.pattern + ')'

	      keys.push(token)

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = prefix + '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }

	      route += capture
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/')
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
	  }

	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }

	  options = options || {}

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}

	index.parse = parse_1;
	index.compile = compile_1;
	index.tokensToFunction = tokensToFunction_1;
	index.tokensToRegExp = tokensToRegExp_1;

	/*  */

	var regexpCache = Object.create(null)

	function getRouteRegex (path) {
	  var hit = regexpCache[path]
	  var keys, regexp

	  if (hit) {
	    keys = hit.keys
	    regexp = hit.regexp
	  } else {
	    keys = []
	    regexp = index(path, keys)
	    regexpCache[path] = { keys: keys, regexp: regexp }
	  }

	  return { keys: keys, regexp: regexp }
	}

	var regexpCompileCache = Object.create(null)

	function fillParams (
	  path,
	  params,
	  routeMsg
	) {
	  try {
	    var filler =
	      regexpCompileCache[path] ||
	      (regexpCompileCache[path] = index.compile(path))
	    return filler(params || {}, { pretty: true })
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(false, ("missing param for " + routeMsg + ": " + (e.message)))
	    }
	    return ''
	  }
	}

	/*  */

	function normalizeLocation (
	  raw,
	  current,
	  append
	) {
	  var next = typeof raw === 'string' ? { path: raw } : raw
	  // named target
	  if (next.name || next._normalized) {
	    return next
	  }

	  // relative params
	  if (!next.path && next.params && current) {
	    next = assign({}, next)
	    next._normalized = true
	    var params = assign(assign({}, current.params), next.params)
	    if (current.name) {
	      next.name = current.name
	      next.params = params
	    } else if (current.matched) {
	      var rawPath = current.matched[current.matched.length - 1].path
	      next.path = fillParams(rawPath, params, ("path " + (current.path)))
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, "relative params navigation requires a current route.")
	    }
	    return next
	  }

	  var parsedPath = parsePath(next.path || '')
	  var basePath = (current && current.path) || '/'
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append || next.append)
	    : (current && current.path) || '/'
	  var query = resolveQuery(parsedPath.query, next.query)
	  var hash = next.hash || parsedPath.hash
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash
	  }

	  return {
	    _normalized: true,
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function assign (a, b) {
	  for (var key in b) {
	    a[key] = b[key]
	  }
	  return a
	}

	/*  */

	function createMatcher (routes) {
	  var ref = createRouteMap(routes);
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;

	  function match (
	    raw,
	    currentRoute,
	    redirectedFrom
	  ) {
	    var location = normalizeLocation(raw, currentRoute)
	    var name = location.name;

	    if (name) {
	      var record = nameMap[name]
	      var paramNames = getRouteRegex(record.path).keys
	        .filter(function (key) { return !key.optional; })
	        .map(function (key) { return key.name; })

	      if (typeof location.params !== 'object') {
	        location.params = {}
	      }

	      if (currentRoute && typeof currentRoute.params === 'object') {
	        for (var key in currentRoute.params) {
	          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	            location.params[key] = currentRoute.params[key]
	          }
	        }
	      }

	      if (record) {
	        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""))
	        return _createRoute(record, location, redirectedFrom)
	      }
	    } else if (location.path) {
	      location.params = {}
	      for (var path in pathMap) {
	        if (matchRoute(path, location.params, location.path)) {
	          return _createRoute(pathMap[path], location, redirectedFrom)
	        }
	      }
	    }
	    // no match
	    return _createRoute(null, location)
	  }

	  function redirect (
	    record,
	    location
	  ) {
	    var originalRedirect = record.redirect
	    var redirect = typeof originalRedirect === 'function'
	        ? originalRedirect(createRoute(record, location))
	        : originalRedirect

	    if (typeof redirect === 'string') {
	      redirect = { path: redirect }
	    }

	    if (!redirect || typeof redirect !== 'object') {
	      process.env.NODE_ENV !== 'production' && warn(
	        false, ("invalid redirect option: " + (JSON.stringify(redirect)))
	      )
	      return _createRoute(null, location)
	    }

	    var re = redirect
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query
	    hash = re.hasOwnProperty('hash') ? re.hash : hash
	    params = re.hasOwnProperty('params') ? re.params : params

	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name]
	      if (process.env.NODE_ENV !== 'production') {
	        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."))
	      }
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location)
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record)
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""))
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location)
	    } else {
	      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))))
	      return _createRoute(null, location)
	    }
	  }

	  function alias (
	    record,
	    location,
	    matchAs
	  ) {
	    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""))
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    })
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched
	      var aliasedRecord = matched[matched.length - 1]
	      location.params = aliasedMatch.params
	      return _createRoute(aliasedRecord, location)
	    }
	    return _createRoute(null, location)
	  }

	  function _createRoute (
	    record,
	    location,
	    redirectedFrom
	  ) {
	    if (record && record.redirect) {
	      return redirect(record, redirectedFrom || location)
	    }
	    if (record && record.matchAs) {
	      return alias(record, location, record.matchAs)
	    }
	    return createRoute(record, location, redirectedFrom)
	  }

	  return match
	}

	function matchRoute (
	  path,
	  params,
	  pathname
	) {
	  var ref = getRouteRegex(path);
	  var regexp = ref.regexp;
	  var keys = ref.keys;
	  var m = pathname.match(regexp)

	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }

	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = keys[i - 1]
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i]
	    if (key) { params[key.name] = val }
	  }

	  return true
	}

	function resolveRecordPath (path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true)
	}

	/*  */

	var inBrowser = typeof window !== 'undefined'

	var supportsHistory = inBrowser && (function () {
	  var ua = window.navigator.userAgent

	  if (
	    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	    ua.indexOf('Mobile Safari') !== -1 &&
	    ua.indexOf('Chrome') === -1 &&
	    ua.indexOf('Windows Phone') === -1
	  ) {
	    return false
	  }

	  return window.history && 'pushState' in window.history
	})()

	/*  */

	function runQueue (queue, fn, cb) {
	  var step = function (index) {
	    if (index >= queue.length) {
	      cb()
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1)
	        })
	      } else {
	        step(index + 1)
	      }
	    }
	  }
	  step(0)
	}

	/*  */


	var History = function History (router, base) {
	  this.router = router
	  this.base = normalizeBase(base)
	  // start with a route object that stands for "nowhere"
	  this.current = START
	  this.pending = null
	};

	History.prototype.listen = function listen (cb) {
	  this.cb = cb
	};

	History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
	    var this$1 = this;

	  var route = this.router.match(location, this.current)
	  this.confirmTransition(route, function () {
	    this$1.updateRoute(route)
	    onComplete && onComplete(route)
	    this$1.ensureURL()
	  }, onAbort)
	};

	History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
	    var this$1 = this;

	  var current = this.current
	  var abort = function () { onAbort && onAbort() }
	  if (isSameRoute(route, current)) {
	    this.ensureURL()
	    return abort()
	  }

	  var ref = resolveQueue(this.current.matched, route.matched);
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;

	  var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // enter guards
	    activated.map(function (m) { return m.beforeEnter; }),
	    // async components
	    resolveAsyncComponents(activated)
	  )

	  this.pending = route
	  var iterator = function (hook, next) {
	    if (this$1.pending !== route) {
	      return abort()
	    }
	    hook(route, current, function (to) {
	      if (to === false) {
	        // next(false) -> abort navigation, ensure current URL
	        this$1.ensureURL(true)
	        abort()
	      } else if (typeof to === 'string' || typeof to === 'object') {
	        // next('/') or next({ path: '/' }) -> redirect
	        (typeof to === 'object' && to.replace) ? this$1.replace(to) : this$1.push(to)
	        abort()
	      } else {
	        // confirm transition and pass on the value
	        next(to)
	      }
	    })
	  }

	  runQueue(queue, iterator, function () {
	    var postEnterCbs = []
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, function () {
	      return this$1.current === route
	    })
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    runQueue(enterGuards, iterator, function () {
	      if (this$1.pending !== route) {
	        return abort()
	      }
	      this$1.pending = null
	      onComplete(route)
	      if (this$1.router.app) {
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) { return cb(); })
	        })
	      }
	    })
	  })
	};

	History.prototype.updateRoute = function updateRoute (route) {
	  var prev = this.current
	  this.current = route
	  this.cb && this.cb(route)
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route, prev)
	  })
	};

	function normalizeBase (base) {
	  if (!base) {
	    if (inBrowser) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base')
	      base = baseEl ? baseEl.getAttribute('href') : '/'
	    } else {
	      base = '/'
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '')
	}

	function resolveQueue (
	  current,
	  next
	) {
	  var i
	  var max = Math.max(current.length, next.length)
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break
	    }
	  }
	  return {
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  }
	}

	function extractGuard (
	  def,
	  key
	) {
	  if (typeof def !== 'function') {
	    // extend now so that global mixins are applied.
	    def = _Vue.extend(def)
	  }
	  return def.options[key]
	}

	function extractLeaveGuards (matched) {
	  return flatten(flatMapComponents(matched, function (def, instance) {
	    var guard = extractGuard(def, 'beforeRouteLeave')
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return wrapLeaveGuard(guard, instance); })
	        : wrapLeaveGuard(guard, instance)
	    }
	  }).reverse())
	}

	function wrapLeaveGuard (
	  guard,
	  instance
	) {
	  return function routeLeaveGuard () {
	    return guard.apply(instance, arguments)
	  }
	}

	function extractEnterGuards (
	  matched,
	  cbs,
	  isValid
	) {
	  return flatten(flatMapComponents(matched, function (def, _, match, key) {
	    var guard = extractGuard(def, 'beforeRouteEnter')
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return wrapEnterGuard(guard, cbs, match, key, isValid); })
	        : wrapEnterGuard(guard, cbs, match, key, isValid)
	    }
	  }))
	}

	function wrapEnterGuard (
	  guard,
	  cbs,
	  match,
	  key,
	  isValid
	) {
	  return function routeEnterGuard (to, from, next) {
	    return guard(to, from, function (cb) {
	      next(cb)
	      if (typeof cb === 'function') {
	        cbs.push(function () {
	          // #750
	          // if a router-view is wrapped with an out-in transition,
	          // the instance may not have been registered at this time.
	          // we will need to poll for registration until current route
	          // is no longer valid.
	          poll(cb, match.instances, key, isValid)
	        })
	      }
	    })
	  }
	}

	function poll (
	  cb, // somehow flow cannot infer this is a function
	  instances,
	  key,
	  isValid
	) {
	  if (instances[key]) {
	    cb(instances[key])
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid)
	    }, 16)
	  }
	}

	function resolveAsyncComponents (matched) {
	  return flatMapComponents(matched, function (def, _, match, key) {
	    // if it's a function and doesn't have Vue options attached,
	    // assume it's an async component resolve function.
	    // we are not using Vue's default async resolving mechanism because
	    // we want to halt the navigation until the incoming component has been
	    // resolved.
	    if (typeof def === 'function' && !def.options) {
	      return function (to, from, next) {
	        var resolve = function (resolvedDef) {
	          match.components[key] = resolvedDef
	          next()
	        }

	        var reject = function (reason) {
	          warn(false, ("Failed to resolve async component " + key + ": " + reason))
	          next(false)
	        }

	        var res = def(resolve, reject)
	        if (res && typeof res.then === 'function') {
	          res.then(resolve, reject)
	        }
	      }
	    }
	  })
	}

	function flatMapComponents (
	  matched,
	  fn
	) {
	  return flatten(matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) { return fn(
	      m.components[key],
	      m.instances[key],
	      m, key
	    ); })
	  }))
	}

	function flatten (arr) {
	  return Array.prototype.concat.apply([], arr)
	}

	/*  */

	var positionStore = Object.create(null)

	function saveScrollPosition (key) {
	  if (!key) { return }
	  positionStore[key] = {
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  }
	}

	function getScrollPosition (key) {
	  if (!key) { return }
	  return positionStore[key]
	}

	function getElementPosition (el) {
	  var docRect = document.documentElement.getBoundingClientRect()
	  var elRect = el.getBoundingClientRect()
	  return {
	    x: elRect.left - docRect.left,
	    y: elRect.top - docRect.top
	  }
	}

	function isValidPosition (obj) {
	  return isNumber(obj.x) || isNumber(obj.y)
	}

	function normalizePosition (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	    y: isNumber(obj.y) ? obj.y : window.pageYOffset
	  }
	}

	function isNumber (v) {
	  return typeof v === 'number'
	}

	/*  */


	var genKey = function () { return String(Date.now()); }
	var _key = genKey()

	var HTML5History = (function (History) {
	  function HTML5History (router, base) {
	    var this$1 = this;

	    History.call(this, router, base)

	    var expectScroll = router.options.scrollBehavior
	    window.addEventListener('popstate', function (e) {
	      _key = e.state && e.state.key
	      var current = this$1.current
	      this$1.transitionTo(getLocation(this$1.base), function (next) {
	        if (expectScroll) {
	          this$1.handleScroll(next, current, true)
	        }
	      })
	    })

	    if (expectScroll) {
	      window.addEventListener('scroll', function () {
	        saveScrollPosition(_key)
	      })
	    }
	  }

	  if ( History ) HTML5History.__proto__ = History;
	  HTML5History.prototype = Object.create( History && History.prototype );
	  HTML5History.prototype.constructor = HTML5History;

	  HTML5History.prototype.go = function go (n) {
	    window.history.go(n)
	  };

	  HTML5History.prototype.push = function push (location) {
	    var this$1 = this;

	    var current = this.current
	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath))
	      this$1.handleScroll(route, current, false)
	    })
	  };

	  HTML5History.prototype.replace = function replace (location) {
	    var this$1 = this;

	    var current = this.current
	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath))
	      this$1.handleScroll(route, current, false)
	    })
	  };

	  HTML5History.prototype.ensureURL = function ensureURL (push) {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      var current = cleanPath(this.base + this.current.fullPath)
	      push ? pushState(current) : replaceState(current)
	    }
	  };

	  HTML5History.prototype.handleScroll = function handleScroll (to, from, isPop) {
	    var router = this.router
	    if (!router.app) {
	      return
	    }

	    var behavior = router.options.scrollBehavior
	    if (!behavior) {
	      return
	    }
	    if (process.env.NODE_ENV !== 'production') {
	      assert(typeof behavior === 'function', "scrollBehavior must be a function")
	    }

	    // wait until re-render finishes before scrolling
	    router.app.$nextTick(function () {
	      var position = getScrollPosition(_key)
	      var shouldScroll = behavior(to, from, isPop ? position : null)
	      if (!shouldScroll) {
	        return
	      }
	      var isObject = typeof shouldScroll === 'object'
	      if (isObject && typeof shouldScroll.selector === 'string') {
	        var el = document.querySelector(shouldScroll.selector)
	        if (el) {
	          position = getElementPosition(el)
	        } else if (isValidPosition(shouldScroll)) {
	          position = normalizePosition(shouldScroll)
	        }
	      } else if (isObject && isValidPosition(shouldScroll)) {
	        position = normalizePosition(shouldScroll)
	      }

	      if (position) {
	        window.scrollTo(position.x, position.y)
	      }
	    })
	  };

	  return HTML5History;
	}(History));

	function getLocation (base) {
	  var path = window.location.pathname
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length)
	  }
	  return (path || '/') + window.location.search + window.location.hash
	}

	function pushState (url, replace) {
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history
	  try {
	    if (replace) {
	      history.replaceState({ key: _key }, '', url)
	    } else {
	      _key = genKey()
	      history.pushState({ key: _key }, '', url)
	    }
	    saveScrollPosition(_key)
	  } catch (e) {
	    window.location[replace ? 'assign' : 'replace'](url)
	  }
	}

	function replaceState (url) {
	  pushState(url, true)
	}

	/*  */


	var HashHistory = (function (History) {
	  function HashHistory (router, base, fallback) {
	    History.call(this, router, base)
	    // check history fallback deeplinking
	    if (fallback && this.checkFallback()) {
	      return
	    }
	    ensureSlash()
	  }

	  if ( History ) HashHistory.__proto__ = History;
	  HashHistory.prototype = Object.create( History && History.prototype );
	  HashHistory.prototype.constructor = HashHistory;

	  HashHistory.prototype.checkFallback = function checkFallback () {
	    var location = getLocation(this.base)
	    if (!/^\/#/.test(location)) {
	      window.location.replace(
	        cleanPath(this.base + '/#' + location)
	      )
	      return true
	    }
	  };

	  HashHistory.prototype.onHashChange = function onHashChange () {
	    if (!ensureSlash()) {
	      return
	    }
	    this.transitionTo(getHash(), function (route) {
	      replaceHash(route.fullPath)
	    })
	  };

	  HashHistory.prototype.push = function push (location) {
	    this.transitionTo(location, function (route) {
	      pushHash(route.fullPath)
	    })
	  };

	  HashHistory.prototype.replace = function replace (location) {
	    this.transitionTo(location, function (route) {
	      replaceHash(route.fullPath)
	    })
	  };

	  HashHistory.prototype.go = function go (n) {
	    window.history.go(n)
	  };

	  HashHistory.prototype.ensureURL = function ensureURL (push) {
	    var current = this.current.fullPath
	    if (getHash() !== current) {
	      push ? pushHash(current) : replaceHash(current)
	    }
	  };

	  return HashHistory;
	}(History));

	function ensureSlash () {
	  var path = getHash()
	  if (path.charAt(0) === '/') {
	    return true
	  }
	  replaceHash('/' + path)
	  return false
	}

	function getHash () {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href
	  var index = href.indexOf('#')
	  return index === -1 ? '' : href.slice(index + 1)
	}

	function pushHash (path) {
	  window.location.hash = path
	}

	function replaceHash (path) {
	  var i = window.location.href.indexOf('#')
	  window.location.replace(
	    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
	  )
	}

	/*  */


	var AbstractHistory = (function (History) {
	  function AbstractHistory (router) {
	    History.call(this, router)
	    this.stack = []
	    this.index = -1
	  }

	  if ( History ) AbstractHistory.__proto__ = History;
	  AbstractHistory.prototype = Object.create( History && History.prototype );
	  AbstractHistory.prototype.constructor = AbstractHistory;

	  AbstractHistory.prototype.push = function push (location) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route)
	      this$1.index++
	    })
	  };

	  AbstractHistory.prototype.replace = function replace (location) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route)
	    })
	  };

	  AbstractHistory.prototype.go = function go (n) {
	    var this$1 = this;

	    var targetIndex = this.index + n
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return
	    }
	    var route = this.stack[targetIndex]
	    this.confirmTransition(route, function () {
	      this$1.index = targetIndex
	      this$1.updateRoute(route)
	    })
	  };

	  AbstractHistory.prototype.ensureURL = function ensureURL () {
	    // noop
	  };

	  return AbstractHistory;
	}(History));

	/*  */

	var VueRouter = function VueRouter (options) {
	  if ( options === void 0 ) options = {};

	  this.app = null
	  this.options = options
	  this.beforeHooks = []
	  this.afterHooks = []
	  this.match = createMatcher(options.routes || [])

	  var mode = options.mode || 'hash'
	  this.fallback = mode === 'history' && !supportsHistory
	  if (this.fallback) {
	    mode = 'hash'
	  }
	  if (!inBrowser) {
	    mode = 'abstract'
	  }
	  this.mode = mode

	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base)
	      break
	    case 'hash':
	      this.history = new HashHistory(this, options.base, this.fallback)
	      break
	    case 'abstract':
	      this.history = new AbstractHistory(this)
	      break
	    default:
	      process.env.NODE_ENV !== 'production' && assert(false, ("invalid mode: " + mode))
	  }
	};

	var prototypeAccessors = { currentRoute: {} };

	prototypeAccessors.currentRoute.get = function () {
	  return this.history && this.history.current
	};

	VueRouter.prototype.init = function init (app /* Vue component instance */) {
	    var this$1 = this;

	  process.env.NODE_ENV !== 'production' && assert(
	    install.installed,
	    "not installed. Make sure to call `Vue.use(VueRouter)` " +
	    "before creating root instance."
	  )

	  this.app = app

	  var history = this.history

	  if (history instanceof HTML5History) {
	    history.transitionTo(getLocation(history.base))
	  } else if (history instanceof HashHistory) {
	    var setupHashListener = function () {
	      window.addEventListener('hashchange', function () {
	        history.onHashChange()
	      })
	    }
	    history.transitionTo(getHash(), setupHashListener, setupHashListener)
	  }

	  history.listen(function (route) {
	    this$1.app._route = route
	  })
	};

	VueRouter.prototype.beforeEach = function beforeEach (fn) {
	  this.beforeHooks.push(fn)
	};

	VueRouter.prototype.afterEach = function afterEach (fn) {
	  this.afterHooks.push(fn)
	};

	VueRouter.prototype.push = function push (location) {
	  this.history.push(location)
	};

	VueRouter.prototype.replace = function replace (location) {
	  this.history.replace(location)
	};

	VueRouter.prototype.go = function go (n) {
	  this.history.go(n)
	};

	VueRouter.prototype.back = function back () {
	  this.go(-1)
	};

	VueRouter.prototype.forward = function forward () {
	  this.go(1)
	};

	VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
	  var route = to
	    ? this.resolve(to).resolved
	    : this.currentRoute
	  if (!route) {
	    return []
	  }
	  return [].concat.apply([], route.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key]
	    })
	  }))
	};

	VueRouter.prototype.resolve = function resolve (
	  to,
	  current,
	  append
	) {
	  var normalizedTo = normalizeLocation(to, current || this.history.current, append)
	  var resolved = this.match(normalizedTo, current)
	  var fullPath = resolved.redirectedFrom || resolved.fullPath
	  var base = this.history.base
	  var href = createHref(base, fullPath, this.mode)
	  return {
	    normalizedTo: normalizedTo,
	    resolved: resolved,
	    href: href
	  }
	};

	Object.defineProperties( VueRouter.prototype, prototypeAccessors );

	function createHref (base, fullPath, mode) {
	  var path = mode === 'hash' ? '#' + fullPath : fullPath
	  return base ? cleanPath(base + '/' + path) : path
	}

	VueRouter.install = install

	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter)
	}

	module.exports = VueRouter;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(5)

	/* script */
	__vue_exports__ = __webpack_require__(18)

	/* template */
	var __vue_template__ = __webpack_require__(23)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/aidewoode/my_blog/app/app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-b221fb5e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-b221fb5e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] app.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-b221fb5e!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-b221fb5e!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	exports.i(__webpack_require__(8), "");

	// module
	exports.push([module.id, "\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	exports.i(__webpack_require__(9), "");
	exports.i(__webpack_require__(10), "");
	exports.i(__webpack_require__(12), "");
	exports.i(__webpack_require__(13), "");
	exports.i(__webpack_require__(16), "");

	// module
	exports.push([module.id, "\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ":root {\n  --mainColor: rgb(134, 193, 102);\n  --iconColor: rgb(189, 192, 186);\n  --defaultFontFamily: \"Helvetica Neue\", Helvetica, Arial, \"Hiragino Sans GB\",\"Hiragino Sans GB W3\", \"Microsoft YaHei\", \"Wenquanyi Micro Hei\", sans-serif !default;\n  --defaultRootFontSize: 18px;\n}\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "@font-face {\n  font-family: 'Merriweather';\n  src: url(" + __webpack_require__(11) + ")  format('truetype');\n}\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "data:application/x-font-ttf;base64,AAEAAAAQAQAABAAARkZUTVuF2X0AALSUAAAAHEdERUYCtQPZAAC0sAAAACpHUE9T4PzjhgAAtNwAAACgR1NVQtf54ZAAALV8AAAAdE9TLzKGJ1I0AAABiAAAAGBjbWFwBgXfmgAAB0wAAAOmZ2FzcAAAABAAALSMAAAACGdseWZESUuPAAANsAAAlSBoZWFkIGKYPwAAAQwAAAA2aGhlYRDGCDAAAAFEAAAAJGhtdHixv36LAAAB6AAABWRsb2NhpXvMUgAACvwAAAK0bWF4cAFhAIYAAAFoAAAAIG5hbWXue74WAACi0AAAC8Fwb3N0RgItcwAArpQAAAX3cHJlcGgGjIUAAAr0AAAABwABAAAAAQDElabN2F8PPPUgCQgAAAAAAMpYv0YAAAAAzamOOP+q/YAJmQeAAAAACAACAAAAAAAAAAEAAAeA/YAAAApC/6r/FAmZAAEAAAAAAAAAAAAAAAAAAAFZAAEAAAFZAIUABwAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAwTqAZAABQAAC3kKpgAAAkwLeQqmAAAH0QCTAyADAAIGBQMFBAYDBwSAAACnUAAAAAAAAAAAAAAAU1RDIAAAAAH7BAeA/YAAAAeAAoAAAAABAAAAAARfBhEAAAAgAAMG6gCxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILAAACwgDXBOwBKQWXAJYE9gCuBuoAXQYhALsDNAEpAy0AcwMtAHMFDwCWBPUAsgKtAKAE2QCyAsIA1wMwAB4FLwCDA6UAcwTFAIMEMgBCBOUASwQ3AIAE4wB/BNQAkATZAIEE7AB6AsIA1wLCAMcFLQCABNkAsgUtAOQD9ACCCFUA7AXVAAIFiwBqBYIAVgY5AGoFJwBmBNYAaAYAAFYGqgBqAvsAaQLQ/6oFiwBqBNwAage5AE0GfgBoBhIAVwUQAFYGEgBXBYsAVgTNAJoE9gAeBigAIQWRAAUINQAFBYwADwVIAAwFSABcA1cAyAMwAB4DVwDIBSgAsgWH/+wDdADeBHkAbgTwACAEFQBoBPUAZAR5AGQDRQBbBLMAfwV8AGcCqwBwAor/9wT6AF4CugBsCBYAhAV0AIQEzwBlBSwAegTaAGQDmwBwBBgAqANeAHAFDABvBKQAAgacAAIEkAAEBH4AAgQ2AFgECwBQA2kBZgO+AK0E6QCVAAAAAAILAAACyQDXBF0AfAWhAFkFnADhBX8AIANpAWYFLwCqBCYAogf5ALIDxABQB2kA9QTQALIH+QCyA3UAwwKlABQE9QCyBOgAjwR5AL0DdADeBYcAoQVCAHYCwgDXAmcAhgQ9AMMD5gBbB2kA9QpCAOEKQgDhCkIAvQP0AFUF1QACBdUAAgXVAAIF1QACBdUAAgXVAAIHlAACBYIAVgUnAGYFJwBmBScAZgUnAGYC+//9AvsAaQL7ACUC+wAMBjkAYwZ+AGgGEgBXBhIAVwYSAFcGEgBXBhIAVwTZALIGEgBXBigAIQYoACEGKAAhBigAIQVIAAwFEABWBTYAQwR5AG4EeQBuBHkAbgR5AG4EeQBuBHkAbgcIAG4EFQBoBHkAZAR5AGQEeQBkBHkAZAKrAFwCqwBwAqv/9AKr//EEzwBkBXQAhATPAGUEzwBlBM8AZQTPAGUEzwBlBQEAsgTPAGUFDABvBQwAbwUMAG8FDABvBH4AAgTwACAEfgACBdUAAgR5AG4FJwBmBHkAZAV8AGcC+//zAqv/1AKrAHAFywBpBTUAcALQ/6oCiv/3BYsAagT6AF4E+gBeBXAAagQvAGwE3ABgAroAbAZ+AGgFdACECBUAVwfsAGUFiwBWBYsAVgObAHAFiwBWA5sAcATNAJQD+gCcBUgADAVIAFwFSABcBDYAWAVIAFwENgBYBCcAswKK//cEJwCkBCcApAQnAMUCPwCTAj8AIwLF/8QDdgA4A5MAxAbqAJQHnACOBjgAmAwAAAAIAAAABAAAAAgAAAACqwAAAgAAAAFVAAAFCAAAAtMAAAGaAAAAzAAABWQAsglkALIDBgDIAwYA0QMGANEFFQDIBS0A0QUtANEDmwBcA5sAWwNJANgIRgDXCfcAXQSlAPUEpQD1A3X/9gVu/9kIqgCqBNkAPwWHAB8GOADQBNkAsgbqALQG6gBzBCcAAAUCAJYE2QCyBSwAsgUsALIFhwC8BooAWwXwAFsF/wBbCTUAWwlEAFsEJgCRBCYAoALDARMCwwETBCYAuQLEAM0CPv/b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c2lsLm9yZy9PRkxNZXJyaXdlYXRoZXJSZWd1bGFyU29ya2luVHlwZUNvLjogTWVycml3ZWF0aGVyOiAyMDExVmVyc2lvbiAxLjAwM01lcnJpd2VhdGhlciBpcyBhIHRyYWRlbWFyayBvZiBTb3JraW4gVHlwZSBDby5Tb3JraW4gVHlwZSBDby5FYmVuIFNvcmtpbiAoIGViZW5AZXllYnl0ZXMuY29tIClNZXJyaXdlYXRoZXIgaXMgYSBtZWRpdW0gY29udHJhc3Qgc2VtaSBjb25kZXNlZCB0eXBlZmFjZSBkZXNpZ25lZCB0byBiZSByZWFkYWJsZSBhdCB2ZXJ5IHNtYWxsIHNpemVzLiBNZXJyaXdlYXRoZXIgaXMgdHJhZGl0aW9uYWwgaW4gZmVlbGluZyBkZXNwaXRlIGEgdGhlIG1vZGVybiBzaGFwZXMgaXQgaGFzIGFkb3B0ZWQgZm9yIHNjcmVlbnMuc29ya2ludHlwZS5jb21Db3B5cmlnaHQgKGMpIDIwMTAgYnkgRWJlbiBTb3JraW4gKGViZW5AZXllYnl0ZXMuY29tKSwgd2l0aCBSZXNlcnZlZCBGb250IE5hbWUgTWVycml3ZWF0aGVyLiDmTGljZW5jZWQgdW5kZXIgdGhlIFNJTCBPcGVuIEZvbnQgTGljZW5zZSwgVmVyc2lvbiAxLjEsIGF2YWlsYWJsZSB3aXRoIGEgRkFRIGF0OiBodHRwOi8vc2NyaXB0cy5zaWwub3JnL09GTGh0dHA6Ly9zY3JpcHRzLnNpbC5vcmcvY21zL3NjcmlwdHMvcGFnZS5waHA/c2l0ZV9pZD1ucnNpJmlkPU9GTABDAG8AcAB5AHIAaQBnAGgAdAAgACgAYwApACAAMgAwADEAMQAsACAAUwBvAHIAawBpAG4AIABUAHkAcABlACAAQwBvACAAKAB3AHcAdwAuAHMAbwByAGsAaQBuAHQAeQBwAGUALgBjAG8AbQApAA0AdwBpAHQAaAAgAFIAZQBzAGUAcgB2AGUAZAAgAEYAbwBuAHQAIABOAGEAbQBlACAAIgBNAGUAcgByAGkAdwBlAGEAdABoAGUAcgAiAC4ADQANAFQAaABpAHMAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAaQBzACAAbABpAGMAZQBuAHMAZQBkACAAdQBuAGQAZQByACAAdABoAGUAIABTAEkATAAgAE8AcABlAG4AIABGAG8AbgB0ACAATABpAGMAZQBuAHMAZQAsAA0AVgBlAHIAcwBpAG8AbgAgADEALgAxAC4AIABUAGgAaQBzACAAbABpAGMAZQBuAHMAZQAgAGkAcwAgAGEAdgBhAGkAbABhAGIAbABlACAAdwBpAHQAaAAgAGEAIABGAEEAUQAgAGEAdAA6AA0AaAB0AHQAcAA6AC8ALwBzAGMAcgBpAHAAdABzAC4AcwBpAGwALgBvAHIAZwAvAE8ARgBMAE0AZQByAHIAaQB3AGUAYQB0AGgAZQByAFIAZQBnAHUAbABhAHIAUwBvAHIAawBpAG4AVAB5AHAAZQBDAG8ALgA6ACAATQBlAHIAcgBpAHcAZQBhAHQAaABlAHIAOgAgADIAMAAxADEAVgBlAHIAcwBpAG8AbgAgADEALgAwADAAMwBNAGUAcgByAGkAdwBlAGEAdABoAGUAcgAgAGkAcwAgAGEAIAB0AHIAYQBkAGUAbQBhAHIAawAgAG8AZgAgAFMAbwByAGsAaQBuACAAVAB5AHAAZQAgAEMAbwAuAFMAbwByAGsAaQBuACAAVAB5AHAAZQAgAEMAbwAuAEUAYgBlAG4AIABTAG8AcgBrAGkAbgAgACgAIABlAGIAZQBuAEAAZQB5AGUAYgB5AHQAZQBzAC4AYwBvAG0AIAApAE0AZQByAHIAaQB3AGUAYQB0AGgAZQByACAAaQBzACAAYQAgAG0AZQBkAGkAdQBtACAAYwBvAG4AdAByAGEAcwB0ACAAcwBlAG0AaQAgAGMAbwBuAGQAZQBzAGUAZAAgAHQAeQBwAGUAZgBhAGMAZQAgAGQAZQBzAGkAZwBuAGUAZAAgAHQAbwAgAGIAZQAgAHIAZQBhAGQAYQBiAGwAZQAgAGEAdAAgAHYAZQByAHkAIABzAG0AYQBsAGwAIABzAGkAegBlAHMALgAgAE0AZQByAHIAaQB3AGUAYQB0AGgAZQByACAAaQBzACAAdAByAGEAZABpAHQAaQBvAG4AYQBsACAAaQBuACAAZgBlAGUAbABpAG4AZwAgAGQAZQBzAHAAaQB0AGUAIABhACAAdABoAGUAIABtAG8AZABlAHIAbgAgAHMAaABhAHAAZQBzACAAaQB0ACAAaABhAHMAIABhAGQAbwBwAHQAZQBkACAAZgBvAHIAIABzAGMAcgBlAGUAbgBzAC4AcwBvAHIAawBpAG4AdAB5AHAAZQAuAGMAbwBtAEMAbwBwAHkAcgBpAGcAaAB0ACAAKABjACkAIAAyADAAMQAwACAAYgB5ACAARQBiAGUAbgAgAFMAbwByAGsAaQBuACAAKABlAGIAZQBuAEAAZQB5AGUAYgB5AHQAZQBzAC4AYwBvAG0AKQAsACAAdwBpAHQAaAAgAFIAZQBzAGUAcgB2AGUAZAAgAEYAbwBuAHQAIABOAGEAbQBlACAATQBlAHIAcgBpAHcAZQBhAHQAaABlAHIALgAgAMoATABpAGMAZQBuAGMAZQBkACAAdQBuAGQAZQByACAAdABoAGUAIABTAEkATAAgAE8AcABlAG4AIABGAG8AbgB0ACAATABpAGMAZQBuAHMAZQAsACAAVgBlAHIAcwBpAG8AbgAgADEALgAxACwAIABhAHYAYQBpAGwAYQBiAGwAZQAgAHcAaQB0AGgAIABhACAARgBBAFEAIABhAHQAOgAgAGgAdAB0AHAAOgAvAC8AcwBjAHIAaQBwAHQAcwAuAHMAaQBsAC4AbwByAGcALwBPAEYATABoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8AYwBtAHMALwBzAGMAcgBpAHAAdABzAC8AcABhAGcAZQAuAHAAaABwAD8AcwBpAHQAZQBfAGkAZAA9AG4AcgBzAGkAJgBpAGQAPQBPAEYATAAAAAACAAAAAAAA/z8AkwAAAAAAAAAAAAAAAAAAAAAAAAAAAVkAAAABAAIBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgACEAIgAjACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABBAEIAQwBEAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAYQEiAKwAowCEAIUAvQCWAOgAhgCOAIsAnQCpAKQAigDaAIMAkwDyAPMAjQCXAIgAwwDeAPEAngCqAPUA9AD2AKIArQDJAMcArgBiAGMAkABkAMsAZQDIAMoAzwDMAM0AzgDpAGYA0wDQANEArwBnAPAAkQDWANQA1QBoAOsA7QCJAGoAaQBrAG0AbABuAKAAbwBxAHAAcgBzAHUAdAB2AHcA6gB4AHoAeQB7AH0AfAC4AKEAfwB+AIAAgQDsAO4AugEjASQBJQEmAScBKAEpANcBKgErASwBLQEuAS8BMAExATIA4gDjATMBNACwALEBNQE2ATcBOAE5AOQA5QC7AToBOwE8AOYA5wCmAT0A2ADhANsA3ADdAOAA2QDfAKgAnwCbAT4BPwFAAUEBQgFDAUQBRQFGAUcBSACyALMAtgC3AMQAtAC1AMUAggDCAIcAqwDGAL4AvwC8AUkAjACYAJoAmQDvAKUAkgCcAKcAjwCUAJUAuQFKAMAAwQFLAUwBTQFOAU8BUAFRAVIBUwFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQHdW5pMDAwMAd1bmkwMDAxB3VuaTAwMDIHdW5pMDAwMwd1bmkwMDA0B3VuaTAwMDUHdW5pMDAwNgd1bmkwMDA3B3VuaTAwMDgHdW5pMDAwOQd1bmkwMDBBB3VuaTAwMEIHdW5pMDAwQwd1bmkwMDBEB3VuaTAwMEUHdW5pMDAwRgd1bmkwMDEwB3VuaTAwMTEHdW5pMDAxMgd1bmkwMDEzB3VuaTAwMTQHdW5pMDAxNQd1bmkwMDE2B3VuaTAwMTcHdW5pMDAxOAd1bmkwMDE5B3VuaTAwMUEHdW5pMDAxQgd1bmkwMDFDB3VuaTAwMUQHdW5pMDAxRQd1bmkwMDFGB3VuaTAwN0YHQW9nb25lawdhb2dvbmVrB0VvZ29uZWsHZW9nb25lawRoYmFyBkl0aWxkZQZpdGlsZGUCSUoCaWoLSmNpcmN1bWZsZXgLamNpcmN1bWZsZXgMS2NvbW1hYWNjZW50DGtjb21tYWFjY2VudAxrZ3JlZW5sYW5kaWMKTGRvdGFjY2VudARsZG90Bk5hY3V0ZQZuYWN1dGUGUmFjdXRlDFJjb21tYWFjY2VudAxyY29tbWFhY2NlbnQGUmNhcm9uBnJjYXJvbgZaYWN1dGUKWmRvdGFjY2VudAp6ZG90YWNjZW50CGRvdGxlc3NqB3VuaTIwMDAHdW5pMjAwMQd1bmkyMDAyB3VuaTIwMDMHdW5pMjAwNAd1bmkyMDA1B3VuaTIwMDYHdW5pMjAwNwd1bmkyMDA4B3VuaTIwMDkHdW5pMjAwQQRFdXJvAmZmA2ZmaQNmZmwJZ3JhdmUuY2FwDGRpZXJlc2lzLmNhcApjb21tYWJlbG93C2NvbW1hYWNjZW50DmNpcmN1bWZsZXguY2FwCWNhcm9uLmNhcAlicmV2ZS5jYXAIcmluZy5jYXAKb2dvbmVrLmNhcAl0aWxkZS5jYXAQaHVuZ2FydW1sYXV0LmNhcAtmb3VuZHJ5aWNvbglhY3V0ZS5jYXACSFQCTEYDRExFA0RDMQNEQzIDREMzA0RDNAJSUwJVUwNERUwNZG90YWNjZW50LmNhcAAAAQAB//8ADwAAAAEAAAAAxtQumQAAAADKWOvwAAAAAMpYvvMAAQAAAAwAAAAiAAAAAgADAAEBOwABATwBQAACAUEBWAABAAQAAAABAAAAAAABAAAACgAeACwAAWxhdG4ACAAEAAAAAP//AAEAAAABa2VybgAIAAAAAQAAAAEABAACAAAAAQAIAAEAEAAEAAAAAwAaAFwAYgABAAMAVwBkAHgAEABq/6AAbP/oAG3/6ABw/7gAcf+4AHL/oABz/7gAdf+4AHb/oAB3/7gAeP+gAHn/oAB6/6AAe/+gAHz/oAB9/6AAAQB5/+YAAQB1//QAAQAAAAoAHgAsAAFsYXRuAAgABAAAAAD//wABAAAAAWRsaWcACAAAAAEAAAABAAQABAAAAAEACAABADYAAQAIAAUADAAUABwAIgAoAUAAAwBpAG8BPwADAGkAbAE8AAIAaQE+AAIAbwE9AAIAbAABAAEAaQ=="

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "html {\n  box-sizing: border-box;\n  font-size: var(--defaultRootFontSize);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  background-color: #fff;\n  font-family: var(--defaultFontFamily);\n}\n\n.global-nav {\n  padding: 2.78rem;\n  display: flex;\n  align-items: center;\n}\n\n.global-nav__title {\n  font-family: 'Merriweather';\n  font-size: 1.33rem;\n  text-decoration: none;\n  color: var(--mainColor);\n}\n\n.global-nav__list {\n  list-style: none;\n  margin: 0 0 0 .83rem;\n  padding: 0;\n}\n\n.global-nav__item {\n  display: inline-block;\n}\n\n.global-nav__link {\n  padding: 0 .56rem;\n}\n\n.content-container {\n  max-width: 750px;\n  margin: auto;\n  margin-top: 3.33rem;\n  padding: 0 .83rem;\n}\n\n.articles-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "@font-face {\n  font-family: 'IconFont';\n  src: url(" + __webpack_require__(14) + ") format('woff'),\n       url(" + __webpack_require__(15) + ")  format('truetype');\n}\n\n.icon {\n  font-family: 'IconFont';\n  display: inline-block;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  color: var(--iconColor);\n}\n\n.icon--github:before { content: '\\E800'; }\n.icon--mail:before { content: '\\E801'; }\n.icon--rss:before { content: '\\E802'; }\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "data:application/font-woff;base64,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"

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "data:application/x-font-ttf;base64,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"

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "@media screen and (max-width: 768px) {\n  html {\n    font-size: 16px;\n  }\n\n  .content-container {\n    padding: 0 2.78rem;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  html {\n    font-size: 14px;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _loader = __webpack_require__(19);

	var _loader2 = _interopRequireDefault(_loader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return { loading: false };
	  },


	  components: {
	    loader: _loader2.default
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(20)

	/* template */
	var __vue_template__ = __webpack_require__(22)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/aidewoode/my_blog/app/components/loader.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-dcdeec48", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-dcdeec48", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] loader.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-dcdeec48!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./loader.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-dcdeec48!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./loader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "\n.loader {\n  position: relative;\n  height: 21.28px;\n  height: 1.33rem;\n  width: 21.28px;\n  width:  1.33rem;\n\n  border-radius: 50%;\n  background: -webkit-linear-gradient(left, #86c166 10%, #fff 50%);\n  background: linear-gradient(to right, #86c166 10%, #fff 50%);\n\n  margin-left: auto;/* let loader float right */\n  -webkit-animation: load .7s infinite linear;\n          animation: load .7s infinite linear;\n}\n.loader:after {\n  position: absolute;\n  content: '';\n\n  width:  80%;\n  height: 80%;\n\n  border-radius: 50%;\n  background: #fff;\n  margin: auto;\n\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n@-webkit-keyframes load {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes load {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n", ""]);

	// exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "loader"
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-dcdeec48", module.exports)
	  }
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "site-content"
	  }, [_c('nav', {
	    staticClass: "global-nav"
	  }, [_c('a', {
	    staticClass: "global-nav__title"
	  }, [_vm._v("Aide's Blog")]), _vm._m(0), (_vm.loading) ? _c('loader') : _vm._e()], 1), _c('div', {
	    staticClass: "content-container"
	  }, [_c('router-view')], 1)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    staticClass: "global-nav__list"
	  }, [_c('li', {
	    staticClass: "global-nav__item"
	  }, [_c('a', {
	    staticClass: "global-nav__link",
	    attrs: {
	      "href": "https://github.com/aidewoode",
	      "target": "_blank"
	    }
	  }, [_c('i', {
	    staticClass: "icon icon--github"
	  })])]), _c('li', {
	    staticClass: "global-nav__item"
	  }, [_c('a', {
	    staticClass: "global-nav__link",
	    attrs: {
	      "href": "mailto:aidewoode@gmail.com"
	    }
	  }, [_c('i', {
	    staticClass: "icon icon--mail"
	  })])]), _c('li', {
	    staticClass: "global-nav__item"
	  }, [_c('a', {
	    staticClass: "global-nav__link",
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('i', {
	    staticClass: "icon icon--rss"
	  })])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-b221fb5e", module.exports)
	  }
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (VueRouter) {
	  return new VueRouter({
	    routes: [{ path: '/', name: 'home', component: _home2.default }]
	  });
	};

	var _home = __webpack_require__(25);

	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(26)

	/* script */
	__vue_exports__ = __webpack_require__(28)

	/* template */
	var __vue_template__ = __webpack_require__(30)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/aidewoode/my_blog/app/components/home.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3eb980e8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3eb980e8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] home.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3eb980e8!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3eb980e8!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "\n.articles-list__item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-bottom: 53.28px;\n  margin-bottom: 3.33rem;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.articles-list__date {\n  width: 30%;\n  color: rgb(101, 103, 101);\n  font-size: 16px;\n  font-size: 1rem;\n}\n.articles-list__title {\n  width: 70%;\n  font-size: 19.52px;\n  font-size: 1.22rem;\n  font-weight: 400;\n  font-family: 'Merriweather', 'Hiragino Sans GB', 'Hiragino Sans GB W3', 'Microsoft YaHei', 'Wenquanyi Micro Hi', sans-serif;\n}\n.articles-list__link {\n  color: rgb(28, 28, 28);\n  text-decoration: none;\n}\n@media screen and (max-width: 480px) {\n.articles-list__date {\n    width: 100%;\n}\n}\n", ""]);

	// exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _articles = __webpack_require__(29);

	var _articles2 = _interopRequireDefault(_articles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      articles: _articles2.default.data
	    };
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {
		"data": [
			{
				"id": 1,
				"title": "I love DinosaurJr.",
				"date": "2014-09-16"
			},
			{
				"id": 2,
				"title": "Hurt",
				"date": "2014-12-17"
			},
			{
				"id": 3,
				"title": "Hello, 2015",
				"date": "2015-01-02"
			},
			{
				"id": 4,
				"title": "广东姑娘，你还好吗?",
				"date": "2015-05-20"
			},
			{
				"id": 5,
				"title": "Little Muff 首页初版设计",
				"date": "2015-06-13"
			},
			{
				"id": 6,
				"title": "由日本传统色所想到的",
				"date": "2015-10-11"
			},
			{
				"id": 7,
				"title": "vue.js 使用感受",
				"date": "2015-10-23"
			},
			{
				"id": 8,
				"title": "我丢失的超能力",
				"date": "2015-12-18"
			},
			{
				"id": 9,
				"title": "Hello, 2016",
				"date": "2015-12-31"
			},
			{
				"id": 10,
				"title": "再见，顶马",
				"date": "2016-2-26"
			}
		]
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "articles-container"
	  }, [_c('ul', {
	    staticClass: "articles-list"
	  }), _vm._l((_vm.articles), function(article) {
	    return _c('li', {
	      staticClass: "articles-list__item"
	    }, [_c('div', {
	      staticClass: "articles-list__date"
	    }, [_vm._v(_vm._s(_vm._f("formattedDate")(article.date)))]), _c('div', {
	      staticClass: "articles-list__title"
	    }, [_c('a', {
	      staticClass: "articles-list__link"
	    }, [_vm._v(_vm._s(article.title))])])])
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3eb980e8", module.exports)
	  }
	}

/***/ }
/******/ ]);