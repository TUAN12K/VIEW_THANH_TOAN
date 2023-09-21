var app = angular.module('myApp', []);

app.controller('MyController', function($scope, $http) {
    // Gửi yêu cầu GET để lấy dữ liệu từ API
    $.ajax({
        url: 'http://localhost:8080/api-v1-admin/quan-ly-hoa-don-thanh-toan/all',
        type: 'GET',
        success: function(data) {
            // Xử lý dữ liệu từ phản hồi
            $scope.$apply(function() {
                $scope.myData = data;
            });
        },
        error: function(error) {
            // Xử lý lỗi nếu có
            console.log(error);
        }
    });
});
