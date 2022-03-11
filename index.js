function carregar() {
    var msg = document.getElementById('ola')
    var img = document.getElementById('foto')
    
    var data = new Date()
    var hours = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    
    document.getElementById('horas').textContent = hours + ":" + min + ":" + sec;

    if (hours >= 0 && hours < 12) {
        // bom dia
        img.src = "manha.jpg"
        msg.innerHTML = "BOM DIA!"
        
    } else if (hours >= 12 && hours < 18 ) {
        // boa tarde
        img.src = "tarde.jpg"
        msg.innerHTML = "BOA TARDE!"

    } else {
        // boa noite
        img.src = "noite.jpg"
        msg.innerHTML = "BOA NOITE!"

    }   
}

function arrumandoHoras() {
    if (numero <10 ) {
        numero = '0'+ numero
    }
}

carregar();
setInterval(carregar, 1000)