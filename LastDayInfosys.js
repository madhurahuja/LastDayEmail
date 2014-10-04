var lastDayModule = angular.module('lastDayInfosysApp', ['ngRoute']);

lastDayModule.service('DataService', function(){
  var content={};
  this.setContent = function(contentVar){
    content = contentVar;
  };

  this.getContent = function(){
    return content;
  }
});

lastDayModule.controller('ContentController', ['$scope','DataService','$location', function($scope,DataService,$location) {

    $scope.placeholders={
      subject:'Last Day @ Infosys!',
      preface:'Roller coaster ride with Infosys comes to an end today...',
      experience: 'I got a chance to work with the best brains @ Infosys...',
      attribution: 'I would like to thank my Managers, Team mates & Friends for making me what I am today!',
      conclusion:'In the end I must say that this organization has helped me in a great way to grow both personally and professionally...',
      contact:'I am just an email away- abc@xyz.com..'
    }

    $scope.config={rows:'2',cols:'100'};

    $scope.content=DataService.getContent();

    $scope.createEmail=function() {
      DataService.setContent($scope.content);
      $location.url("/compile");
    };

    $scope.back=function(){
      DataService.setContent(DataService.getContent());
      $location.url("/");
    }
  }]);

lastDayModule.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
  templateUrl: 'LastDayInfosysFormPartial.html',
  controller: 'ContentController'
      }).
      when('/compile', {
  templateUrl: 'FormattedContentPartial.html',
  controller: 'ContentController'
      })
}]);
