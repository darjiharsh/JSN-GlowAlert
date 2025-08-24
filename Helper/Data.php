<?php
namespace JSN\GlowAlert\Helper;

use Magento\Framework\App\Helper\AbstractHelper;
use Magento\Store\Model\ScopeInterface;

class Data extends AbstractHelper
{
    const XML_PATH_ENABLED = 'jsn_glowalert/general/enabled';
        const XML_PATH_ALERT_LOCATIONS = 'jsn_glowalert/general/alert_locations';

    public function isEnabled()
    {
        return $this->scopeConfig->isSetFlag(self::XML_PATH_ENABLED, ScopeInterface::SCOPE_STORE);
    }

    public function getAlertLocations()
    {
        $locations = $this->scopeConfig->getValue(self::XML_PATH_ALERT_LOCATIONS, ScopeInterface::SCOPE_STORE);
        $locationsArray = array_map(function($item) {
            return str_replace('"', '', trim($item, '"'));
        }, explode(',', trim($locations, '[]')));
        return $locationsArray ? $locationsArray : [];
    }
}
?>