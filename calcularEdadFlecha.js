let calcular_edad = (dia_nacim, mes_nacim, año_nacim) => {
    let fecha_hoy = new Date();
    let año = fecha_hoy.getYear();
    let mes = fecha_hoy.getMonth();
    let dia = fecha_hoy.getDate();
    let edad = (año + 1900) - año_nacim;
    if (mes < (mes_nacim - 1)) {
        edad--;
    }
    if (((mes_nacim - 1) == mes) && (dia < dia_nacim)) {
        edad--;
    }
    if (edad > 1900) {
        edad -= 1900;
    }
    return edad;
}
console.log("Ella tiene " + calcular_edad(26, 09, 1995) + " años de edad");