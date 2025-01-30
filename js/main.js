// Valores base de las variables
const valorTipoPedido = 4;
const valorPais = 2;
const valorDivision = 1;
const valorERetailer = 1;
const valorPrioridadRequester = 2;

// Opciones para cada variable
const opcionesTipoPedido = {
    "Correction": 4,
    "IP Rights/Legal": 4,
    "HERO PDP Creation": 4,
    "Eventing (ESIS)": 4,
    "ESIS Creation": 3,
    "HERO PDP Maintenance": 3,
    "ESIS Maintenance": 3,
    "Product Maintenance": 2,
    "Analytics": 1,
    "Question/Consult for validation": 1
};

const opcionesPais = {
    "Mexico": 2,
    "Brazil": 2,
    "CERAN": 1,
    "Chile": 1,
    "Argentina": 0.5,
    "Uruguay": 0.5
};

const opcionesDivision = {
    "Luxe": 1,
    "CPD": 1,
    "LDB": 0.5,
    "PPD": 0.5
};

const opcionesERetailer = {
    "Top 3 e-retailers": 1,
    "All other e-retailers": 0.5
};

const opcionesPrioridadRequester = {
    "High/Highest": 2,
    "Medium": 1,
    "Low/Lowest/unprioritized": 0
};

// Función para calcular el puntaje total
function calcularPuntaje(tipoPedido, pais, division, eRetailer, prioridadRequester) {
    const puntajeTipoPedido = valorTipoPedido * opcionesTipoPedido[tipoPedido];
    const puntajePais = valorPais * opcionesPais[pais];
    const puntajeDivision = valorDivision * opcionesDivision[division];
    const puntajeERetailer = valorERetailer * opcionesERetailer[eRetailer];
    const puntajePrioridadRequester = valorPrioridadRequester * opcionesPrioridadRequester[prioridadRequester];

    return puntajeTipoPedido + puntajePais + puntajeDivision + puntajeERetailer + puntajePrioridadRequester;
}

// Función para determinar el nivel de prioridad
function determinarNivelPrioridad(puntaje) {
    if (puntaje >= 25) {
        return "L1 - Critical";
    } else if (puntaje >= 18 && puntaje <= 24) {
        return "L2 - High Impact";
    } else if (puntaje >= 10 && puntaje <= 17) {
        return "L3 - Medium Risk";
    } else {
        return "L4 - Continuous Improvement";
    }
}

// Evento para calcular la prioridad
document.getElementById("calcular").addEventListener("click", function () {
    const tipoPedidoSeleccionado = document.getElementById("tipoPedido").value;
    const paisSeleccionado = document.getElementById("pais").value;
    const divisionSeleccionada = document.getElementById("division").value;
    const eRetailerSeleccionado = document.getElementById("eRetailer").value;
    const prioridadRequesterSeleccionada = document.getElementById("prioridadRequester").value;
    
    // Valida que todas las opciones estén seleccionadas
    if (!tipoPedidoSeleccionado || !paisSeleccionado || !divisionSeleccionada || !eRetailerSeleccionado || !prioridadRequesterSeleccionada) {
        document.getElementById("resultado").textContent = "Por favor, seleccioná una opción en todos los campos.";
        return; // Detiene la ejecución si falta seleccionar alguna opción
    }

    const puntaje = calcularPuntaje(
        tipoPedidoSeleccionado,
        paisSeleccionado,
        divisionSeleccionada,
        eRetailerSeleccionado,
        prioridadRequesterSeleccionada
    );

    const nivelPrioridad = determinarNivelPrioridad(puntaje);

    document.getElementById("resultado").textContent = `El puntaje calculado es: ${puntaje}. Nivel de prioridad: ${nivelPrioridad}`;

    // Guardar selecciones en localStorage
    localStorage.setItem("ultimoTipoPedido", tipoPedidoSeleccionado);
    localStorage.setItem("ultimoPais", paisSeleccionado);
    localStorage.setItem("ultimaDivision", divisionSeleccionada);
    localStorage.setItem("ultimoERetailer", eRetailerSeleccionado);
    localStorage.setItem("ultimaPrioridadRequester", prioridadRequesterSeleccionada);
});

document.addEventListener("DOMContentLoaded", function () {
    //Forzar la selección de "Seleccionar una opción" en todos los dropdowns al cargar la página
    document.getElementById("tipoPedido").value = "";
    document.getElementById("pais").value = "";
    document.getElementById("division").value = "";
    document.getElementById("eRetailer").value = "";
    document.getElementById("prioridadRequester").value = "";

    //Cargar última selección guardada (si existe)
    const ultimoTipoPedido = localStorage.getItem("ultimoTipoPedido");
    const ultimoPais = localStorage.getItem("ultimoPais");
    const ultimaDivision = localStorage.getItem("ultimaDivision");
    const ultimoERetailer = localStorage.getItem("ultimoERetailer");
    const ultimaPrioridadRequester = localStorage.getItem("ultimaPrioridadRequester");

    if (ultimoTipoPedido) document.getElementById("tipoPedido").value = ultimoTipoPedido;
    if (ultimoPais) document.getElementById("pais").value = ultimoPais;
    if (ultimaDivision) document.getElementById("division").value = ultimaDivision;
    if (ultimoERetailer) document.getElementById("eRetailer").value = ultimoERetailer;
    if (ultimaPrioridadRequester) document.getElementById("prioridadRequester").value = ultimaPrioridadRequester;
});