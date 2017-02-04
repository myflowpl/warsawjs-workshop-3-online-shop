(function (window) {
    'use strict';

    const URL = `/products`;

    function ProductsService($http) {
        return {
            $get() {
                return $http.get(URL);
            }
        };
    }

    angular.module('shop')
        .factory('ProductsService', ProductsService);
}(window));
