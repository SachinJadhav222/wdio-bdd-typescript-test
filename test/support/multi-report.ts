const report = require('multiple-cucumber-html-reporter');
const currentTime= new Date();

report.generate({
	//jsonDir: '.temp/json',
    jsonDir: './reports/json/',
	reportPath: './reports/html-report/',
    openReportInBrowser:true,
	metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'UI Automation'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: currentTime},
            {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'},
            {label: 'SDET ', value: 'SACHIN JADHAV'},
        ]
    }
});