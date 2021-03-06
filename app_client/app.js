(function() {

    angular.module('Biblioteca', ['ngResource', 'ngRoute']);
  
    function config($routeProvider) {
        // endpoints are declared here
        $routeProvider
            .when('/', {
                templateUrl: '/auth/login/login.view.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            })
            .when('/libros', {
                templateUrl: '/libros/home/home.view.html',
                controller: 'homeLibroCtrl',
                controllerAs: 'vm'
            })
            .when('/add-libro', {
                templateUrl: '/libros/form/libro-form.view.html',
                controller: 'addLibroCtrl',
                controllerAs: 'vm'
            })
            .when('/libro/:id', {
                templateUrl: '/libros/form/libro-form.view.html',
                controller: 'editLibroCtrl',
                controllerAs: 'vm'
            })
            .when('/libro/delete/:id', {
                templateUrl: '/libros/delete/libro-delete.view.html',
                controller: 'deleteLibroCtrl',
                controllerAs: 'vm'
            })
            .when('/prestamos', {
                templateUrl: '/prestamos/home/home.view.html',
                controller: 'homePrestamoCtrl',
                controllerAs: 'vm'
            })
            .when('/add-prestamo', {
                templateUrl: '/prestamos/form/prestamo-form.view.html',
                controller: 'addPrestamoCtrl',
                controllerAs: 'vm'
            })
            .when('/prestamo/:id', {
                templateUrl: '/prestamos/form/prestamo-form.view.html',
                controller: 'editPrestamoCtrl',
                controllerAs: 'vm'
            })
            .when('/prestamo/delete/:id', {
                templateUrl: '/prestamos/delete/prestamo-delete.view.html',
                controller: 'deletePrestamoCtrl',
                controllerAs: 'vm'
            })
            .when('/register', {
                templateUrl: '/auth/register/register.view.html',
                controller: 'registerCtrl',
                controllerAs: 'vm'
            })
            .when('/login', {
                templateUrl: '/auth/login/login.view.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            })
            .when('/inicio', {
                templateUrl: '/home/home.view.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .when('/navegacion', {
                templateUrl: '/home/navigation.html',
                controller: 'navCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    angular
        .module('Biblioteca')
        .config(['$routeProvider', config]);

})();
