const fs= require('fs-extra');
// fs.emptyDir('reports/assets');
// fs.emptyDir('reports/features');
// fs.emptyDir('reports/json');
//fs.emptyDir('reports');
fs.remove('reports/assets');
fs.remove('reports/features');
fs.remove('reports/json');
fs.remove('reports/html-report')

fs.remove('.tmp')
console.log('Reports & Artifact cleaned ---->>')