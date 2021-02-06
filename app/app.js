'use strict';

// Declare app level module which depends on views, and core components
angular.module('libraryManagement', [
    'ngRoute',
    'libraryManagement.books',
]).
    config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/', {
                controller: 'booksController',
                templateUrl: 'books/books.html'
            })
            .when('/books', {
                controller: 'booksController',
                templateUrl: 'books/books.html'
            })
            .when('/notfound', {
                controller: 'notfoundController',
                templateUrl: 'notfound/notfound.html'
            })
            .otherwise({
                redirectTo: '/notfound'
            })
    }]);
