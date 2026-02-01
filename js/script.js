function activarAnimacionEnlaces() {
    const enlaces = document.querySelectorAll(".album");
    let activado = 0;

    if (!enlaces) return;
    setInterval(() => {
        activado += 1;
        if (activado > 3) activado = 0;
        enlaces.forEach((album) => {

            if (activado == 1) {
                album.className = "album animacion-color2";
            } else if (activado == 2) {
                album.className = "album animacion-color3";
            } else if (activado == 3) {
                album.className = "album animacion-color";
            }
        })
    }, 5000);
}

// function animacionImagenArtista() {
//     const contenedoresInfoGeneral = document.querySelectorAll(".contenedor-info-general");
//     const contenedorInfo = document.querySelectorAll(".info-general");
//     let activado = 0;

//     if (!contenedoresInfoGeneral) return;
//     setInterval(() => {
//         activado += 1;
//         if (activado > 2) activado = 0;
//         contenedoresInfoGeneral.forEach((contenedor) =>{

//             if (activado == 1) {
//                 contenedor.style.transform = "scale(0.95)";
//             } else if (activado == 2) {
//                 contenedor.style.transform = "scale(1.0)";
//             }
//         })
//     }, 1000);

// }