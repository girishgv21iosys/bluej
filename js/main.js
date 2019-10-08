$(document).ready(function () {
    $('.nav-logo').after('<div class="mobile-trigger"><i></i></div>');
    $('.mobile-trigger').click(function () {
        $('.mobile-trigger i').toggleClass("changed");
        $('.nav-items').toggleClass("changed");
    });
});


























