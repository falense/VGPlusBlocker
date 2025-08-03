# VG Plus Blocker

VG Plus Blocker automatically hides subscription articles marked with VG+ on vg.no, giving you a cleaner browsing experience with only free content visible. The addon detects premium articles by their plus icons and subscription markers, then removes them from view completely.

## Features

- Automatically blocks VG+ subscription articles
- Works with dynamically loaded content
- No configuration required
- Clean, distraction-free browsing
- Lightweight and fast

## Installation

### From Firefox Add-ons (Recommended)
1. Visit [Firefox Add-ons](https://addons.mozilla.org) 
2. Search for "VG Plus Blocker"
3. Click "Add to Firefox"

### Manual Installation (Development)
1. Open Firefox
2. Navigate to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on"
4. Select the `manifest.json` file from this directory

## How it works

The addon detects articles marked with VG+ indicators:
- Elements with `skinIcon="pluss"` or `skinIcon="vgtv_pluss"`
- Articles containing plus icons (`pluss.svg`)

Blocked articles are hidden completely from view, creating a seamless browsing experience focused on free content.

## Files

- `manifest.json` - Firefox addon configuration
- `content.js` - Script that detects and blocks VG+ articles
- `styles.css` - CSS for hiding blocked content
- `icon16.png`, `icon48.png`, `icon128.png` - Addon icons
- `icon.svg` - Source icon file

## Alternative Behavior

To blur articles instead of hiding them completely, uncomment the alternative CSS rules in `styles.css`.

## Contributing

Feel free to submit issues or pull requests to improve the addon.