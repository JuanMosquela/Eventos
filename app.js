const cards = document.querySelectorAll('.card')
console.log(cards)

document.addEventListener('keyup', (e) => {
    if(e.target.matches('.filter')){
        document.querySelectorAll('.card').forEach(card => {
            if(card.textContent.toLocaleLowerCase().includes(e.target.value)){
                card.classList.remove('hidden')
            }else{
                card.classList.add('hidden')

            }

        })
        
        
    }
})