(function() {
  'use strict';

  $('.button-collapse').sideNav();
  (function() {
    if (localStorage.length) {
      const customerProfile =
      JSON.parse(localStorage.getItem('customerProfile'));

      $('#form').empty();
      $('#welcome').text(`Welcome back ${customerProfile.name}!`);
    }
    else {
      return;
    }
  })();
})();
