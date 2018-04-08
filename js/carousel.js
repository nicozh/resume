!function () {
    var view = {
        tags: $('.tags,#images'),
        li: $('.tags>li'),
        images: $('#images')
    }
    controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            var children = this.view.li
            var tags = this.view.tags
            var images = this.view.images
            var n = 0
            for (let i = 0; i < children.length; i++) {
                $(children[i]).on('click', (y) => {
                    var i = $(y.currentTarget).index()
                    var p = i * -940
                    images.css(
                        // transform: 'translate(' + p + 'px)'
                        `margin-left`, `${p}`+`px`
                    )
                    n = i
                })
            }
            this.setTimer(n)
            tags.on('mouseenter', () => {
                this.clearTimer()
            })
            tags.on('mouseleave', () => {
                this.setTimer(n)
            })
        },
        setTimer: function (n) {
            var children = this.view.li
            timerId = setInterval(() => {
                children.eq(n % 5).trigger('click')
                n += 1
            }, 3000)
        },
        clearTimer: function () {
            window.clearInterval(timerId)
        }
    }
    controller.init(view)
}()



