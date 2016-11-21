(function() {
  'use strict';

  $('.button-collapse').sideNav();

  const items = [];
  const $tbody = $('tbody');
  const $subtotal = $('#subtotal');
  const $tax = $('#tax');
  const $total = $('#total');

  const calcOrder = function() {
    let subtotal = 0;
    const $tablerow = $('<tr>');
    const $dogNameCell = $('<td>');
    const $priceCell = $('<td>');

    for (const item of items) {
      $dogNameCell.text(item.name);
      $priceCell.text(`$${item.price.toFixed(2)}`);
      $priceCell.addClass('right-align');
      $tablerow.append($dogNameCell);
      $tablerow.append($priceCell);
      $tbody.append($tablerow);
      subtotal += item.price;
    }

    const tax = subtotal * 0.0975;
    const total = subtotal + tax;

    $subtotal.text(`$${subtotal.toFixed(2)}`);
    $tax.text(`$${tax.toFixed(2)}`);
    $total.text(`$${total.toFixed(2)}`);
  };

  calcOrder();

  $('.addItem').on('click', (event) => {
    const item = {};
    const $target = $(event.target);
    const $cardContent = $target.parent().siblings('.card-content');

    item.name = $cardContent.children('.card-title').text();
    item.price = parseFloat($cardContent.children('p').text().slice(1));

    items.push(item);

    calcOrder();
    event.preventDefault();
  });

  $('#name, #phone_number, #address').on('blur', (event) => {
    const $target = $(event.target);
    const value = $target.val();

    if (!value.length) {
      $target.removeClass('valid');
      $target.removeClass('invalid');
    }
    else if (value.trim() === '') {
      $target.removeClass('valid');
      $target.addClass('invalid');
    }
    else {
      $target.removeClass('invalid');
      $target.addClass('valid');
    }
  });

  $('#placeOrder').on('click', (event) => {
    if (!items.length) {
      Materialize.toast('Please add a dog to your oder.', 4000);

      return;
    }

    const $name = $('#name');
    const $phoneNumber = $('#phone_number');
    const $address = $('#address');

    if ($name.val().trim() === '') {
      Materialize.toast('Please enter a name.', 4000);

      return;
    }

    if ($phoneNumber.val().trim() === '') {
      Materialize.toast('Please enter a phone number.', 4000);

      return;
    }

    if ($address.val().trim === '') {
      Materialize.toast('Please type an address.', 4000);

      return;
    }

    Materialize.toast('Order placed. Thank you!', 4000);
    $tbody.empty();
    event.preventDefault();
  });
})();
