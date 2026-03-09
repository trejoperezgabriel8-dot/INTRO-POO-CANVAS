# 🎨 Introducción a Canvas 2D con Programación Orientada a Objetos

Nombre: Gabriel Trejo Pérez
Materia: Graficación
Docente: ING Victor Pinedo 

## 📌 Descripción del Proyecto

Esta aplicación web demuestra el uso de **Canvas 2D en JavaScript** utilizando **Programación Orientada a Objetos (OOP)** para crear y renderizar objetos gráficos.

El sistema genera diferentes tipos de círculos dentro de elementos `<canvas>`:

* Un **círculo fijo creado mediante una clase**
* Un **círculo generado aleatoriamente**
* **Múltiples círculos con propiedades aleatorias**

La aplicación también controla que los círculos **no se salgan de los límites del canvas**, considerando el **radio y el grosor de la línea**, lo que garantiza un renderizado correcto.

Además, la interfaz se diseñó utilizando **Bootstrap 5 y CSS personalizado**, logrando una página **moderna, responsiva y organizada**.

---

# 🧠 Tecnologías Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (ES6)**
* **Canvas API**
* **Programación Orientada a Objetos (OOP)**
* **Bootstrap 5**

---

# 🖥️ Funcionalidad de la Aplicación

La aplicación contiene **tres áreas principales de dibujo**:

## 1️⃣ Objeto 2D (Canvas OOP)

Se genera un círculo utilizando una **instancia de la clase `Circle`**.

Características:

* Posición centrada
* Color de borde personalizado
* Color de relleno
* Texto en el centro

Esto demuestra el uso básico de **objetos y métodos en JavaScript**.

---

## 2️⃣ Objeto con Random

En este canvas se genera un círculo con propiedades aleatorias:

* Posición aleatoria
* Radio aleatorio
* Se asegura que **el círculo no salga del canvas**
* Se considera el **grosor de la línea**

Para evitar errores de renderizado se calcula un **margen seguro**:

```
margin = radio + (lineWidth / 2)
```

---

## 3️⃣ Múltiples Objetos

En esta sección se generan **varios círculos automáticamente mediante un ciclo `for`**.

Cada círculo tiene:

* Radio aleatorio
* Posición aleatoria segura
* Color de borde aleatorio
* Color de relleno aleatorio
* Color de texto aleatorio

Los círculos se almacenan en un **arreglo (`arrayCircle`)**, permitiendo manipular múltiples objetos en memoria.

---

# 🏗️ Arquitectura del Código

## Clase `Circle`

La aplicación utiliza una clase llamada `Circle` para representar cada objeto gráfico.

### Constructor

```
constructor(x, y, radius, color, text, backcolor, textcolor)
```

Parámetros:

| Parámetro | Descripción              |
| --------- | ------------------------ |
| x         | Posición horizontal      |
| y         | Posición vertical        |
| radius    | Radio del círculo        |
| color     | Color del borde          |
| text      | Texto dentro del círculo |
| backcolor | Color de relleno         |
| textcolor | Color del texto          |

---

### Método `draw()`

Este método se encarga de renderizar el círculo en el canvas:

1. Dibujar el círculo
2. Aplicar el color de relleno
3. Dibujar el borde
4. Renderizar el texto centrado

---

# 📂 Estructura del Proyecto

```
/proyecto-canvas
│
├── index.html
│
├── assets
│   │
│   ├── css
│   │   └── style.css
│   │
│   ├── js
│   │   └── main.js
│   │
│   └── img
│       └── icons8-cifras-50.png
│
└── README.md
```

---

# 🚀 Cómo Ejecutar el Proyecto

1. Descargar o clonar el repositorio
2. Abrir la carpeta del proyecto
3. Ejecutar el archivo:

```
index.html
```

La aplicación se ejecuta directamente en el navegador.

No requiere instalación de dependencias.

---

# 📱 Diseño Responsivo

La interfaz fue diseñada utilizando **Bootstrap 5**, lo que permite que la aplicación sea adaptable a diferentes dispositivos:

* Computadoras
* Tablets
* Dispositivos móviles

Los canvas se organizan en **tarjetas responsivas** utilizando el sistema de **grid de Bootstrap**.

---

# 👨‍💻 Información del Desarrollador

**Nombre:** Gabriel Trejo Pérez
**Materia:** Graficación
**Tecnología:** Canvas 2D + JavaScript
**Tipo de Proyecto:** Aplicación Web Educativa

---

# 📚 Objetivo Académico

El objetivo de este proyecto es comprender:

* Uso de **Canvas API**
* Implementación de **Programación Orientada a Objetos en JavaScript**
* Generación de gráficos dinámicos
* Manejo de posiciones aleatorias en un sistema gráfico
* Integración de **frontend moderno con Bootstrap**

---

# ✨ Posibles Mejoras Futuras

* Animación de círculos
* Detección de colisiones
* Interacción con el mouse
* Generación dinámica de objetos
* Sistema de física simple (rebotes)

---

# 📜 Licencia

Este proyecto fue desarrollado con fines **educativos y académicos**.
