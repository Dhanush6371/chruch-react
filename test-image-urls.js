const https = require('https');

// Test if Wix CDN URLs are accessible
const testUrls = {
    'Client Logo 1': 'https://static.wixstatic.com/media/a3c153_18f1357650bc445092f511e9ca9ed710~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3c153_18f1357650bc445092f511e9ca9ed710~mv2.png',
    'Client Logo 2': 'https://static.wixstatic.com/media/a3c153_1c21a3cd7c0947ce88d31a8eef96503a~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3c153_1c21a3cd7c0947ce88d31a8eef96503a~mv2.png',
    'Client Logo 3': 'https://static.wixstatic.com/media/a3c153_55e9a7e84ab5470e851e20135735b170~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3c153_55e9a7e84ab5470e851e20135735b170~mv2.png',
    'Client Logo 4': 'https://static.wixstatic.com/media/a3c153_8f40ef988e774bf68d7d402bbe334e8e~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3c153_8f40ef988e774bf68d7d402bbe334e8e~mv2.png',
    'Client Logo 5': 'https://static.wixstatic.com/media/a3c153_a701bcdd2cf641deba1dbf0dbe6c5487~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3c153_a701bcdd2cf641deba1dbf0dbe6c5487~mv2.png',
    'Logo': 'https://static.wixstatic.com/media/027521_2791704c4d4f458d9f7c898c90eec300~mv2.png/v1/fill/w_233,h_109,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/the_way_2.png'
};

function testUrl(name, url) {
    return new Promise((resolve) => {
        https.get(url, (response) => {
            const status = response.statusCode;
            const contentType = response.headers['content-type'];
            const contentLength = response.headers['content-length'];

            if (status === 200) {
                console.log(`✓ ${name}`);
                console.log(`  Status: ${status}`);
                console.log(`  Type: ${contentType}`);
                console.log(`  Size: ${(contentLength / 1024).toFixed(2)} KB\n`);
                resolve(true);
            } else {
                console.log(`✗ ${name}`);
                console.log(`  Status: ${status}\n`);
                resolve(false);
            }
        }).on('error', (err) => {
            console.log(`✗ ${name}`);
            console.log(`  Error: ${err.message}\n`);
            resolve(false);
        });
    });
}

async function testAll() {
    console.log('Testing Wix CDN Image URLs...\n');
    console.log('='.repeat(60) + '\n');

    let successCount = 0;
    let failCount = 0;

    for (const [name, url] of Object.entries(testUrls)) {
        const success = await testUrl(name, url);
        if (success) successCount++;
        else failCount++;
    }

    console.log('='.repeat(60));
    console.log(`\nResults: ${successCount} successful, ${failCount} failed`);

    if (failCount > 0) {
        console.log('\n⚠️  Some images failed to load from Wix CDN.');
        console.log('   This could mean:');
        console.log('   1. The images were deleted from Wix');
        console.log('   2. The URLs have changed');
        console.log('   3. Network/firewall blocking access');
        console.log('\n   Solution: Download images locally using:');
        console.log('   node download-images.js');
    } else {
        console.log('\n✓ All images are accessible from Wix CDN!');
    }
}

testAll();
