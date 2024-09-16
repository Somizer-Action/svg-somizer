const { optimize } = require('svgo');
const fs = require('fs').promises;
const path = require('path');

const inputDirs = process.env.INPUT_DIRECTORIES.split(',').map(dir => dir.trim());
const outputJsonPath = './optimized.json';

const optimizeSvgInDir = async (dir) => {
    const startTime = Date.now();

    try {
        const files = await fs.readdir(dir);
        const svgFiles = files.filter(file => path.extname(file) === '.svg');

        const processingPromises = svgFiles.map(async (file) => {
            const svgFilePath = path.join(dir, file);
            const svgData = await fs.readFile(svgFilePath, 'utf-8');
            const result = optimize(svgData, { path: svgFilePath });
            await fs.writeFile(svgFilePath, result.data);
            console.log(`Optimized: ${file}`);
        });

        await Promise.all(processingPromises);

        const endTime = Date.now();
        const timeTaken = endTime - startTime;

        return timeTaken;
    } catch (err) {
        console.error(`Error optimizing files in directory ${dir}:`, err);
        throw err;
    }
};

const optimizeMultipleDirs = async () => {
    let totalTime = 0;

    for (const dir of inputDirs) {
        console.log(`Optimizing SVGs in directory: ${dir}`);
        const timeTaken = await optimizeSvgInDir(dir);
        totalTime += timeTaken;
    }

    const resultJson = {
        timeTaken: `${totalTime} ms`
    };

    await fs.writeFile(outputJsonPath, JSON.stringify(resultJson, null, 2));
    console.log(`Total time taken: ${totalTime} ms`);
};

optimizeMultipleDirs().catch(err => {
    console.error('Error during optimization:', err);
    process.exit(1);
});
