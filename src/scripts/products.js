const hiddenSection = document.getElementById('hidden-prod1');
console.log(hiddenSection);
const prod = document.querySelector('.prod');
console.log(prod);

prod.addEventListener('click', () => {
    if (hiddenSection.style.display == 'none') {
        hiddenSection.style.display = 'block'
    } else {
        hiddenSection.style.display = 'none'
    }
})

.addEventListener('click', () => {
    if (hiddenSection.style.display == 'block') {
        hiddenSection.style.display = 'none'
    }
})
