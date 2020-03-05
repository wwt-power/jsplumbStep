var pagedata = 1;
$.extend({
    zkcontrol: function (id, url, entity) {
        $.ajax({
            url: url,
            data: null,
            type: "GET",
            contentType: "html",
            success: function (result) {
                pagedata = entity;
                $(id).html("");
                $(id).html(result);
            },
            error: function (result) {
                alert(result.statusText);
            }
        });
    }
});

