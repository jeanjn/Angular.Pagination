var directives = angular.module('app.directives', []);
directives.directive("pagination", function ($http) {
    return function ($scope, elm, attrs) {
        debugger;
        var list = $scope[attrs.list]
        $scope.pages = getPages(list);

        $scope.goTo = function (page) {
            debugger;
            list = $scope[attrs.get](page);
            $scope.pages = getPages(list);
        };

        function getPages(list) {
            var pages = [];

            for (var i = 0; i < list.length; i++) {
                pages.push(i);
            }

            return pages;
        }
    }
})
.directive("paginationHtml", function () {
    return {
        templateUrl: 'assets/tpl/pagination.html'
    }
});