var app = angular.module('youtube');

app.controller("HomeCtrl", ["$scope", "$http", "_", "$sce", 'API_KEY', 'YoutubeService',
                    function($scope, $http, _, $sce, API_KEY, YoutubeService){
    $scope.loading = true;
    $scope.videos = null;
    $scope.searchText = "Tu Thodi Der";

    $scope.bigVideoSrc = null;

    $scope.searchVideos = function () {
        $scope.loading = true;
        YoutubeService.getbyQuery($scope.searchText)
          .then(function(response){
              $scope.videos = response.data.items;
              $scope.loading = false;
              $scope.bigVideoSrc = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + $scope.videos[0].id.videoId);
          }).catch(function (err){
            alert(err);
        });
   };
   $scope.showVideo = function (video) {
       $scope.bigVideoSrc = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + video.id.videoId);
   };
   $scope.$watch('searchText', _.debounce(function (){
       $scope.searchVideos();
   }, 1000));
}]);