'use strict';

function isUnique(str) {
    var object = {};
    for (var i = 0; i < str.length; ++i) {
      var char = str[i];
      if (object[char]) return false;
      object[char] = true;
    }
    return true;
}

module.exports = isUnique;