angular.module("ui", []);

angular.module("ui").run(function($templateCache) {
    $templateCache.put("views/accordion.html", '<div><div class="ui-accordion-title" ng-click="open()">{{title}}</div><div class="ui-accordion-content" ng-transclude="" ng-show="isOpened"></div></div>');
    $templateCache.put("views/uiAlert.html", '<div class="ui-alert"><div class="ui-alert-title">{{titulo}}</div><div class="ui-alert-message" ng-transclude=""></div></div>');
});

/* Accordion */

angular.module("ui").directive("uiAccordions", function() {
    return {
        controller: function() {
            var scopes = [];

            this.register = function(accordionScope) {
                scopes.push(accordionScope);
            }

            this.closeAll = function() {
                scopes.forEach(function(accordionScope) { accordionScope.isOpened = false });
            }
        }
    }
});

angular.module("ui").directive("uiAccordion", function() {
    return {
        templateUrl: "views/accordion.html",
        transclude: true,
        scope: {
            title: "@"
        },
        require: "^uiAccordions",
        link: function(scope, element, attrs, ctrl) {
            ctrl.register(scope);

            scope.open = function() {
                var isOpened = scope.isOpened;

                ctrl.closeAll();
                
                scope.isOpened = !isOpened;
            }
        }
    };
});

/* Date */

angular.module("ui").directive("uiDate", function($filter) {
    return {
        require: "ngModel",
        link: function(scope, element, attrs, ctrl) {
            var _formataData = function(data) {
                data = data.replace(/[^\d]+/g, "");

                if(data.length > 2) { data = data.substring(0, 2) + "/" + data.substring(2); }
                if(data.length > 5) { data = data.substring(0, 5) + "/" + data.substring(5,9); }

                return data;
            }

            element.on("keyup", function() {
                ctrl.$setViewValue(_formataData(ctrl.$viewValue));
                ctrl.$render();
            });

            /* Dispara toda vez que ocorrer uma mudança no model */
            ctrl.$parsers.push(function(value) {
                if(value.length === 10) {
                    var dateArray = value.split("/");
                    return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]).getTime();
                }
            });

            /* Dispara no momento em que o model de um input já está preenchido */
            ctrl.$formatters.push(function(value) {
                return $filter("date")(value, "dd/MM/yyyy");
            });
        }
    };
});

/* Alert */

angular.module("ui").directive("uiAlert", function() {
    return {
        templateUrl: "views/uiAlert.html",
        replace: true,
        restrict: "EA",
        transclude: true,
        scope: {
            titulo: "@title",
            /* error: "=message" */
        }
    }
});