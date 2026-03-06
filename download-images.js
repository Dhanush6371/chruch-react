const fs = require('fs');
const https = require('https');
const path = require('path');

// Image mapping with meaningful names
const imageMap = {
    // Logo
    'logo.png': 'https://static.wixstatic.com/media/027521_2791704c4d4f458d9f7c898c90eec300~mv2.png/v1/fill/w_233,h_109,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/the_way_2.png',

    // Home Page Heroes
    'home-hero-1.jpg': 'https://static.wixstatic.com/media/027521_967e6a7efdc24b54a18fdc06b2f128c5~mv2.jpg/v1/fill/w_2560,h_1200,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/027521_967e6a7efdc24b54a18fdc06b2f128c5~mv2.jpg',
    'home-hero-2.jpg': 'https://static.wixstatic.com/media/027521_0517e5f0dcb648f7980b78d1c8c7a305~mv2.jpg/v1/fill/w_2560,h_900,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/027521_0517e5f0dcb648f7980b78d1c8c7a305~mv2.jpg',
    'home-hero-3.jpg': 'https://static.wixstatic.com/media/027521_1061b82223714df2af47c307a5dd1b34~mv2.jpg/v1/fill/w_2560,h_900,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/027521_1061b82223714df2af47c307a5dd1b34~mv2.jpg',
    'home-hero-4.jpg': 'https://static.wixstatic.com/media/027521_e8d432a8104c40c1bef91c4ad329bdd4~mv2.jpeg/v1/fill/w_2560,h_900,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/027521_e8d432a8104c40c1bef91c4ad329bdd4~mv2.jpeg',
    'home-hero-5.jpg': 'https://static.wixstatic.com/media/027521_08ce936255cd49839e4521cd680d9645~mv2.jpg/v1/fill/w_2560,h_900,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/027521_08ce936255cd49839e4521cd680d9645~mv2.jpg',

    // Shared Images
    'city-traffic.jpg': 'https://static.wixstatic.com/media/11062b_65415aede6d3457abdb845866b364998~mv2.jpg/v1/fill/w_2560,h_1200,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_65415aede6d3457abdb845866b364998~mv2.jpg',
    'big-ben.jpg': 'https://static.wixstatic.com/media/11062b_b8e75213b44c485f81fd5740a917890a~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_1920,h_1600,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_b8e75213b44c485f81fd5740a917890a~mv2_d_5184_3456_s_4_2.jpg',
    'dark-forest.jpg': 'https://static.wixstatic.com/media/11062b_1adc0a2203a9476aa80e004b484d4481~mv2_d_4096_2731_s_4_2.jpg/v1/fill/w_2560,h_900,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_1adc0a2203a9476aa80e004b484d4481~mv2_d_4096_2731_s_4_2.jpg',
    'london-building.jpg': 'https://static.wixstatic.com/media/11062b_9ca28b232a954bb4b58a9115f1748584~mv2.jpg/v1/fill/w_1920,h_1600,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_9ca28b232a954bb4b58a9115f1748584~mv2.jpg',
    'mountain-road.jpg': 'https://static.wixstatic.com/media/11062b_f76cd0314c5b4f94a003101124337230~mv2.jpg/v1/fill/w_2560,h_900,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f76cd0314c5b4f94a003101124337230~mv2.jpg',
    'sunset-road.jpg': 'https://static.wixstatic.com/media/11062b_94dff012450847b99e7c70515f421bd6~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_2560,h_900,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_94dff012450847b99e7c70515f421bd6~mv2_d_5184_3456_s_4_2.jpg',

    // Belief Page
    'belief-hero.jpg': 'https://static.wixstatic.com/media/11062b_989d9029e1a64ddd9eeb7a5e7ba62c70~mv2.jpg/v1/fill/w_2560,h_1200,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_989d9029e1a64ddd9eeb7a5e7ba62c70~mv2.jpg',
    'belief-video-poster.jpg': 'https://static.wixstatic.com/media/11062b_901619a8201045b2973ebd0fef1ea8c1f000.jpg/v1/fill/w_2560,h_900,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_901619a8201045b2973ebd0fef1ea8c1f000.jpg',
    'forest-aerial.jpg': 'https://static.wixstatic.com/media/11062b_315676c29a024fec8776f18a6a10d395~mv2_d_2560_1705_s_2.jpg/v1/fill/w_2560,h_900,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_315676c29a024fec8776f18a6a10d395~mv2_d_2560_1705_s_2.jpg',
    'forest-road-aerial.jpg': 'https://static.wixstatic.com/media/11062b_814c3e36659644d8903dc8a413c92577~mv2.jpg/v1/fill/w_2560,h_900,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_814c3e36659644d8903dc8a413c92577~mv2.jpg',

    // Team Page
    'team-hero.jpg': 'https://static.wixstatic.com/media/a3c153_20122b9a32cc4e9a9faca835b9f82d14~mv2.jpg/v1/fill/w_2560,h_900,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3c153_20122b9a32cc4e9a9faca835b9f82d14~mv2.jpg',
    'team-member-1.jpg': 'https://static.wixstatic.com/media/a3c153_ea643fa0bec04606b8e22e51e7d510b4~mv2.jpg/v1/fill/w_443,h_431,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3c153_ea643fa0bec04606b8e22e51e7d510b4~mv2.jpg',
    'team-member-2.jpg': 'https://static.wixstatic.com/media/a3c153_d272d21cf9724e17be9e01ffe7173b88~mv2.jpg/v1/fill/w_443,h_431,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3c153_d272d21cf9724e17be9e01ffe7173b88~mv2.jpg',
    'team-member-3.jpg': 'https://static.wixstatic.com/media/a3c153_91dc165103f9438bbc9a0216b278a11d~mv2.jpg/v1/fill/w_443,h_431,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3c153_91dc165103f9438bbc9a0216b278a11d~mv2.jpg',
    'team-member-4.jpg': 'https://static.wixstatic.com/media/a3c153_52445da233db4ab6ba88eab5b99650de~mv2.jpg/v1/fill/w_443,h_431,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3c153_52445da233db4ab6ba88eab5b99650de~mv2.jpg',

    // Invitation Page
    'invitation-hero.jpg': 'https://static.wixstatic.com/media/11062b_c6cb892c01c54a87ac803f6a947808a3~mv2.jpg/v1/fill/w_2560,h_1200,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_c6cb892c01c54a87ac803f6a947808a3~mv2.jpg',
    'invitation-video-poster.jpg': 'https://static.wixstatic.com/media/11062b_3fc3608105274653a4675d6e30353973f000.jpg/v1/fill/w_1920,h_1600,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_3fc3608105274653a4675d6e30353973f000.jpg',

    // Give Page
    'give-hero-video-poster.jpg': 'https://static.wixstatic.com/media/11062b_e12e778250c54ec0aa0d967b228e9cc3f000.jpg/v1/fill/w_2560,h_900,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_e12e778250c54ec0aa0d967b228e9cc3f000.jpg',

    // Social Icons
    'icon-youtube.png': 'https://static.wixstatic.com/media/11062b_6fc54c8957474101ba6e80b01907ae50~mv2.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6fc54c8957474101ba6e80b01907ae50~mv2.png',
    'icon-instagram.png': 'https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/01c3aff52f2a4dffa526d7a9843d46ea.png',
    'icon-facebook.png': 'https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0fdef751204647a3bbd7eaa2827ed4f9.png',
    'icon-tiktok.png': 'https://static.wixstatic.com/media/11062b_4b88b89fe4694d949be4919c81f194b4~mv2.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_4b88b89fe4694d949be4919c81f194b4~mv2.png',
    'icon-envelope.png': 'https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c7d035ba85f6486680c2facedecdcf4d.png',
    'icon-phone.png': 'https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6ea5b4a88f0b4f91945b40499aa0af00.png',

    // Decorative/Client Logos
    'client-logo-1.png': 'https://static.wixstatic.com/media/a3c153_18f1357650bc445092f511e9ca9ed710~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3c153_18f1357650bc445092f511e9ca9ed710~mv2.png',
    'client-logo-2.png': 'https://static.wixstatic.com/media/a3c153_1c21a3cd7c0947ce88d31a8eef96503a~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3c153_1c21a3cd7c0947ce88d31a8eef96503a~mv2.png',
    'client-logo-3.png': 'https://static.wixstatic.com/media/a3c153_55e9a7e84ab5470e851e20135735b170~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3c153_55e9a7e84ab5470e851e20135735b170~mv2.png',
    'client-logo-4.png': 'https://static.wixstatic.com/media/a3c153_8f40ef988e774bf68d7d402bbe334e8e~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3c153_8f40ef988e774bf68d7d402bbe334e8e~mv2.png',
    'client-logo-5.png': 'https://static.wixstatic.com/media/a3c153_a701bcdd2cf641deba1dbf0dbe6c5487~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3c153_a701bcdd2cf641deba1dbf0dbe6c5487~mv2.png',
};

// Create output directory
const outputDir = path.join(__dirname, 'public', 'images-new');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Download function
function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        const filepath = path.join(outputDir, filename);
        const file = fs.createWriteStream(filepath);

        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`✓ Downloaded: ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => { });
            console.error(`✗ Failed: ${filename} - ${err.message}`);
            reject(err);
        });
    });
}

// Download all images
async function downloadAll() {
    console.log('Starting image downloads...\n');

    for (const [filename, url] of Object.entries(imageMap)) {
        try {
            await downloadImage(url, filename);
        } catch (err) {
            console.error(`Error downloading ${filename}:`, err.message);
        }
    }

    console.log('\n✓ All downloads complete!');
    console.log(`Images saved to: ${outputDir}`);
}

downloadAll();
