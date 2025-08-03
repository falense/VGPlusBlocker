# VG Plus Blocker

A Firefox addon that blocks subscription articles (VG+) on vg.no.

## Installation

1. Open Firefox
2. Navigate to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on"
4. Select the `manifest.json` file from this directory

## How it works

The addon detects articles marked with VG+ indicators:
- Elements with `skinIcon="pluss"` or `skinIcon="vgtv_pluss"`
- Articles containing plus icons (`pluss.svg`)

Blocked articles are hidden completely from view.

## Files

- `manifest.json` - Firefox addon configuration
- `content.js` - Script that detects and blocks VG+ articles
- `styles.css` - CSS for hiding blocked content

## Alternative Behavior

To blur articles instead of hiding them completely, uncomment the alternative CSS rules in `styles.css`.