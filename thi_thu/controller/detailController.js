window.detailController = function ($scope, $http, $location, $routeParams) {
    $scope.title = "Đây là trang chi tiết bài viêt"

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

}