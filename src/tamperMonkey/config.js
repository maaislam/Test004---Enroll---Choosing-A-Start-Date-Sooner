// ==UserScript==
// @name         Test004 - Enroll - Choosing A Start Date Sooner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Test004 - Enroll - Choosing A Start Date Sooner
// @author       You
// @match       https://trydesignlab.com/interaction-design-course/enroll/

// ==/UserScript==

console.log('Tampermonkey is running...');
var headID = document.getElementsByTagName('head')[0];
var bodyID = document.getElementsByTagName('body')[0];
var link = document.createElement('link');
var script = document.createElement('script');
//var script1 = document.createElement('script');
link.type = 'text/css';
link.rel = 'stylesheet';
script.type = 'text/javascript';
//script1.type = 'text/javascript';
link.href = 'http://localhost:1234/index.10330133.css';
script.src = 'http://localhost:1234/index.20e47298.js';
//script1.src = 'http://localhost:1234/main.39afc03c.js';

headID.appendChild(link);
bodyID.appendChild(script);
//bodyID.appendChild(script1);
