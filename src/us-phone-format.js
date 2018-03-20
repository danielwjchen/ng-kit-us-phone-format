/**
 * Defines ng-kit usPhoneFormat angular $filter
 */
(function(angular) {
    'use strict';
    angular.module('ng-kit.us-phone-format', [])
    /**
     * Formats number to phone format
     */
    .filter('usPhoneFormat', function() {
        return function(givenString) {
            if (!givenString) {
                return givenString;
            }
            var numberOnlyString = givenString.replace(/\D/g,'');
            return '(' + numberOnlyString.substring(0, 3) + ') ' +
                numberOnlyString.substring(3, 6) + '-' +
                numberOnlyString.substring(6);
        };
    });
})(angular);