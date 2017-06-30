var app = angular.module('youtube');

app.controller("HomeCtrl", ["$scope", "$http", "_", function($scope, $http, _){
    var API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';
    $scope.loading = true;
    $scope.videos = null;
    $scope.searchText = "Tu Thodi Der";

    $scope.searchVideos = function () {
        $scope.loading = true;
        $http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&maxResults=5&q=" + $scope.searchText
          + "&type=video&key="+API_KEY, { cache: true })
          .then(function(response){
              $scope.videos = response.data.items;
              $scope.loading = false;
          }).catch(function (err){
            alert(err);
        });
   };
   $scope.$watch('searchText', _.debounce(function (){
       $scope.searchVideos();
   }, 1000));
}]);