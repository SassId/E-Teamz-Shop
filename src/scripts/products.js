const hiddenSection1 = document.getElementById('hidden-prod1');
console.log(hiddenSection1);
const details1 = document.getElementById('details1');

details1.addEventListener('click', () => {
    if (hiddenSection1.style.display == 'none') {
        hiddenSection1.style.display = 'block'
    } else {
        hiddenSection1.style.display = 'none'
    }
})