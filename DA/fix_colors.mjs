import fs from 'fs';
import path from 'path';

const pagesDir = './app/pages';
const componentsDir = './app/components';

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    // Replace brand-dark with #5D1000
    content = content.replace(/bg-brand-dark/g, 'bg-[#5D1000]');
    content = content.replace(/from-brand-dark/g, 'from-[#5D1000]');
    content = content.replace(/to-brand-dark/g, 'to-[#5D1000]');

    // Replace brand-darker with #3A0A00
    content = content.replace(/bg-brand-darker/g, 'bg-[#3A0A00]');

    // Replace brand-gold with #FFCC00
    content = content.replace(/bg-brand-gold/g, 'bg-[#FFCC00]');
    content = content.replace(/text-brand-gold/g, 'text-[#FFCC00]');
    content = content.replace(/border-brand-gold/g, 'border-[#FFCC00]');
    content = content.replace(/shadow-brand-gold/g, 'shadow-[#FFCC00]');
    content = content.replace(/from-brand-gold/g, 'from-[#FFCC00]');
    content = content.replace(/to-brand-gold/g, 'to-[#FFCC00]');

    // Also, ensure text in QuoteCard doesn't blend in if we missed something.
    // By default quote cards had white text. Let's make sure it's white.
    // The previous script made text-gray-400 into text-gray-200.

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Fixed ${filePath}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.vue')) {
            replaceInFile(fullPath);
        }
    }
}

walkDir(pagesDir);
walkDir(componentsDir);

console.log("Fix completed.");
