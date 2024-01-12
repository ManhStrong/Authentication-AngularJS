'use strict';

/* Controllers */

angular.module('angularRestfulAuth')
    .controller('HomeCtrl', ['$rootScope', '$scope', '$location', '$localStorage', 'Main', function ($rootScope, $scope, $location, $localStorage, Main) {

        $scope.signin = function () {
            var formData = {
                emailAddress: $scope.email,
                password: $scope.password
            }
            console.log(formData, 262662)

            Main.signin(formData, function (res) {
                console.log(res, 9696969)
                console.log(8888888)
                $localStorage.token = res.token;
                window.location = "/";
            }, function () {
                $rootScope.error = 'Failed to signin';
            })
        };

        $scope.signup = function () {
            var formData = {
                emailAddress: $scope.email,
                password: $scope.password,
                userName: $scope.userName
            }
            console.log(formData, 288288)

            Main.signup(formData, function (res) {
                $localStorage.token = res.token;
                window.location = "/"
            }, function (error) {
                console.log(error, 66666);
                $rootScope.error = 'Failed to signup';
            })
        };

        $scope.me = function () {
            Main.me(function (res) {
                console.log(res, 9999999)
                $scope.myDetails = res;
            }, function () {
                $rootScope.error = 'Failed to fetch details';
            })
        };

        $scope.logout = function () {
            console.log(899999,"calll logout")
            Main.logout(function () {
                window.location = "/"
            }, function () {
                alert("Failed to logout!");
            });
        };
        $scope.token = $localStorage.token;
    }])

    .controller('MeCtrl', ['$rootScope', '$scope', '$location', 'Main', function ($rootScope, $scope, $location, Main) {

        Main.me(function (res) {
            $scope.myDetails = res;
        }, function () {
            $rootScope.error = 'Failed to fetch details';
        })
    }]);
