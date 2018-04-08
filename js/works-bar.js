
//作品集下面的导航条高亮

!function () {
    let tags = document.querySelector('.tags')
    tags.addEventListener('click', (e) => {
        let dataV = e.target.getAttribute("data-v")
        portfolioBar.className = `Bar ${dataV}`
    })
}()


