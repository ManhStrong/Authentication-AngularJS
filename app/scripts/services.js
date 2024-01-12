'use strict';

angular.module('angularRestfulAuth')
    .factory('Main', ['$http', '$localStorage', function ($http, $localStorage) {
        var baseUrl = "http://localhost:1337/api/v1";
        console.log($localStorage.token, 999999)
        return {
            signup: function (data, success, error) {
                $http.post(baseUrl + '/signUp', data).success(success).error(function (response) {
                    if (response.errorCode = 'M003') {
                        alert("Địa chỉ email đã tồn tại");
                    }
                    else if (response.errorCode = 'M002') {
                        alert("Địa chỉ email không hợp lệ")
                    }
                })
            },
            signin: function (data, success, error) {
                $http.post(baseUrl + '/login', data).success(success).error(function (response) {
                    console.log(response, 9889898);
                    if (response.errorCode === 'M004') {
                        alert("Tài khoản chưa được đăng kí");
                    }
                    else if (response.errorCode === 'M002') {
                        alert("Mật khẩu không đúng. Vui lòng nhập lại")
                    }
                })
            },
            me: function (success, error) {
                $http.get(baseUrl + '/getUserLogin').success(success).error(error)
            },
            logout: function (success) {
                console.log(746466464646, "call logout");
                delete $localStorage.token;
                success();
            }
        };
    }
    ]);