/**
 * Created by asheshvidyut on 30/06/17.
 */

var app = angular.module('youtube', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home.html',
        controller: 'HomeCtrl'
    });
}]).constant('_', window._);

