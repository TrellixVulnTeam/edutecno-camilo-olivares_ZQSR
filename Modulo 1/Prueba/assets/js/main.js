(function typeForm() {
    var qs,
        js,
        q,
        s,
        d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = "typef_orm",
        b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
        js = ce.call(d, "script");
        js.id = id;
        js.src = b + "embed.js";
        q = gt.call(d, "script")[0];
        q.parentNode.insertBefore(js, q);
    }
})();



$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
    $('#carouselExampleControls').carousel({
        pause: true,
        interval: false
    });
});