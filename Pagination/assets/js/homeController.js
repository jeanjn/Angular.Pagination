angular.module('app.controllers', [])
  .controller('HomeController', function ($scope) {
      $scope.pageSize = 10;
      

      $scope.get = function (page) {
          debugger;
          var list = getTestList();

          $scope.data = { count: list.length };

          list = skip(list, page * $scope.pageSize);
          list = take(list, $scope.pageSize);
          $scope.list = list;

          $scope.data.list = list;

          return $scope.data;
      }

      function getTestList() {
          var list = [];
          for (var i = 0; i < 100; i++) {
              var item = { id: i, name: 'test_' + i };
              list.push(item);
          }
          return list;
      }

      function skip(list, start) {
          var newList = [];
          for (var i = start; i < list.length; i++) {
              newList.push(list[i]);
          }
          return newList;
      }

      function take(list, pageSize) {
          var newList = [];
          for (var i = 0; i < pageSize; i++) {
              newList.push(list[i]);
          }
          return newList;
      }

      $scope.get(0);//criar txt pagesize, next, previous, last, first, desabilitar current
  });