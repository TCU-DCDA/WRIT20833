#!/usr/bin/env node
const { spawn } = require('child_process');
const fs = require('fs');

const [,, folder, model, output] = process.argv;

if (!folder || !model || !output) {
    console.log('Usage: node embed.js <folder> <model> <output.jsonl>');
    process.exit(1);
}

const files = fs.readdirSync(folder)
    .filter(f => f.endsWith('.py'))
    .map(f => `${folder}/${f}`);

async function embedFile(file) {
    const content = fs.readFileSync(file, 'utf8');
    
    return new Promise((resolve) => {
        const proc = spawn('ollama', ['run', model], { stdio: ['pipe', 'pipe', 'inherit'] });
        
        let output = '';
        proc.stdout.on('data', (data) => output += data);
        
        proc.on('close', () => {
            const result = { file, embedding: output.trim() };
            resolve(JSON.stringify(result));
        });
        
        proc.stdin.write(`Generate embedding for: ${content}`);
        proc.stdin.end();
    });
}

(async () => {
    const embeddings = [];
    for (const file of files) {
        console.log(`Processing ${file}...`);
        const embedding = await embedFile(file);
        embeddings.push(embedding);
    }
    
    fs.writeFileSync(output, embeddings.join('\n'));
    console.log(`Embeddings saved to ${output}`);
})();
