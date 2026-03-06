const fs = require('fs');
const https = require('https');
const path = require('path');

// Video mapping with meaningful names
const videoMap = {
    // The Belief Page - Main video
    'belief-video-720p.mp4': 'https://video.wixstatic.com/video/11062b_901619a8201045b2973ebd0fef1ea8c1/720p/mp4/file.mp4',
    'belief-video-480p.mp4': 'https://video.wixstatic.com/video/11062b_901619a8201045b2973ebd0fef1ea8c1/480p/mp4/file.mp4',

    // The Invitation Page - Connect video (also used in Give page)
    'invitation-video-720p.mp4': 'https://video.wixstatic.com/video/11062b_3fc3608105274653a4675d6e30353973/720p/mp4/file.mp4',
    'invitation-video-480p.mp4': 'https://video.wixstatic.com/video/11062b_3fc3608105274653a4675d6e30353973/480p/mp4/file.mp4',

    // Give Page - Hero video
    'give-hero-video-720p.mp4': 'https://video.wixstatic.com/video/11062b_e12e778250c54ec0aa0d967b228e9cc3/720p/mp4/file.mp4',
    'give-hero-video-480p.mp4': 'https://video.wixstatic.com/video/11062b_e12e778250c54ec0aa0d967b228e9cc3/480p/mp4/file.mp4',
};

// Create output directory
const outputDir = path.join(__dirname, 'public', 'videos');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Download function with progress tracking
function downloadVideo(url, filename) {
    return new Promise((resolve, reject) => {
        const filepath = path.join(outputDir, filename);
        const file = fs.createWriteStream(filepath);

        console.log(`⏳ Downloading: ${filename}...`);

        https.get(url, (response) => {
            const totalSize = parseInt(response.headers['content-length'], 10);
            let downloadedSize = 0;
            let lastProgress = 0;

            response.on('data', (chunk) => {
                downloadedSize += chunk.length;
                const progress = Math.floor((downloadedSize / totalSize) * 100);

                // Show progress every 10%
                if (progress >= lastProgress + 10) {
                    console.log(`   ${progress}% - ${(downloadedSize / 1024 / 1024).toFixed(2)} MB / ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
                    lastProgress = progress;
                }
            });

            response.pipe(file);

            file.on('finish', () => {
                file.close();
                const fileSizeMB = (fs.statSync(filepath).size / 1024 / 1024).toFixed(2);
                console.log(`✓ Downloaded: ${filename} (${fileSizeMB} MB)\n`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => { });
            console.error(`✗ Failed: ${filename} - ${err.message}\n`);
            reject(err);
        });
    });
}

// Download all videos
async function downloadAll() {
    console.log('Starting video downloads...\n');
    console.log('Note: Videos are large files and may take several minutes to download.\n');

    let successCount = 0;
    let failCount = 0;

    for (const [filename, url] of Object.entries(videoMap)) {
        try {
            await downloadVideo(url, filename);
            successCount++;
        } catch (err) {
            console.error(`Error downloading ${filename}:`, err.message);
            failCount++;
        }
    }

    console.log('\n' + '='.repeat(60));
    console.log(`✓ Download complete!`);
    console.log(`   Success: ${successCount} videos`);
    if (failCount > 0) {
        console.log(`   Failed: ${failCount} videos`);
    }
    console.log(`   Location: ${outputDir}`);
    console.log('='.repeat(60));
}

downloadAll();
