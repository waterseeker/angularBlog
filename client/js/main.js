//Use to instantiate app, connect factory & controllers and configure app.

var app = angular.module('myBlogApp', []);

app.config([]);

app.controller('welcomeController', ['$scope', '$rootScope', '$location', //this is the controller for the welcome html and the dependencies of the controller
    function ($scope, $rootScope, $location) {

        $rootScope.name = { //if this is set to $rootScope, the object is accessable anywhere. like a global variable. If it's just $scope, it's only accessible in this controller.
            firstname: '',
            lastname: '',
        };

        $scope.printMyName = function () {
            console.log($rootScope.name);
        };

        $scope.blogpost = {
            username: '',
            message: '',
        }
    }]);

app.controller('blogpostController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    console.log('blogpost controller working');

    // console.log($rootScope.name);
    //ajax and rest stuff in here for the tweets you can use the same get and post from the last lab. 

    $scope.postBlog = function postData() {
        console.log("postBlog function accessed");
        /*This function should create a post request using jquery. When posted it should:
            1) Add tweets to the 'database'
            2) After posted prepend message to list of messages and clear input box */
        var blogList = $('#blogPosts')
        var newBlogPost = {
            author: $rootScope.name,
            content: $('#createBlogPost').val(), //this is the text in the input field on the html page
            id: 
            createdAt: 
            title:
        };
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/api/posts',
            contentType: 'application/json',
            data: JSON.stringify(newTweet),
        }).then(function (success) {
            tweetList.prepend("<li>" + (newTweet.text) + "</li>");
            // getData();
        })
    }
    $scope.getPosts = function getTweets() {
        console.log("getPosts function accessed")
        /*This function should make a get request from 'database', parse the data and prepend each to the page*/
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/api/posts',
            contentType: 'application/json',
        }).then(function (allThePosts) {
            $scope.posts = allThePosts;
        })
    }
    $scope.getPosts();
}]);


app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/welcome', { //when we navigate to localhost:3000/#/welcome....
                templateUrl: 'views/welcome.html', //this is what file you're getting'
                controller: 'welcomeController' //this is what it's going to do'
            })

            .when('/tweets', {
                templateUrl: 'views/posts.html',
                controller: 'tweetsController'
            })
            .otherwise({ //anything else takes me to the welcome page
                redirectTo: '/welcome'
            })


    }])