const switcher = document.querySelector('#checkbox')
const body = document.querySelector('body')


if (localStorage.dark === 'true'){
    switchTheme()
    switcher.checked = true
}

function switchTheme(){
     body.classList.toggle('theme')
     if (document.querySelector('body.theme')){
        localStorage.dark = 'true'
     } else {
        localStorage.dark = 'false'
     }
}

switcher.addEventListener('change', switchTheme)