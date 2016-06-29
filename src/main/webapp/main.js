/**
 * Author: Steven Zhou
 * Date: 6-20-2016
 * Description: require.js config file.
 */

requirejs.config({
    baseUrl: '/',
    paths: {
        'angular': '/app/js/angular.min',
        'angular-route': '/app/js/angular-route',
        'angular-trix': '/app/js/angular-trix',
        'angular-text-sanitize': '/app/js/angular-text-sanitize',
        'angular-animate': '/app/js/angular-animate.min',
        'angular-moment': '/app/js/angular-moment.min',
        'angular-confirm': '/app/js/angular-confirm',
        'angular-toast': '/app/js/ngToast.min',
        'ui-bootstrap' : '/app/js/ui-bootstrap.min',
        'moment': '/app/js/moment',
        'jQuery': '/app/js/jQuery',
        'app': '/app/app'
    },
    shim: {
    	'angular': {
      		exports: 'angular'
    	},
    	'angular-route': [
      		'angular'
    	],
      'angular-trix': [
          'angular'
      ],
      'angular-text-sanitize': [
          'angular'
      ],
      'angular-toast': [
          'angular'
      ],
      'angular-moment': [
          'angular'
      ],
      'angular-animate': [
          'angular'
      ],
      'angular-confirm': [
          'angular'
      ],
      'ui-bootstrap': [
          'angular'
      ]
    }
});


requirejs(['angular', 'app'], function(angular, app) {
  'use strict';
  
  angular.element(document).ready(function() {
    angular.bootstrap(document, ['blog']);
  });
});