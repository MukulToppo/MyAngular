/* use strict */
var app = angular.module('MyApp', []);

app.directive('ShieldCtrl', function ($scope) {
    $scope.shieldNames = [];

    this.addReigns = function () {
        $scope.shieldNames.push("Roman Reigns:  The Juggernaut");
    };

    this.addRollins = function () {
        $scope.shieldNames.push("Seth Rollins: Architect");
    };

    this.addAmbrose = function () {
        $scope.shieldNames.push("Dean Ambrose: Lunatic Fringe");
    };
})

.directive('theshield', function () {
    return {
        restrict: 'E',
        controller: 'ShieldCtrl',
        link: function (scope, element, attrs) {
            element.bind('mousenter', function () {
                console.log(scope.shieldNames);
            })
        }
    }
})
    
.directive('reigns', function () {
    return {
        require: 'theshield',
        link: function (scope, element, attrs, ShieldCtrl) {
            ShieldCtrl.addReigns();
        }
    }
})



    .directive('rollins', function () {
        return {
            require: 'theshield',
            link: function (scope, element, attrs, ShieldCtrl) {
                ShieldCtrl.addRollins();
            }
        }
    })


    .directive('ambrose', function () {
        return {
            require: 'theshield',
            link: function (scope, element, attrs, ShieldCtrl) {
                ShieldCtrl.addAmbrose();
            }
        }
    })


    .directive('interactiveBtn', function () {
    return {
        retrict: 'A',
        link: function (scope, element, attrs) {
            element.bind ('mouseenter', function () {
                console.log(element);
                element[0].innerText = "Rolled Over";
            });
            element.bind ('mouseleave', function () {
                element[0].innerText = "Rolled Out";
            })
        }
    }
})

.directive('walterwhite', function() {
    return {
        restrict: 'E',
        transclude: true,
        link: function (scope, element, attrs) {
            console.log(scope);
            console.log(element);
            console.log(attrs);
        }
    };

    /*return {
        restrict: 'E',
        transclude: true,
        template: '<h2>I am Heisenberg!!</h2>'
    }*/
});