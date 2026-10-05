import fs from 'fs';
import path from 'path';

const pagesDir = './app/pages';
const componentsDir = './app/components';

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    // Replace main backgrounds
    content = content.replace(/bg-gradient-to-b[r]? from-[-a-z0-9]+ via-[-a-z0-9]+ to-[-a-z0-9]+/g, 'bg-brand-dark');
    content = content.replace(/bg-gradient-to-b[r]? from-[-a-z0-9]+ to-[-a-z0-9]+/g, 'bg-brand-dark');
    
    // Replace blur blobs with brand colors
    content = content.replace(/bg-[-a-z]+-500\/10/g, 'bg-brand-gold/10');
    content = content.replace(/bg-[-a-z]+-400\/10/g, 'bg-brand-gold/10');
    content = content.replace(/bg-[-a-z]+-600\/10/g, 'bg-brand-gold/10');
    content = content.replace(/bg-[-a-z]+-500\/20/g, 'bg-brand-gold/20');
    content = content.replace(/bg-[-a-z]+-400\/20/g, 'bg-brand-gold/20');

    // Replace index.vue specific
    content = content.replace(/bg-black\/60/g, 'bg-brand-dark/90'); // Dark overlay
    content = content.replace(/bg-black\/70/g, 'bg-brand-dark/90'); // Dark overlay
    content = content.replace(/before:from-yellow-400 before:via-yellow-200 before:to-yellow-400/g, 'before:from-brand-gold before:via-yellow-200 before:to-brand-gold');
    content = content.replace(/border-yellow-400\/40/g, 'border-brand-gold/40');
    content = content.replace(/shadow-yellow-400\/10/g, 'shadow-brand-gold/10');
    content = content.replace(/hover:shadow-yellow-400\/30/g, 'hover:shadow-brand-gold/30');
    content = content.replace(/hover:border-yellow-400/g, 'hover:border-brand-gold');
    content = content.replace(/bg-yellow-400/g, 'bg-brand-gold');
    
    // Replace navbar and card backgrounds for glass effect
    content = content.replace(/bg-white\/10/g, 'bg-brand-darker/50');
    content = content.replace(/hover:bg-white\/15/g, 'hover:bg-brand-darker/70');
    content = content.replace(/hover:bg-white\/20/g, 'hover:bg-brand-darker/70');
    content = content.replace(/bg-white\/5/g, 'bg-brand-darker/30');
    content = content.replace(/bg-gray-900\/50/g, 'bg-brand-dark/80');
    content = content.replace(/bg-gray-900\/95/g, 'bg-brand-dark/95');

    // Make sure borders are white for the glass effect as requested
    // (Borders are usually border-white/10 or border-white/20, which is fine)
    
    // Replace text colors
    content = content.replace(/text-gray-400/g, 'text-gray-200');
    content = content.replace(/text-gray-300/g, 'text-gray-100');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated ${filePath}`);
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

console.log("Done.");
