#!/usr/bin/env node

// browser_chaos.js
// Trolling tool to open multiple browser tabs with annoying sites at random intervals

const { exec } = require('child_process');
const sites = [
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Rickroll
    'https://pointerpointer.com/', // Annoying pointer follower
    'https://cat-bounce.com/', // Bouncing cats
    'https://www.hackertyper.com/', // Fake hacking
    'https://theuselessweb.com/' // Random useless sites
];

console.log('Starting browser chaos... Press Ctrl+C to stop.');

function openRandomTab() {
    const site = sites[Math.floor(Math.random() * sites.length)];
    // Use xdg-open to open the default browser in Kali Linux
    exec(`xdg-open ${site}`, (err) => {
        if (err) console.error('Error opening browser:', err);
    });
}

// Open tabs at random intervals between 10 and 60 seconds
setInterval(() => {
    const numTabs = Math.floor(Math.random() * 3) + 1; // 1 to 3 tabs
    for (let i = 0; i < numTabs; i++) {
        setTimeout(openRandomTab, Math.random() * 5000); // Spread openings slightly
    }
}, Math.random() * 50000 + 10000); // 10–60 seconds

// Keep the script running
process.stdin.resume();
