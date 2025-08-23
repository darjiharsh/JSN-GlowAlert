<?php
namespace JSN\GlowAlert\Model\Config\Source;

use Magento\Framework\Option\ArrayInterface;

class AlertLocations implements ArrayInterface
{
    const ADD_TO_CART = 'add_to_cart';
    const MINICART = 'minicart';
    
    /**
     * @return array
     */
    public function toOptionArray()
    {
        return [
            ['value' => self::ADD_TO_CART, 'label' => __('Add to Cart Actions')],
            ['value' => self::MINICART, 'label' => __('MiniCart Delete Actions')]
        ];
    }
    
    /**
     * @return array
     */
    public function toArray()
    {
        return [
            self::ADD_TO_CART => __('Add to Cart Actions'),
            self::MINICART => __('MiniCart Delete Actions')
        ];
    }
}