// Google Analytics Enhanced Measurement
// Track when users try to access problematic URLs

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Track problematic URL visits
if (window.location.pathname.includes('impressum') && window.location.pathname.includes('kontakt')) {
    gtag('event', 'page_view', {
        'page_title': '404 - Problematic URL',
        'page_location': window.location.href,
        'custom_parameter': 'impressum_kontakt_404'
    });
    
    // Redirect to homepage
    window.location.replace('/');
}

// Track brand searches
gtag('event', 'search', {
    'search_term': 'HOT Pflegedienst',
    'custom_parameter': 'brand_search'
});

console.log('HOT Pflegedienst - Brand Tracking Loaded');