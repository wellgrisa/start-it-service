// enables ES6 support
require('babel/register')({
  // async/await support
  stage: 0
});

// enables ES6 Proxy (requires --harmony)
require('harmony-reflect');
