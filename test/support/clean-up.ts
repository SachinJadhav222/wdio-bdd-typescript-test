const fs= require('fs-extra');
fs.emptyDir('reports');
//fs.emptyDir('reports');
fs.remove('.tmp')
console.log('Reports & Artifact cleaned ---->>')