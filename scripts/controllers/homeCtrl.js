var app = angular.module('youtube');

app.controller("HomeCtrl", ["$scope", "$http", "_", "$sce", function($scope, $http, _, $sce){
    var API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';
    $scope.loading = true;
    $scope.videos = null;
    $scope.searchText = "Tu Thodi Der";

    $scope.bigVideoSrc = null;

    $scope.searchVideos = function () {
        $scope.loading = true;
        $http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&maxResults=5&q=" + $scope.searchText
          + "&type=video&key="+API_KEY, { cache: true })
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