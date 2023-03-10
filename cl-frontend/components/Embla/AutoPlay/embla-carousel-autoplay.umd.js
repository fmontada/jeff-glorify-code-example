!(function (n, e) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = e())
        : 'function' == typeof define && define.amd
        ? define(e)
        : ((n =
              'undefined' != typeof globalThis
                  ? globalThis
                  : n || self).EmblaCarouselAutoplay = e());
})(this, function () {
    'use strict';
    var n = {
        delay: 4e3,
        playOnInit: !0,
        stopOnInteraction: !0,
        stopOnMouseEnter: !1,
        stopOnLastSnap: !1,
    };
    function e(t, o) {
        var i,
            a = Object.assign({}, n, e.globalOptions, t),
            r = a.playOnInit,
            s = a.stopOnInteraction,
            d = a.stopOnMouseEnter,
            l = a.stopOnLastSnap,
            u = a.delay,
            p = s ? c : m,
            f = 0;
        function c() {
            i.off('pointerDown', p), s || i.off('pointerUp', O), m(), (f = 0);
        }
        function y() {
            m(), (f = window.setTimeout(g, u));
        }
        function m() {
            f && window.clearTimeout(f);
        }
        function O() {
            f && (m(), y());
        }
        function g() {
            var n = i.internalEngine().index;
            if (l && n.get() === n.max) return c();
            i.canScrollNext() ? i.scrollNext() : i.scrollTo(0), y();
        }
        return {
            name: 'Autoplay',
            options: a,
            init: function (n) {
                var e = (i = n).internalEngine().eventStore,
                    t = i.rootNode(),
                    a = (o && o(t)) || t;
                i.on('pointerDown', p),
                    s || i.on('pointerUp', O),
                    d &&
                        (e.add(a, 'mouseenter', p),
                        s || e.add(a, 'mouseleave', O)),
                    e.add(document, 'visibilitychange', function () {
                        if ('hidden' === document.visibilityState) return m();
                        O();
                    }),
                    e.add(window, 'pagehide', function (n) {
                        n.persisted && m();
                    }),
                    r && y();
            },
            destroy: c,
            play: y,
            stop: m,
            reset: O,
        };
    }
    return (e.globalOptions = void 0), e;
});
