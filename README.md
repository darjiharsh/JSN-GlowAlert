# JSN_GlowAlert

This custom Magento 2 extension enhances the default user experience by replacing Magento's native _"Add to Cart"_ success message and _"Cart Removal Alert"_ with SweetAlert notifications. The extension ensures a more visually appealing, modern alert system that improves the interaction between the user and the store.

## 🚀 Features
- 🎨 **Modern UI** - Replaces outdated Magento notifications with sleek SweetAlert popups
- ⚙️ **Conditional Control** - Enable/disable entire extension or specific features
- 🛒 **Add to Cart Notifications** - Beautiful success alerts when products are added to cart
- 🗑️ **Minicart Delete Confirmations** - Elegant confirmations when removing items from cart
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Lightweight** - Only loads when enabled, no performance impact

## 📦 Installation

### Method 1: Composer
```
composer require jsn/glowalert
bin/magento setup:upgrade
bin/magento setup:static-content:deploy
bin/magento cache:flush
```

### Method 2: Manual Installation
1. Download the latest release
2. Extract to app/code/JSN/GlowAlert/
3. Run:
```
bin/magento setup:upgrade
bin/magento setup:di:compile
bin/magento setup:static-content:deploy -f
bin/magento cache:flush
```

## ⚙️ Configuration
1. Go to Stores → Configuration → JSN Extensions → JSN GlowAlert
2. Enable Extension: Yes/No
3. Show SweetAlert On: Multiselect options:
> ✅ Add to Cart Actions
> ✅ MiniCart Delete Actions

## 🤝 Contributing
We welcome contributions! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support
- Found a bug? Open an issue on GitHub
- Need help? Start a discussion in the GitHub discussions section
- Like this extension? ⭐ Star the repository to show your support!