$(document).ready(function () {

    $(".service-details").click(function () {

        let serviceId = $(this).data("service");

        $("#modalContent").html(
            "<p>Loading...</p>"
        );

        $.ajax({

            url: "service-details.html",

            type: "GET",

            success: function (response) {

                let content = $(response)
                    .find("#" + serviceId)
                    .html();

                $("#modalContent").html(content);

            },

            error: function () {

                $("#modalContent").html(
                    "<p>Unable to load service details.</p>"
                );

            }

        });

    });

});