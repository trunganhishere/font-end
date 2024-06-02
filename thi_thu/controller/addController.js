window.addController = function ($scope, $http, $location) {
    $scope.title = "Đây là trang thêm bài viết"


    $scope.addPost = function () {
        const apiPosts = "http://localhost:3000/posts"

        let formatDate = $scope.post.ngay_dang.toISOString().split('T')[0];
        let newPost = {
            tieu_de: $scope.post.tieu_de,
            noi_dung: $scope.post.noi_dung,
            tac_gia: $scope.post.tac_gia,
            the_loai: $scope.post.the_loai,
            ngay_dang: formatDate,
        }

        let check = true
        $scope.test = {
            test_tieu_de: false,
            test_noi_dung: false
        }
        if (!$scope.post || !$scope.post.tieu_de) {
            check = false
            $scope.test.test_tieu_de = true
            return;
        }
        if (!$scope.post || !$scope.post.test_noi_dung) {
            check = false
            $scope.test.test_noi_dung = true
            return;
        }

        if (check) {
            // console.log(newPost);
            $http.post(apiPosts, newPost)
                .then(function (response) {
                    if (response.status == 201) {
                        alert("thêm thành công")
                        $location.path('/list-post')
                    }
                })
        } else {
            alert("Có lỗi khi nhập dữ liệu")
        }
    }


}