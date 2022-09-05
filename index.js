async function obtener_personajes (url_api){
    const resp = await fetch(url_api,{method: 'GET'})
    console.log(resp)
    const data =  await resp.json()
    return data.results
}


function mostrar_personajes(personajes){
    let cards = ''
    
    for (let i = 0; i < personajes.length; i++){
        cards += ` 
        
        <article id ="section_cards">
        <div class="cards">
            <img src="${personajes[i].image}" alt="">
            <div class="body-card">
                <h3 >${personajes[i].name}</h3>
                <span>${personajes[i].status}</span>
                <span>${personajes[i].species}</span>
                <span>${personajes[i].gender}</span>
                <span>${personajes[i].origin.name}</span>
            </div>
        </div>
    </article>
        
        
        ` 
    }
    document.getElementById('section_cards').innerHTML = cards
    
}

async function main(){
    let contador = prompt("Que pagina quiere ver hasta")
    const url = ` https://rickandmortyapi.com/api/character?page=${contador}` 
    const personajes = await obtener_personajes(url)
    mostrar_personajes(personajes)
}

main()




