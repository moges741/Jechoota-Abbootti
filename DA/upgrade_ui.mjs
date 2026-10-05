import fs from 'fs';
import path from 'path';

const pagesDir = './app/pages';
const componentsDir = './app/components';

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    // --- Fix Corrupted Classes ---
    content = content.replace(/bg-\[#5D1000\]er\/50/g, 'bg-white/5');
    content = content.replace(/hover:bg-\[#5D1000\]er\/70/g, 'hover:bg-white/10');
    content = content.replace(/bg-\[#3A0A00\]\/50/g, 'bg-white/5');
    content = content.replace(/hover:bg-\[#3A0A00\]\/70/g, 'hover:bg-white/10');
    content = content.replace(/bg-\[#3A0A00\]\/30/g, 'bg-white/5');

    // --- Make Category Pages Beautiful (Gradient Background) ---
    if (filePath.includes('pages/') && !filePath.includes('index.vue') && !filePath.includes('about.vue') && !filePath.includes('contact.vue')) {
        // Change flat bg to a premium gradient
        content = content.replace(/bg-\[#5D1000\]/g, 'bg-gradient-to-br from-[#1A0500] via-[#3A0A00] to-[#5D1000]');
        
        // Improve the blurred glowing orbs
        content = content.replace(/bg-\[#FFCC00\]\/10 rounded-full blur-3xl/g, 'bg-[#FFCC00]/15 rounded-full blur-[100px]');
        content = content.replace(/bg-white\/10 rounded-full blur-3xl/g, 'bg-[#5D1000]/40 rounded-full blur-[100px]');
    }

    // --- Enhance index.vue ---
    if (filePath.includes('index.vue')) {
        // Make hero image visible by changing flat overlay to a gradient overlay
        content = content.replace(/<div class="absolute inset-0 bg-\[#5D1000\]\/90 "><\/div>/g, '<div class="absolute inset-0 bg-gradient-to-b from-black/40 via-[#5D1000]/60 to-black"></div>');
        
        // Add premium hover animations to category buttons
        content = content.replace(/class="cursor-pointer bg-white\/5 hover:bg-white\/10 backdrop-blur-md border border-white\/20 rounded-xl py-3 px-4 text-sm md:text-base transition-all duration-300 hover:scale-105"/g, 'class="cursor-pointer bg-white/5 hover:bg-white/15 backdrop-blur-lg border border-white/10 rounded-xl py-3 px-4 text-sm md:text-base transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FFCC00]/20 group"');
        
        // Add hover coloring to the text inside the grid
        content = content.replace(/<NuxtLink :to="`\/\$\{cat.slug\}`" class="block w-full h-full">/g, '<NuxtLink :to="`/${cat.slug}`" class="block w-full h-full text-gray-200 group-hover:text-white transition-colors duration-300 font-medium tracking-wide">');
    }

    // --- Enhance QuoteCard.vue ---
    if (filePath.includes('QuoteCard.vue')) {
        content = content.replace(/bg-white\/5 backdrop-blur-xl border border-white\/20/g, 'bg-white/5 backdrop-blur-2xl border border-white/10');
        // If not matched exactly because of previous script:
        content = content.replace(/backdrop-blur-xl/g, 'backdrop-blur-2xl');
    }

    // --- Enhance NavBar.vue ---
    if (filePath.includes('NavBar.vue')) {
        content = content.replace(/bg-\[#5D1000\]\/80 backdrop-blur-lg/g, 'bg-black/30 backdrop-blur-xl border-b border-white/10');
        content = content.replace(/bg-\[#5D1000\]\/95/g, 'bg-black/90');
    }
    
    // --- Enhance About and Contact ---
    if (filePath.includes('about.vue') || filePath.includes('contact.vue')) {
         content = content.replace(/bg-\[#5D1000\]/g, 'bg-gradient-to-b from-black via-[#3A0A00] to-black');
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Upgraded ${filePath}`);
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

console.log("Upgrade completed.");
