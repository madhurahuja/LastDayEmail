var lastDayModule = angular.module('lastDayInfosysApp', ['ngRoute']);

lastDayModule.controller('ContentController', ['$scope', function($scope) {

    $scope.placeholders={
      subject:'Last Day @ Infosys!',
      preface:'Roller coaster ride with Infosys comes to an end today...',
      experience: 'I got a chance to work with the best brains @ Infosys...',
      attribution: 'I would like to thank my Managers, Team mates & Friends for making me what I am today!',
      conclusion:'In the end I must say that this organization has helped me in a great way to grow both personally and professionally...',
      contact:'I am just an email away- abc@xyz.com..'
    }

    $scope.config={rows:'2',cols:'100'};

    $scope.content={subject:'',preface:'',experience:'',attribution:'',conclusion:'',contact:''};

    $scope.createEmail=function() {
      console.log($scope.content);
      $('#my_popup').popup('show');

    };
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
