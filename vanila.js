function scrollAppear() {
    let introText = document.querySelector('.introText')
    let introPosition = introText.getBoundingClientRect().left
    let screenPosition = window.innerHeight/1.3

    if (introPosition < screenPosition) {
        introText.classList.add('introAppear')
    }
    
}

window.addEventListener('scroll', scrollAppear)

// this is the main code and I practice at in the bottom

// function scrollAppear() {
//     let introText = document.querySelector('.introText')
//     let introPosition = introText.getBoundingClientRect().left
//     let screenPosition = window.innerHeight/1.3

//     if (introPosition < screenPosition) {
//         introText.classList.add('introAppear')
//     }
    
// }

// window.addEventListener('scroll', scrollAppear)

//another practice

// this is the main code and I practice at in the bottom

// function scrollAppear() {
//     let introText = document.querySelector('.introText')
//     let introPosition = introText.getBoundingClientRect().left
//     let screenPosition = window.innerHeight/1.3

//     if (introPosition < screenPosition) {
//         introText.classList.add('introAppear')
//     }
    
// }

// window.addEventListener('scroll', scrollAppear)