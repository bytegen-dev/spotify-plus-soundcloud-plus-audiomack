var desk = document.querySelector('.desktop-links-holder')
var ham = document.querySelector('.hamburger-holder')
var container = document.querySelector('.container')
var navel = document.querySelector('.nav')
var deskfoot = document.querySelector('.desktop-footer')
var sendown = document.querySelector('.senddown')

function link(){
    ham.classList.toggle('showburger')
    container.classList.toggle('move')
    desk.classList.toggle('showdesk')
    navel.classList.toggle('navel')
    deskfoot.classList.toggle('dxft')
    sendown.classList.toggle('snnd')
}


function senddown(){
    sendown.classList.toggle('snd')
    deskfoot.classList.remove('dxft')
    deskfoot.classList.toggle('dxftt')
}

function theme(){
    ham.classList.toggle('darkham')
    container.classList.toggle('darkcon')
    deskfoot.classList.toggle('dxftdark')
    desk.classList.toggle('darkdesk')
    navel.classList.toggle('darknav')
}

function lecrae(){
    // document.querySelector('.trend').toggle('playing')
    document.querySelector('.lecrae').volume = 0.3
    document.querySelector('.lecrae').play()
}

function lecraeii(){
    // document.querySelector('.trend').toggle('playing')
    document.querySelector('.lecraeii').volume = 0.3
    document.querySelector('.lecraeii').play()
}

