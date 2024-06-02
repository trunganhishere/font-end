window.updateController = function ($scope, $http, $location, $routeParams) {
    $scope.title = "Đây là trang sửa bài viêt"

    const apiPosts = "http://localhost:3000/posts"
    let idPost = $routeParams.id;

    $http.get(`${apiPosts}/${idPost}`)
        .then(function (response) {
            if (response.status == 200) {
                let date = new Date(response.data.ngay_dang)
                $scope.post = {
                    tieu_de: response.data.tieu_de,
                    noi_dung: response.data.noi_dung,
                    tac_gia: response.data.tac_gia,
                    the_loai: response.data.the_loai,
                    ngay_dang: date,
                }
            }
        })

    $scope.updatePost = function () {
        let formatDate = $scope.post.ngay_dang.toISOString().split('T')[0];
        let newPost = {
            tieu_de: $scope.post.tieu_de,
            noi_dung: $scope.post.noi_dung,
            tac_gia: $scope.post.tac_gia,
            the_loai: $scope.post.the_loai,
            ngay_dang: formatDate,
        }
        // console.log(newPost);
        $http.put(`${apiPosts}/${idPost}`, newPost)
            .then(function (response) {
                if (response.status == 200) {
                    alert("sửa thành công")
                    $location.path('/list-post')
                }
            })
    }
}