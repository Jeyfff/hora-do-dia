function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var sadi = document.getElementById('saud')
    msg.innerHTML = ` Olá, querida! Agora são ${hora}:${minutos}. `
    if (hora >= 5 && hora < 12) {
        img.src = "fotomanha.png"
        document.body.style.backgroundColor = "yellow"
        sadi.innerHTML = ('Bom dia, Jecycleide Ramos!')

    } else if (hora >= 12 && hora < 18) {
        img.src = "fototarde.png"
        document.body.style.backgroundColor = "orange"
        sadi.innerHTML = ('Boa tarde, Jecycleide Ramos!')
        
    } else {
        img.src = "fotonoite.png"
        document.body.style.background = "#192138"
        sadi.innerHTML = ('Boa noite, Jecycleide Ramos!')
        
    }
}
