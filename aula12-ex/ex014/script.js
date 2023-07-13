function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var res = window.document.getElementById('res')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha 1.jpg'
        document.body.style.background = ' #ecdfd1'
        res.innerHTML = 'Bom Dia!'
    } else if (hora >= 12 && hora <= 18 ) {
        img.src = 'imagens/tarde 1.jpg'
        document.body.style.background = '#e1a272'
        res.innerHTML = 'Boa Tarde!'
    } else {
        img.src = 'imagens/noite 1.jpg'
        document.body.style.background = '#262b3e'
        res.innerHTML = 'Boa Noite!'
    }
}
