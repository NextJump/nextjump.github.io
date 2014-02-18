
window.onscroll = (function initScrollManager() {
    var shown = 10;
    var loading = false;
    var offset_t = 100;
    var numMore = 10;

    var shouldLoadMore = function() {
        if (loading) return false;
        return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
    };

    var animateCardAppearance = function(id) {
        elem = $('#'+id);
        var opts = {} ;
        var dir = '';
        var seed = Math.random();

        if      (seed < .25) dir = 'left';
        else if (seed < .50) dir = 'right';
        else if (seed < .75) dir = 'top';
        else                 dir = 'bottom';

        opts[dir] = '+=70px';
        elem.css({opacity: 0.0, display: "block"}).animate(opts, 0);
        opts[dir] = '-=70px';
        opts.opacity = 1;
        elem.animate(opts, 200);
    };

    var showCards = function(more) {
        loading = true;

        var newCount = shown + more;
        var ioffset = 0;
        for (var i = shown+1; i <= newCount; i++, ioffset++) {
            window.setTimeout(animateCardAppearance, ioffset*offset_t, 'post-'+i);
        }
        window.setTimeout(function() {
            loading = false;

            // if they're already scrolled down, don't get stuck
            if (shouldLoadMore()) {
                showCards(numMore);
            }
        }, ioffset*offset_t);
        shown = newCount;
    };

    return function() {
        if (shouldLoadMore()) {
            showCards(numMore);
        }
    };
}());

