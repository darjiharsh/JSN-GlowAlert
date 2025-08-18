define([
    'jquery',
    'sweetalert2',
    'Magento_Customer/js/customer-data'
], function ($, Swal, customerData) {
    'use strict';

    /**
     * Show SweetAlert popup
     * @param {String} message - The message to show
     * @param {String} icon - 'success' | 'error' 
     */
    function showAlert(message, icon) {
        Swal.fire({
            html: message,
            icon: icon,
            confirmButtonText: 'OK',
        });
        $('.messages').remove();
    }

    /**
     * Listen to Magento's ajax:addToCart event
     */
    $(document).on('ajax:addToCart', function (event, data) {
        const messages = customerData.get('messages');
        messages.subscribe(function (data) {
            if (data && data.messages && data.messages.length > 0) {
                showAlert(
                    data.messages[0].text,
                    data.messages[0].type === 'success' ? 'success' : 'error'
                );
            }
        });
    });
});