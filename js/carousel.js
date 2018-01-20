!function () {
    var children = $('.tags>li')
    for (let i = 0; i < children.length; i++) {
        $(children[i]).on('click', function (y) {
            var i = $(y.currentTarget).index()
            var p = i * -940
            $('#images').css({
                transform: 'translate(' + p + 'px)'
            })
            n = i
        })
    }

    n = 0
    timerId = setInterval(() => {
        children.eq(n % 3).trigger('click')
        n += 1
    }, 3000)

    $('.tags').on('mouseenter', function () {
        window.clearInterval(timerId)
    })

    $('.tags').on('mouseleave', function () {
        timerId = setInterval(() => {
            children.eq(n % 6).trigger('click')
            n += 1
        }, 3000)
    })
}.call()


