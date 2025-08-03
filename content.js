// VG Plus Blocker Content Script
(function() {
    'use strict';

    function blockVGPlusArticles() {
        // Find all elements with skinIcon="pluss" or skinIcon="vgtv_pluss"
        const plusArticles = document.querySelectorAll('[skinIcon="pluss"], [skinIcon="vgtv_pluss"]');
        
        plusArticles.forEach(article => {
            // Add blocked class for styling
            article.classList.add('vg-plus-blocked');
            
            // Hide the article completely
            article.style.display = 'none';
        });

        // Alternative approach: look for articles containing plus icons
        const plusIcons = document.querySelectorAll('img[src*="pluss.svg"]');
        plusIcons.forEach(icon => {
            // Find the parent article container
            let articleContainer = icon.closest('article') || 
                                 icon.closest('[class*="article"]') || 
                                 icon.closest('a') ||
                                 icon.closest('div');
            
            if (articleContainer) {
                articleContainer.classList.add('vg-plus-blocked');
                articleContainer.style.display = 'none';
            }
        });

        console.log(`VG Plus Blocker: Blocked ${plusArticles.length + plusIcons.length} subscription articles`);
    }

    // Run immediately
    blockVGPlusArticles();

    // Watch for dynamically loaded content
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                // Re-run blocking for new content
                setTimeout(blockVGPlusArticles, 100);
            }
        });
    });

    // Start observing
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    console.log('VG Plus Blocker: Content script loaded');
})();