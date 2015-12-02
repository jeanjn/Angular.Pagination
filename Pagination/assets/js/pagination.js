var directives = angular.module('app.directives', []);
directives.directive("pagination", function ($http) {
    return function ($scope, elm, attrs) {
        debugger;
        var data = $scope[attrs.data]
        $scope.pages = getPages(data.count);

        $scope.goTo = function (page) {
            debugger;
            result = $scope[attrs.get](page);
            $scope.pages = getPages(result.count);
        };

        function getPages(count) {
            var pages = [];
            count = Math.ceil(count / $scope[attrs.pagesize]);
            for (var i = 0; i < count; i++) {
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