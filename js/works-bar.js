
//作品集下面的导航条高亮

!function () {
    let all = document.getElementById('all')
    let framework = document.getElementById('framework')
    let vallina = document.getElementById('vallina')
    all.onclick = function () {
        portfolioBar.className = 'Bar state-1'
    }
    framework.onclick = function () {
        portfolioBar.className = 'Bar state-2'
    }
    vallina.onclick = function () {
        portfolioBar.className = 'Bar state-3'
    }
}()


