var config = {
    paths: {
        'sweetalert2': 'JSN_GlowAlert/js/sweetalert2.all.min',
        'glowAlert': 'JSN_GlowAlert/js/glowalert',
        'cartAlert': 'JSN_GlowAlert/js/cart-alert',
        'minicartAlert': 'JSN_GlowAlert/js/view/minicart-alert'
    },
    shim: {
        'sweetalert2': {
            exports: 'Swal'
        }
    },
    mixin: {
        'Magento_Checkout/js/view/minicart': {
            'minicartAlert': true
        }
    }
};
