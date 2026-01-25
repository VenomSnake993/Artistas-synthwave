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
    }, 2000);
}