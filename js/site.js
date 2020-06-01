(function () {
    $(document).ready(function () {
        var $window = $(window),
            $collapse = $(".view-cost .collapse");

        if ($window.outerWidth() < 767) {
            $collapse.removeClass("show");
        }
        $window.resize(function () {
            if ($window.outerWidth() < 767) {
                $collapse.removeClass("show");
            } else if (!$collapse.hasClass("show")) {
                $collapse.addClass("show");
            }
        });

        $('a[href^="#"].link-anchor').click(function () {
            elementClick = $(this).attr("href").split("#");
            destination = $("a[name=" + elementClick[1] + "]").offset().top;
            $("html, body").animate(
                {
                    scrollTop: destination,
                },
                800
            );
            return false;
        });
    });
})();
