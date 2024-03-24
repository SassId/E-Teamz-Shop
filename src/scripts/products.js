function toggleSection() {
    let section = document.getElementById('hidden-prod1');
    if (section.style.display == 'none') {
        section.style.display = 'block'
    } else {
        section.style.display = 'none'
    }
}

// const hiddenSection = document.getElementById('hidden-prod1');
// console.log(hiddenSection);
// hiddenSection.addEventListener('click', (event) => {
//     if (event.target.style.display == 'none') {
//         event.target.style.display = 'block'
//     } else {
//         event.target.style.display = 'none'
//     }
// })