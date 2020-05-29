// 自行加入的JS請寫在這裡
$(function() {
    //
    $modal = $('.modal-frame');
    $overlay = $('.modal-overlay');
    /* Need this to clear out the keyframe classes so they dont clash with each other between ener/leave. Cheers. */
    $modal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        if ($modal.hasClass('state-leave')) {
            $modal.removeClass('state-leave');
        }
    });
    $('.modal .close').on('click', function(e) {
        $overlay.removeClass('state-show');
        $modal.removeClass('state-appear').addClass('state-leave');
        e.preventDefault();
    });
    $('.addLibrary a').on('click', function(e) {
        $overlay.addClass('state-show');
        $modal.removeClass('state-leave').addClass('state-appear');
        e.preventDefault();
    });
    // 促銷banner
    $('.mpSlider').slick({
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    // first init
    if ($('.int').length > 0) {
        // $('.int').focus();
        $('.int').blur(function() {
            if (!$(this).val()) {
                $(this).attr('placeholder', '請輸入書目關鍵字');
                $(this).siblings('.i_close').hide();
            } else {
                $(this).siblings('.i_close').show();
            }
        });
        $('.i_close').click(function(e) {
            $('.int').val('').attr('placeholder', '請輸入書目關鍵字');
            e.preventDefault();
        });
        $('.keyword').find('a').each(function(index, el) {
            $(this).off().click(function(e) {
                var thisText = $(this).text();
                $('.int').val(thisText);
                $('.int').siblings('.i_close').show();
                e.preventDefault();
            });
        });
    }
    //----------------------------------------------------------版頭-----//
    var dropdownStatus = false;
    $('.dropdown-btn').each(function(index, el) {
        $(this).click(function(e) {
            $(this).siblings('.dropdown-content').toggleClass('show');
            dropdownStatus = true;
            $(this).blur();
            e.preventDefault();
        });
    });
    $(document).mouseup(function(e) {
        var target = e.target,
            container = $('.dropdown-content');
        if ((!container.is(e.target) && container.has(e.target).length === 0) && (!$('.dropdown-btn').is(e.target) || !$('.btn-dropdown').is(e.target))) {
            container.removeClass('show');
            dropdownStatus = false;
        }
    });
    //----------------------------------------------------------ripple-----//
    var links = document.querySelectorAll('.btn');
    for (var i = 0, len = links.length; i < len; i++) {
        links[i].addEventListener('click', function(e) {
            var targetEl = e.target;
            var inkEl = targetEl.querySelector('.ink');
            if (inkEl) {
                inkEl.classList.remove('animate');
            } else {
                inkEl = document.createElement('span');
                inkEl.classList.add('ink');
                inkEl.style.width = inkEl.style.height = Math.max(targetEl.offsetWidth, targetEl.offsetHeight) + 'px';
                targetEl.appendChild(inkEl);
            }
            inkEl.style.left = (e.offsetX - inkEl.offsetWidth / 2) + 'px';
            inkEl.style.top = (e.offsetY - inkEl.offsetHeight / 2) + 'px';
            inkEl.classList.add('animate');
        }, false);
    }
    // cp_slider
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });
    // $('.cp_slider').slickLightbox({
    //     caption: 'caption',
    //     lazyLoad: 'ondemand',
    //     useHistoryApi: 'true',
    //     ease: 'ease',
    //     lazy: true
    // });
});
