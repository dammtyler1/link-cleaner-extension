// Link Cleaner - Background Service Worker
// Removes tracking parameters from URLs

const TRACKING_PARAMS = [
  // Google Analytics & Ads
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
  'gclid', 'gclsrc', 'dclid', 'gbraid', 'wbraid',
  
  // Facebook
  'fbclid', 'fb_action_ids', 'fb_action_types', 'fb_source', 'fb_ref',
  
  // Amazon
  'tag', 'ref_', 'ref', 'linkCode', 'linkId', 'th', 'psc',
  
  // Microsoft
  'msclkid', 'ms_clkid',
  
  // Other common trackers
  'mc_cid', 'mc_eid', // Mailchimp
  '_hsenc', '_hsmi', // HubSpot
  'mkt_tok', // Marketo
  'vero_id', 'vero_conv',
  'wickedid',
  'yclid', // Yandex
  's_cid', 'elqTrackId', 'elqTrack',
  'assetType', 'assetId', 'recipientId',
  'campaignId', 'batchId',
  'trk_contact', 'trk_msg', 'trk_module', 'trk_sid',
  'gdfms', 'gdftrk', 'gdffi', '_ga',
  'spm', // AliExpress
  'scm', 'scm_id', 'scm-url',
  'aff_platform', 'aff_trace_key', 'terminal_id',
  
  // Social media share trackers
  'share', 'shared', 'igshid', 'igsh'
];

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'cleanUrl') {
    const cleaned = cleanUrl(request.url);
    sendResponse({ cleanedUrl: cleaned });
  }
  return true;
});

function cleanUrl(url) {
  try {
    const urlObj = new URL(url);
    
    // Remove tracking parameters
    TRACKING_PARAMS.forEach(param => {
      urlObj.searchParams.delete(param);
    });
    
    // Return cleaned URL
    let cleaned = urlObj.toString();
    
    // Remove trailing ? if no params left
    if (cleaned.endsWith('?')) {
      cleaned = cleaned.slice(0, -1);
    }
    
    return cleaned;
  } catch (e) {
    // If URL parsing fails, return original
    return url;
  }
}
