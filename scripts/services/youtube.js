/**
 * Created by asheshvidyut on 02/07/17.
 */

var app = angular.module('youtube');

app.service('YoutubeService', ['$http', 'API_KEY', function ($http, API_KEY){
    this.getbyQuery = function (query) {
        return $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&maxResults=25&q=' +
            query + "&type=video&key="+API_KEY, { cache: true });
    };
    this.getbyPageToken = function (query, pageToken) {
        return $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&maxResults=25&q=' +
            query + "&type=video&key="+API_KEY + '&pageToken=' + pageToken, { cache: true });
    }
}]);