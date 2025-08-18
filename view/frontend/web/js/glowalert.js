define(['jquery', 'sweetalert2'], function ($, Swal) {
    $("#alert-button").on('click', function () {
        Swal.fire({
            title: 'Hello!',
            text: 'This is coming from a separate JS file.',
            icon: 'info',
            confirmButtonText: 'Cool'
        });
    });
});
