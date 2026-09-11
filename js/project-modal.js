$(document).ready(function () {

    $(".project-details").click(function () {

        let projectId = $(this).data("project");

        $("#projectModalContent").html(
            "<p>Loading...</p>"
        );

        $.ajax({

            url: "project-details.html",

            type: "GET",

            success: function (response) {

                let content = $(response)
                    .find("#" + projectId)
                    .html();

                $("#projectModalContent").html(content);

            },

            error: function () {

                $("#projectModalContent").html(
                    "<p>Unable to load project details.</p>"
                );

            }

        });

    });

});