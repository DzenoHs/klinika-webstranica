// Google Analytics Enhanced Measurement & URL Redirect Tracking
// Track when users try to access problematic URLs

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Enhanced problematic URL detection
function isProblematicUrl(url) {
    var problematicPatterns = [
        'impressum-%2F-kontakt',
        'impressum-/-kontakt',
        'impressum-%252F-kontakt', 
        'impressum-kontakt',
        'impressum_kontakt',
        'impressum.*kontakt',
        'kontakt.*impressum'
    ];
    
    return problematicPatterns.some(function(pattern) {
        return url.toLowerCase().match(pattern.toLowerCase());
    });
}

// Check current URL
var currentUrl = window.location.href;
var currentPath = window.location.pathname;

if (isProblematicUrl(currentUrl)) {
    console.log('🚨 Problematic URL detected:', currentUrl);
    
    // Track the redirect event
    if (typeof gtag === 'function') {
        gtag('event', 'problematic_url_redirect', {
            'page_title': 'Redirected Problematic URL',
            'page_location': currentUrl,
            'custom_parameter': 'google_cache_redirect'
        });
    }
    
    // Show user message and redirect
    console.log('🔄 Redirecting to homepage...');
    
    // Immediate redirect
    window.location.replace('/');
}

// Track successful homepage loads
if (currentPath === '/') {
    console.log('✅ HOT Pflegedienst - Homepage loaded successfully');
    
    if (typeof gtag === 'function') {
        gtag('event', 'homepage_load', {
            'page_title': 'HOT Pflegedienst',
            'custom_parameter': 'successful_load'
        });
    }
}

console.log('🏥 HOT Pflegedienst - Brand Tracking & URL Protection Loaded');