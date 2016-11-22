(function() {
  'use strict';

  $('.button-collapse').sideNav();
  if (localStorage.length) {
    const customerProfile =
    JSON.parse(localStorage.getItem('customerProfile'));

    $('#form').empty();
    $('#welcome').text(`Welcome back ${customerProfile.name}!`);
  }
})();
