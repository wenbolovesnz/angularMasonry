'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

  function genBrick() {
    var height = ~~(Math.random() * 500) + 100;
    var id = ~~(Math.random() * 10000);
    return {
      src: 'http://lorempixel.com/g/280/' + height + '/?' + id
    };
  };

  $scope.more = function(){
    $scope.bricks = $scope.bricks.concat([
     genBrick(),
     genBrick(),
     genBrick(),
     genBrick(),
     genBrick()]
   );
  }


  $scope.bricks = [
    {src:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg'},
    {src:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg'},
    {src:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg'},
    {src:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg'},
    {src:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/contrail.jpg'},
    {src:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg'},
    {src:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg'},
    {src:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg'}
  ];

}]);