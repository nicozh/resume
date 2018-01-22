!function () {
  var view = document.querySelectorAll('[data-x]')

  var controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.addOffset()
      this.removeOffset()
      this.bindEvens()
      this.scrollTop()
    },
    addOffset: function () {
      let view = this.view
      for (let i = 0; i < view.length; i++) {
        view[i].classList.add('offset')
      }
    },
    removeOffset: function () {
      let specialTags = this.view
      let minIndex = 0
      for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
          minIndex = i
        }
      }
      specialTags[minIndex].classList.remove('offset')
      let id = specialTags[minIndex].id
      let a = document.querySelector('a[href="#' + id + '"]')
      let li = a.parentNode
      let brothersAndMe = li.parentNode.children
      for (let i = 0; i < brothersAndMe.length; i++) {
        brothersAndMe[i].classList.remove('bright')
      }
      li.classList.add('bright')
    },
    bindEvens: function () {
      window.onscroll = () => {
        this.removeOffset()
        this.sticky()
      }
    },
    sticky: function () {
        (window.scrollY > 0) ? topNavBar.classList.add('sticky') : topNavBar.classList.remove('sticky')
    },
   scrollTop: function () {
        setTimeout(() => {
          window.scrollTo(0, 0)
        })
      }
  }
  controller.init(view)
}()
