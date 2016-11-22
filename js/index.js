(function() {
  'use strict';

  $('.button-collapse').sideNav();
  (function() {
    if (localStorage) {
      const customerProfile =
      JSON.parse(localStorage.getItem('customerProfile'));

      $('#welcome').text(`Welcome back ${customerProfile.name}!`);
    }
    else {
      return;
    }
  })();
})();
