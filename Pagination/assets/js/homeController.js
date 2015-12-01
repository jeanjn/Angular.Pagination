angular.module('app.controllers', [])
  .controller('HomeController', function ($scope) {
      $scope.pageSize = 10;
      

      $scope.get = function (page) {
          debugger;
          var list = getTestList();
          list = skip(list, page * $scope.pageSize);
          list = take(list, $scope.pageSize);
          $scope.list = list;
      }

      function getTestList() {
          var list = [];
          for (var i = 0; i < 100; i++) {
              var item = { id: i, name: 'test_' + i };
              list.push(item);
          }
          return list;
      }

      function skip(list, value) {
          var newList = [];
          for (var i = value; i < list.length; i++) {
              newList.push(list[i]);
          }
          return newList;
      }

      function take(list, value) {
          var newList = [];
          for (var i = 0; i < value; i++) {
              newList.push(list[i]);
          }
          return newList;
      }

      $scope.get(0);
  });