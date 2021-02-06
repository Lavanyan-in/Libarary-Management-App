'use strict';

angular.module('libraryManagement.books')

    .controller("notfoundController", function ($scope) {
        $scope.message = 'The page you are looking for is not accessible, please try again after someime or contact to your system admin.';
    });