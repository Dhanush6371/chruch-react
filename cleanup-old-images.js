const fs = require('fs');
const path = require('path');

// Folders to delete (old Wix image folders)
const foldersToDelete = [
    'public/images/01c3aff52f2a4dffa526d7a9843d46ea.png',
    'public/images/027521_0517e5f0dcb648f7980b78d1c8c7a305_mv2.jpg',
    'public/images/027521_08ce936255cd49839e4521cd680d9645_mv2.jpg',
    'public/images/027521_1061b82223714df2af47c307a5dd1b34_mv2.jpg',
    'public/images/027521_2791704c4d4f458d9f7c898c90eec300_mv2.png',
    'public/images/027521_967e6a7efdc24b54a18fdc06b2f128c5_mv2.jpg',
    'public/images/027521_e8d432a8104c40c1bef91c4ad329bdd4_mv2.jpeg',
    'public/images/0fdef751204647a3bbd7eaa2827ed4f9.png',
    'public/images/11062b_1adc0a2203a9476aa80e004b484d4481_mv2_d_4',
    'public/images/11062b_315676c29a024fec8776f18a6a10d395_mv2_d_2',
    'public/images/11062b_3fc3608105274653a4675d6e30353973f000.jpg',
    'public/images/11062b_4b88b89fe4694d949be4919c81f194b4_mv2.png',
    'public/images/11062b_65415aede6d3457abdb845866b364998_mv2.jpg',
    'public/images/11062b_6fc54c8957474101ba6e80b01907ae50_mv2.png',
    'public/images/11062b_814c3e36659644d8903dc8a413c92577_mv2.jpg',
    'public/images/11062b_901619a8201045b2973ebd0fef1ea8c1f000.jpg',
    'public/images/11062b_90f8707135cb46fcbde399bb15aab475_mv2.jpg',
    'public/images/11062b_94dff012450847b99e7c70515f421bd6_mv2_d_5',
    'public/images/11062b_989d9029e1a64ddd9eeb7a5e7ba62c70_mv2.jpg',
    'public/images/11062b_9ca28b232a954bb4b58a9115f1748584_mv2.jpg',
    'public/images/11062b_b8e75213b44c485f81fd5740a917890a_mv2_d_5',
    'public/images/11062b_c6cb892c01c54a87ac803f6a947808a3_mv2.jpg',
    'public/images/11062b_e12e778250c54ec0aa0d967b228e9cc3f000.jpg',
    'public/images/11062b_f76cd0314c5b4f94a003101124337230_mv2.jpg',
    'public/images/6ea5b4a88f0b4f91945b40499aa0af00.png',
    'public/images/a3c153_0225bd316b414eb88d3358ba488bde5e_mv2.jpg',
    'public/images/a3c153_18f1357650bc445092f511e9ca9ed710_mv2.png',
    'public/images/a3c153_1c21a3cd7c0947ce88d31a8eef96503a_mv2.png',
    'public/images/a3c153_20122b9a32cc4e9a9faca835b9f82d14_mv2.jpg',
    'public/images/a3c153_2f3667a1cdf7440090d33d9145f6ba02_mv2.jpg',
    'public/images/a3c153_52445da233db4ab6ba88eab5b99650de_mv2.jpg',
    'public/images/a3c153_55e9a7e84ab5470e851e20135735b170_mv2.png',
    'public/images/a3c153_8f40ef988e774bf68d7d402bbe334e8e_mv2.png',
    'public/images/a3c153_91dc165103f9438bbc9a0216b278a11d_mv2.jpg',
    'public/images/a3c153_a701bcdd2cf641deba1dbf0dbe6c5487_mv2.png',
    'public/images/a3c153_d272d21cf9724e17be9e01ffe7173b88_mv2.jpg',
    'public/images/a3c153_ea643fa0bec04606b8e22e51e7d510b4_mv2.jpg',
    'public/images/c7d035ba85f6486680c2facedecdcf4d.png'
];

// Recursive delete function
function deleteFolderRecursive(folderPath) {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file) => {
            const curPath = path.join(folderPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(folderPath);
    }
}

console.log('🗑️  Cleaning up old Wix image folders...\n');

let deletedCount = 0;
let notFoundCount = 0;

foldersToDelete.forEach((folder) => {
    const folderPath = path.join(__dirname, folder);
    if (fs.existsSync(folderPath)) {
        try {
            deleteFolderRecursive(folderPath);
            console.log(`✓ Deleted: ${folder}`);
            deletedCount++;
        } catch (err) {
            console.error(`✗ Failed to delete: ${folder} - ${err.message}`);
        }
    } else {
        notFoundCount++;
    }
});

console.log('\n' + '='.repeat(60));
console.log(`✓ Cleanup complete!`);
console.log(`   Deleted: ${deletedCount} folders`);
if (notFoundCount > 0) {
    console.log(`   Not found: ${notFoundCount} folders (already deleted)`);
}
console.log('='.repeat(60));
console.log('\nNote: backblue.gif and fade.gif were kept (if they exist)');
