$(".navbar").load("./includes/navbar.html");
$(".footer").load("./includes/footer.html");

$(function() {
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});