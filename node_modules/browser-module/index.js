/*
native_module
https://github.com/joyent/node/blob/master/src/node.js
*/

function NativeModule () {}

NativeModule.wrap = function(script) {
  return NativeModule.wrapper[0] + script + NativeModule.wrapper[1];
};

NativeModule.wrapper = [
  '(function (exports, require, module, __filename, __dirname) { ',
  '\n});'
];

/*
module
https://github.com/joyent/node/blob/master/lib/module.js
*/

var runInThisContext = require('vm').runInThisContext;


// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707

function Module(id, parent) {
  this.id = id;
  this.exports = {};
  this.parent = parent;
  if (parent && parent.children) {
    parent.children.push(this);
  }

  this.filename = null;
  this.loaded = false;
  this.children = [];
}
module.exports = Module;

Module.wrapper = NativeModule.wrapper;
Module.wrap = NativeModule.wrap;

// Run the file contents in the correct scope or sandbox. Expose
// the correct helper variables (require, module, exports) to
// the file.
// Returns exception, if any.
Module.prototype._compile = function(content, filename) {
  var self = this;
  // remove shebang
  content = content.replace(/^\#\!.*/, '');

  // create wrapper function
  var wrapper = Module.wrap(content);

  var compiledWrapper = runInThisContext(wrapper, { filename: filename });

  var args = [self.exports, function () {}, self, filename, filename];
  return compiledWrapper.apply(self.exports, args);
};

// backwards compatibility
Module.Module = Module;
