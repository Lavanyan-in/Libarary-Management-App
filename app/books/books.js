angular.module('libraryManagement.books', ['ngRoute'])
    .controller("booksController", function ($scope, $http) {
        //var url = 'http://library-service-app.azurewebsites.net/api/';

        var url = 'https://localhost:44303/api/';

        function initializeController() {
            $http.get(url + 'Books/').then(function (response) {
                if (response.data)
                    $scope.books = response.data;
            }, function () { });
        }

        initializeController();

        $scope.searchBook = function () {
            $http.get(url + 'Books/search?bookAuthorName=' + $scope.bookAuthorName).then(function (response) {
                if (response.data)
                    $scope.books = response.data;
            }, function () { });
        }

        $scope.getBooks = function () {
            if (!$scope.bookAuthorName) {
                initializeController();
            }
        }
    });