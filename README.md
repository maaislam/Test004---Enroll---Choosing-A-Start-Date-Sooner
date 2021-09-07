# AB-Testing-Boilerplate

## Installation

Use the package manager [npm](https://nodejs.org/en/) to install all the necessary dependencies.

You will also have to install tampermonkey chrome extention.

## Usage

Inside the index.js file of you variation folder make sure to do a default export of the function or variable.
Then import the function/var in the index.js file in the src folder.

Then in the console type "npm start" & hit enter to start a dev server.

Make sure the urls used in the tampermonkey/config.js file matches the js and scss file location specified in
dist/index.html

Finally, add the url you will be working on with @match directive in the header tampermonkey config.js file, make sure it has same url in the userscript of tampermonkey and also dont forget to add the file location for the config file using @require directive in tampermonkey userscript.
# safestyle_mosaic_JFSAF_0257
# safestyle_mosaic_JFSAF_0257
# Test004---Enroll---Choosing-A-Start-Date-Sooner
