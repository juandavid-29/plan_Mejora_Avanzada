let Biotipo = (estatura,biotipo) => {
    const altos = "altos";
    const medianos = "medianos";
    const bajos = "bajos";
    if (estatura < 1.70) {
        biotipo = bajos
    }
    else if (estatura >=1.70  && estatura < 1.80) {
        biotipo = medianos
    }
    if (estatura >= 1.80) {
        biotipo = altos
    }
    return biotipo;
}
console.log("su biotipo es: " + Biotipo(1.80));