(function () {

    requirejs.config({
        baseUrl: 'js/',
        paths: {
            dataService: './modules/dataService',
            alert : './modules/alert',
            jquery: './libs/jquery-1.10.1',
            angular: './libs/angular'
        },

        shim: {
            angular: {
                exports: 'angular'
            }
        }
    })

    requirejs(['alert', 'angular'], function(alert, angular) {
        alert.showMsg()
        console.log(angular)
    })
})()