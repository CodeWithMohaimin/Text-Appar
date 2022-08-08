function scrollAppear() {
    let introText = document.querySelector('.introText')
    let introPosition = introText.getBoundingClientRect().left
    let screenPosition = window.innerHeight/1.3

    if (introPosition < screenPosition) {
        introText.classList.add('introAppear')
    }
    
}

window.addEventListener('scroll', scrollAppear)