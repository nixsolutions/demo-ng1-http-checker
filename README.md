Angular 1.x Demo Application - Find Server
====================================================

This module checks income urls on availability and returns one with higher priority.
[Demo](https://nixsolutions.github.io/demo-ng1-http-checker/). 
Please user array of objects as a test data, like:
[
    {
      "url": "http://doesNotExist.boldtech.co",
      "priority": 1
    },
    {
      "url": "https://nixsolutions.github.io/demo-ng1-http-checker/",
      "priority": 2
    }
]

Features
--------

1. Validate incoming data
2. Make requests to provided servers and return one withthe response 200 and higher priority

Technologies
------------

* [Angular 2.0](https://angular.io)
* [Bootstrap](http://getbootstrap.com)
* [Webpack](https://webpack.github.io)

Developers Notes
------------

* git clone git@github.com:nixsolutions/demo-ng1-http-checker.git
* cd test-http
* npm i
* to run development server use `npm start`
* to create build use `npm run build`
* to run tests use `npm run test`


