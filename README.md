spa
===

Single page application scaffolding.

The structure of this application is as follows. All precompiled client-side
assets exist in the `client` directory. JavaScript and CSS in the `public`
directory are there as a result of the `gulp build` step.

Server-side routes and controllers are in the `server` directory and include an
`index.js` script that is meant to be a bootstrap for the routes and
controllers.

#### Client

* Exoskeleton MVC
* Handlebars templating

#### Server

* Express
* EJS rendering

#### Tooling

Includes a gulp file with the following tasks:

* Lint
* Build
* Compress (separate task)

The build task includes concatenation of JavaScripts, compilation of client-side
handlebars templates, and myth is run against the main style.css in client.
