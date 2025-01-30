# Simulador de Prioridad de Pedidos

## Descripción
Este simulador fue diseñado para reflejar un proceso nuevo implementado en mi trabajo como Project Manager, donde calculo el nivel de prioridad de los pedidos enviados por los clientes. Para esta entrega, simplifiqué la lógica a dos variables, aunque mi intención es expandirlo a cinco variables en el futuro.

## Funcionamiento
El simulador funciona como una calculadora de prioridad basada en dos variables:
- **Tipo de Pedido**: Determina la naturaleza del trabajo solicitado.
- **País**: Indica el mercado desde el cual proviene el pedido.

Ambas variables tienen un valor base que se multiplica por el valor de la opción seleccionada para obtener un puntaje final.

## Variables y Opciones

### Tipo de Pedido (valor base: 4)
Opciones:
- **Corrección**: 4
- **Mantenimiento del Hero**: 3
- **Mantenimiento del Producto**: 2
- **Pregunta**: 1

### País (valor base: 2)
Opciones:
- **México**: 2
- **Chile**: 1
- **Argentina**: 0.5

## Fórmula de Cálculo
La fórmula utilizada para calcular el puntaje es:
(Tipo de Pedido * Opción de Pedido) + (País * Opción de País)

### Ejemplo
Si el pedido es de **Mantenimiento del Hero** y proviene de **México**:
Cálculo: (4 × 3) + (2 × 2) = 12 + 4 = 16
Resultado: Puntaje 16.

## Clasificación de Resultados
El sistema clasifica los resultados en tres niveles:
- **L1 (Critical)**: Puntaje entre 14 y 20.
- **L2 (Medium)**: Puntaje entre 7 y 13.
- **L3 (Low)**: Puntaje menor o igual a 6.

---

## Cómo Usar
1. Selecciona el **Tipo de Pedido** y el **País** en el simulador.
2. El sistema calculará automáticamente el puntaje de prioridad.
3. Revisa el nivel de prioridad asignado según el puntaje obtenido.

---

## Tecnologías Utilizadas
- HTML, CSS, JavaScript.



## Descripción
Este simulador fue diseñado para reflejar un proceso nuevo implementado en mi trabajo como Project Manager, donde calculo el nivel de prioridad de los pedidos enviados por los clientes.

## Funcionamiento
El simulador funciona como una calculadora de prioridad basada en dos variables:
- **Tipo de Pedido**: Determina la naturaleza del trabajo solicitado.
- **País**: Indica el mercado desde el cual proviene el pedido.
- **División**: Indica la división de la que proviene el pedido.
- **E-Retailer**: Indica el retailer involucrado.
- **Prioridad del Requester**: la prioridad que le da el referente que envía el pedido.

Todas las variables tienen un valor base que se multiplica por el valor de la opción seleccionada para obtener un puntaje final.


## Variables y Opciones

### Tipo de Pedido (valor base: 4)
Opciones:
- **Correction**: 4
- **IP Rights/Legal**: 4
- **HERO PDP Creation**: 4
- **Eventing (ESIS)**: 4
- **ESIS Creation**: 3
- **HERO PDP Maintenance**: 3
- **ESIS Maintenance**: 3
- **Product Maintenance**: 2
- **Analytics**: 1
- **Question/Consult for validation**: 1

### País (valor base: 2)
Opciones:
- **Mexico**: 2
- **Brazil**: 2
- **CERAN**: 1
- **Chile**: 1
- **Argentina**: 0.5
- **Uruguay**: 0.5

### División (valor base: 1)
Opciones:
- **Luxe**: 1
- **CPD**: 1
- **LDB**: 0.5
- **PPD**: 0.5

### E-retailer (valor base: 1)
Opciones:
- **Top 3 e-retailers**: 1
- **All other e-retailers**: 0.5

### Prioridad del Requester (valor base: 1)
Opciones:
- **High/Highest**: 2
- **Medium**: 1
- **Low/Lowest/unprioritized**: 0


## Fórmula de Cálculo
La fórmula utilizada para calcular el puntaje es:
(Tipo de Pedido * Opción de Pedido) + (País * Opción de País) + (División * Opción de División) + (E-retailer * Opción de E-retailer) + (Prioridad del Requester * Opción de Propridad del Requester)

### Ejemplo
Si se selecciona: **Mantenimiento del Hero**, **México**, **PPD**, **Top 3 e-retailers**, **Medium**:
Cálculo: (4 * 3) + (2 * 2) + (1 * 0.5) + (1 * 1) + (1 * 1) => 12 + 4 + 0.5 + 1 + 1 = 18.5 
Resultado: Puntaje 18.5 


## Clasificación de Resultados
El sistema clasifica los resultados en tres niveles:
- **L1 (Critical)**: Puntaje igual o mayor a 25
- **L2 (High Impact)**: Puntaje entre 18 y 24.
- **L3 (Medium Risk)**: Puntaje entre 10 y 17.
- **L4 (Continuous Improvement)**: Puntaje igual o menor a 9.

---

## Cómo Usar
1. Selecciona el **Tipo de Pedido**, el **País**, **División**, **E-retailer** y **Prioridad del Requester** en el simulador.
2. El sistema calculará automáticamente el puntaje de prioridad.
3. Revisa el nivel de prioridad asignado según el puntaje obtenido.
