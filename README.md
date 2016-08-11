##This repo is attempting to make a simple example of webpack being used to bundle angular files

######angular.module.controller was removed and added to index.js.  Angular files like this need to be exported and required in index.js

######webpack controls the bundling and points to the filepath, app.js and the output to app.bundle.js

######the output is loaded into the HTML file with script tags

######changes were needed in the package.json
######items like babel need to be added to the webpack
######error like, bundle not found need to add script to package.json