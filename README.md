# DECO3801 - Frontend

This is the frontend part of the application.

### Pre-requisites

If you have not installed nodejs then follow the instructions here: https://nodejs.org
You will also require the `grunt-cli` and `bower` packages to be installed globally through npm.
```
npm install -g grunt-cli
npm install -g bower
```

### Installation

- `npm install`
- `bower install`
- `grunt -f`

### Grunt Tasks

There are three main grunt tasks available. The first is `grunt dev` which will compile and build your application but skip any minifying processes that could slow it down. `grunt build` will compile and build your application, plus any minifying tasks to make the final files as small as possible. Finally `grunt watch` will watch all the files in the project and call the relevant sub tasks when files are updated. The watch task also supports live reload. The `grunt default` command will run the `dev` and then `watch` tasks.

### Further Reading

This project depends on a couple of well known JavaScript and CSS frameworks. These are jQuery, Twitter Bootstrap and AngularJS.
For more information on any of these, please follow the links:

- https://jquery.com
- http://getbootstrap.com
- https://angularjs.org