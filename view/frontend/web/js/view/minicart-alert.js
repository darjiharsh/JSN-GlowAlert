define([
    'jquery',
    'sweetalert2',
    'Magento_Customer/js/customer-data',
    'mage/url'
], function ($, Swal, customerData, urlBuilder) {
    'use strict';

    function getItemId($button) {
        return $button.data('cart-item') || extractItemIdFromHref($button.attr('href'));
    }

    function extractItemIdFromHref(href) {
        if (!href) 
            return null;
        
        var match = href.match(/delete\/id\/(\d+)/) ||
                    href.match(/item_id\/(\d+)/) ||
                    href.match(/id\/(\d+)/);
        return match ? match[1] : null;
    }

    function handleDelete(e, deleteButton) {
        e.preventDefault();
        e.stopImmediatePropagation();

        var $button = $(deleteButton);
        var itemId = getItemId($button);
        if (!itemId) 
            return;

        var formKey = $('input[name="form_key"]').val();

        Swal.fire({
            title: 'Are you sure?',
            text: "This item will be removed from your cart.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!',
            cancelButtonText: 'Cancel',
            showLoaderOnConfirm: true,
            preConfirm: function () {
                return new Promise(function (resolve, reject) {
                    var timeout = setTimeout(function() {
                        reject('Request timeout');
                    }, 3000);

                    $.ajax({
                        url: urlBuilder.build('checkout/cart/delete'),
                        type: 'POST',
                        data: {
                            id: itemId,
                            form_key: formKey
                        },
                        success: function (response) {
                            clearTimeout(timeout);
                            resolve(response);
                        },
                        error: function (xhr, status, error) {
                            clearTimeout(timeout);
                            reject(error || 'AJAX error');
                        },
                        complete: function () {
                            customerData.reload(['cart'], true);
                        }
                    });
                });
            },
            allowOutsideClick: function () {
                return !Swal.isLoading();
            }
        }).then(function (result) {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Removed!',
                    text: 'Product has been removed from your cart.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            }
        }).catch(function (error) {
                Swal.fire('Error!', typeof error === 'string' ? error : 'Failed to remove item', 'error');
        });
    }

    document.addEventListener('click', function (e) {
        var deleteButton = e.target.closest('.block-minicart .action.delete, .block-minicart [data-role="remove"]');
        if (deleteButton) {
            handleDelete(e, deleteButton);
        }
    }, true);
});