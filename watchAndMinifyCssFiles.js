var watch = require('node-watch');
const {execSync} = require('child_process')

console.log('\n|----------------------------------|');
console.log('| watching CSS file for changes... |');
console.log('|----------------------------------|\n');

watch('./src/assets/css/', { recursive: true }, function(evt, name) {
    console.log('% occured', evt, ' and %s changed.', name);
    const filepath = name;
    const fileName = getFileName(filepath);

    
    if (evt == 'update') {
        const srcDir = `src/assets/css`;
        const minifiedFileName = getMinifiedFileName(fileName);
        if (!fileName.includes('.min.')) {
            execSync(`node node_modules/minify/bin/minify ${srcDir}/${fileName} > ${srcDir}/${minifiedFileName}`)
        }
        // on create or modify
    }

    if (evt == 'remove') {
        // on delete
        console.log('file removed', filepath);
    }
    
});

function getFileName(filepath) {
    const splitrAtt = filepath.split('/');
    return splitrAtt[splitrAtt.length-1];
}

function getMinifiedFileName(fileName) {
    const arr = fileName.split('.');
    return arr[0]+'.min.'+arr[1];
}