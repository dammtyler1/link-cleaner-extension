# Link Cleaner - Chrome Extension

**Remove tracking parameters from URLs with one click.**

Privacy-focused browser extension that strips UTM tags, Facebook trackers, Amazon affiliate codes, and 40+ other tracking parameters from URLs.

## Features

✨ **One-Click Cleaning** - Clean current tab URL instantly  
📋 **Copy to Clipboard** - Copy cleaned URL with one click  
🔒 **Privacy First** - No data collection, all processing local  
⚡ **Fast & Lightweight** - Minimal resource usage  
🎯 **50+ Trackers Removed** - Comprehensive parameter list

### Supported Trackers

- **Google:** utm_*, gclid, gbraid, wbraid, dclid
- **Facebook:** fbclid, fb_action_*, fb_source
- **Amazon:** tag, ref, linkCode, linkId, th, psc
- **Microsoft:** msclkid
- **Email Marketing:** mc_cid (Mailchimp), _hsenc (HubSpot), mkt_tok (Marketo)
- **Social Media:** igshid, share, shared
- **And 30+ more...**

## Installation (For Testing)

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked"
4. Select this folder (`link-cleaner-extension`)
5. Extension will appear in your toolbar

## Usage

1. Navigate to any page with tracking parameters
2. Click the Link Cleaner icon in toolbar
3. Extension auto-cleans the current URL
4. Click "Copy Cleaned URL" to copy
5. Paste anywhere!

## Monetization Strategy

### Free Version (MVP - v1.0.0)
- Manual URL cleaning
- Current tab only
- All 50+ trackers supported

### Pro Version ($5 one-time)
- **Auto-clean on page load** (automatically clean URLs as you browse)
- **Custom parameter rules** (add your own trackers to remove)
- **Bulk URL cleaning** (clean multiple URLs at once)
- **History cleaning** (clean URLs in browsing history)
- Priority support

## Publishing Checklist

### Before Chrome Web Store Submission

**Required:**
- [ ] Create icons (16x16, 48x48, 128x128 PNG)
  - Simple, clean design
  - Blue/green color scheme (trust, privacy)
  - Suggest: Link chain with "clean" symbol
- [ ] Create promotional images (1280x800 screenshot, 440x280 small tile)
- [ ] Set up Gumroad page for Pro version
- [ ] Create privacy policy page (required by Chrome Web Store)
- [ ] Write detailed description for store listing

**Testing:**
- [ ] Test on 20+ URLs with various trackers
- [ ] Test on URLs without trackers (should handle gracefully)
- [ ] Test copy-to-clipboard functionality
- [ ] Test on different websites (Amazon, YouTube, Facebook links, etc.)
- [ ] Performance test (should be <100ms clean time)

**Legal:**
- [ ] Privacy policy (simple: "We don't collect ANY data")
- [ ] Chrome Web Store developer account ($5 one-time fee)

### Chrome Web Store Listing (Draft)

**Name:** Link Cleaner

**Tagline:** Remove tracking parameters from URLs

**Description:**
```
Clean URLs with one click. Remove UTM tags, Facebook trackers, Amazon affiliate codes, and 40+ other tracking parameters.

🔒 Privacy First
• No data collection
• All processing happens locally
• Open source (link to GitHub)

✨ Features
• One-click URL cleaning
• Copy cleaned URL to clipboard
• 50+ tracking parameters removed
• Fast and lightweight

Perfect for:
• Privacy-conscious users
• Content creators sharing clean links
• Anyone tired of ugly tracking URLs

Free forever. Upgrade to Pro ($5) for auto-clean and advanced features.
```

**Category:** Productivity  
**Language:** English  
**Price:** Free (with paid Pro upgrade via external site)

## Revenue Projections

**Conservative (Month 3):**
- 500 installs
- 2% conversion to Pro = 10 sales
- $5 x 10 = $50/month

**Moderate (Month 6):**
- 2,000 installs
- 3% conversion = 60 sales
- $5 x 60 = $300/month

**Optimistic (Month 12):**
- 10,000 installs
- 4% conversion = 400 sales
- $5 x 400 = $2,000/month

## Next Steps

1. **Create icons** (can use Figma, Canva, or hire on Fiverr for $10-20)
2. **Test thoroughly** (all major websites)
3. **Set up Gumroad** for Pro version sales
4. **Submit to Chrome Web Store** ($5 developer fee)
5. **Launch on ProductHunt** (drive initial installs)
6. **Share on Reddit** (r/chrome, r/privacy, r/degoogle)

## File Structure

```
link-cleaner-extension/
├── manifest.json      # Extension config
├── background.js      # Service worker (URL cleaning logic)
├── popup.html         # Extension popup UI
├── popup.js           # Popup interaction logic
├── icons/             # (TO CREATE) Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md          # This file
```

## Technical Notes

- **Manifest V3** (latest Chrome extension standard)
- **No external dependencies** (vanilla JS for speed)
- **Permissions:** Only `activeTab` and `clipboardWrite` (minimal, privacy-focused)
- **Size:** <10KB (excluding icons)

## Marketing Ideas

1. **ProductHunt Launch** - "Privacy-focused link cleaner"
2. **Reddit Posts** - r/chrome, r/privacy, r/webdev
3. **Hacker News Show HN** - "I built a link cleaner extension"
4. **Twitter** - Privacy community, tech Twitter
5. **Email Signature** - "Links cleaned with Link Cleaner (link)"

---

**Status:** MVP complete, ready for icon creation + testing  
**Time to Market:** 2-3 days (pending icons + Chrome Web Store approval)  
**Estimated First Revenue:** Week 2 (if ProductHunt launch goes well)
