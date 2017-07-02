var app = angular.module('youtube');

app.directive('videoDetailsDirective', ["$sce", "$window", function ($sce, $window){
    return {
        restrict: 'E',
        transculde: false,
        scope: {
            videoLink: '@video'
        },
        templateUrl: 'views/video-details.html',
        link: function (scope, ele, attr) {
            scope.trustAs = function (str) {
                return $sce.trustAsResourceUrl(str);
            };
            angular.element($window).on('scroll', function (){
                if ($window.pageYOffset >= 50) {
                    ele.addClass('fixed');
                }
                else {
                    ele.removeClass('fixed');
                }
            });
        }
    }
}]);