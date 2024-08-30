// J-Query

//window Scroll
$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 80) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header')
    }
})


document.addEventListener("click", function (e) {
    if(e.target.classList.contains("gallery-item")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        var myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})