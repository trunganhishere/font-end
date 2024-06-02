window.indexController = function ($scope, $http) {
    $scope.title = "Đây là trang danh sách bài viết"

    const apiPosts = "http://localhost:3000/posts"

    $http.get(apiPosts)
        .then(function (response) {
            if (response.status == 200) {
                $scope.listPost = response.data
            }
        })
    $scope.deletePost = function (id) {
        let confirm = window.confirm("Có muốn xóa không")
        if (confirm) {
            $http.delete(`${apiPosts}/${id}`)
                .then(function (response) {
                    if (response.status == 200) {
                        alert("Xóa xong")
                    }
                })
        }
    }
}