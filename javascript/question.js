// Array de preguntas agrupadas por categoría (25 preguntas cada una)
    const questions = [
        {
        category: "programming",
        questions: [
            {
            question: "¿Qué significan las siglas HTML?",
            options: ["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
            correctAnswer: 1,
            },
            {
            question: "¿Cuál de las siguientes es una forma correcta de declarar una variable en JavaScript?",
            options: ["var x = 10;", "variable x = 10;", "int x = 10;", "let 10 = x;"],
            correctAnswer: 0,
            },
            {
            question: "¿Cómo se escribe un comentario en Python?",
            options: ["// Esto es un comentario", "# Esto es un comentario", "/* Esto es un comentario */", "<!-- Esto es un comentario -->"],
            correctAnswer: 1,
            },
            {
            question: "¿Qué significan las siglas CSS?",
            options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Simple Sheets"],
            correctAnswer: 0,
            },
            {
            question: "¿Cómo se crea una función en JavaScript?",
            options: ["create function myFunction()", "def function myFunction()", "func myFunction()", "function myFunction()"],
            correctAnswer: 3,
            },
            {
            question: "¿Qué hace el operador 'typeof' en JavaScript?",
            options: ["Verifica el tipo de una variable", "Declara una variable", "Asigna un valor a una variable", "Convierte una variable a otro tipo"],
            correctAnswer: 0,
            },
            {
            question: "¿Cómo se define una función en C?",
            options: ["function myFunction()", "def myFunction()", "void myFunction()", "func myFunction()"],
            correctAnswer: 2,
            },
            {
            question: "¿Cuál de las siguientes es una característica de Python?",
            options: ["Lenguaje compilado", "Tipado dinámico", "Lenguaje de bajo nivel", "Tipado estático"],
            correctAnswer: 1,
            },
            {
            question: "¿Qué lenguaje se utiliza para el desarrollo de Android?",
            options: ["Python", "Java", "JavaScript", "C++"],
            correctAnswer: 1,
            },
            {
            question: "¿Cuál es el propósito del método 'forEach()' en JavaScript?",
            options: ["Elimina elementos duplicados de un array", "Filtra elementos de un array", "Ordena un array", "Itera sobre cada elemento de un array"],
            correctAnswer: 3,
            },
            {
            question: "¿Qué hace la palabra clave 'return' en una función?",
            options: ["Termina la función y devuelve un valor", "Continúa la función", "Sale de la función sin valor", "Finaliza la ejecución del programa"],
            correctAnswer: 0,
            },
            {
            question: "¿Cuál de los siguientes NO es un elemento semántico de HTML?",
            options: ["<header>", "<footer>", "<div>", "<article>"],
            correctAnswer: 2,
            },
            {
            question: "¿Cuál es el propósito principal de un bucle 'for' en programación?",
            options: ["Repetir el código un número específico de veces", "Repetir el código hasta que una condición sea verdadera", "Definir una función", "Evaluar condiciones en el bucle"],
            correctAnswer: 0,
            },
            {
            question: "¿Qué estructura de datos es ideal para LIFO (Last In First Out)?",
            options: ["Cola", "Pila (Stack)", "Lista enlazada", "Array"],
            correctAnswer: 1,
            },
            {
            question: "¿Qué comando se usa en Git para guardar cambios en el repositorio?",
            options: ["git commit", "git push", "git pull", "git add"],
            correctAnswer: 0,
            },
            {
            question: "¿Qué hace la función 'map()' en JavaScript?",
            options: ["Ordena un array", "Filtra elementos", "Crea un nuevo array", "Modifica el array original"],
            correctAnswer: 2,
            },
            {
            question: "¿Qué es un IDE?",
            options: ["Un Entorno de Desarrollo Integrado", "Una función para ejecutar código", "Un intérprete", "Un método de entrada para escribir código"],
            correctAnswer: 0,
            },
            {
            question: "¿Cuál de las siguientes es una característica de la programación orientada a objetos?",
            options: ["Encapsulamiento", "Modularidad", "Recursión", "Gestión de memoria"],
            correctAnswer: 0,
            },
            {
            question: "¿Qué significan las siglas SQL?",
            options: ["Simple Question Language", "Systematic Query Language", "Standard Question Language", "Structured Query Language"],
            correctAnswer: 3,
            },
            {
            question: "¿Cuál de estos es un ejemplo de base de datos no relacional?",
            options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
            correctAnswer: 0,
            },
            {
            question: "¿Cómo se escribe un comentario en CSS?",
            options: ["// Esto es un comentario", "/* Esto es un comentario */", "# Esto es un comentario", "<!-- Esto es un comentario -->"],
            correctAnswer: 1,
            },
            {
            question: "¿Cuál de los siguientes algoritmos se utiliza para ordenar un array comparando elementos?",
            options: ["Ordenamiento burbuja (Bubble sort)", "Ordenamiento por inserción (Insertion sort)", "Ordenamiento rápido (Quick sort)", "Ordenamiento por mezcla (Merge sort)"],
            correctAnswer: 0,
            },
            {
            question: "¿Qué hace el bloque 'finally' en Java?",
            options: ["Maneja todas las excepciones", "Intenta manejar excepciones de tiempo de ejecución", "Ejecuta código después de try-catch", "Define el punto de inicio de ejecución"],
            correctAnswer: 2,
            },
            {
            question: "¿Qué estructura de datos es mejor para buscar elementos rápidamente?",
            options: ["Árbol binario de búsqueda", "Array", "Lista enlazada", "Cola"],
            correctAnswer: 0,
            },
            {
            question: "¿Cuál es la sintaxis correcta para una sentencia if en JavaScript?",
            options: ["if (condición) {}", "if condición {}", "if {} else", "if {condición}"],
            correctAnswer: 0,
            },
        ],
        },
        {
            category: "geography",
            questions: [
            {
                question: "¿Cuál es el país más grande del mundo por superficie?",
                options: ["Canadá", "China", "Rusia", "Estados Unidos"],
                correctAnswer: 2,
            },
            {
                question: "¿Cuál es el río más largo del mundo?",
                options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
                correctAnswer: 1,
            },
            {
                question: "¿Cuántos continentes hay en la Tierra?",
                options: ["5", "6", "7", "8"],
                correctAnswer: 2,
            },
            {
                question: "¿En qué continente se encuentra Egipto?",
                options: ["Asia", "África", "Europa", "Oceanía"],
                correctAnswer: 1,
            },
            {
                question: "¿Cuál es la capital de Australia?",
                options: ["Sídney", "Melbourne", "Canberra", "Perth"],
                correctAnswer: 2,
            },
            {
                question: "¿Cuál es la montaña más alta del mundo?",
                options: ["K2", "Everest", "Kangchenjunga", "Makalu"],
                correctAnswer: 1,
            },
            {
                question: "¿Qué océano es el más grande?",
                options: ["Atlántico", "Índico", "Ártico", "Pacífico"],
                correctAnswer: 3,
            },
            {
                question: "¿Cuál es el desierto más grande del mundo?",
                options: ["Sahara", "Gobi", "Antártida", "Desierto de Arabia"],
                correctAnswer: 2,
            },
            {
                question: "¿Cuál es la capital de Japón?",
                options: ["Kioto", "Tokio", "Osaka", "Nagoya"],
                correctAnswer: 1,
            },
            {
                question: "¿En qué país se encuentran las pirámides de Giza?",
                options: ["Irán", "Irak", "Egipto", "Jordania"],
                correctAnswer: 2,
            },
            {
                question: "¿Cuál es el país con mayor población del mundo?",
                options: ["Estados Unidos", "India", "China", "Brasil"],
                correctAnswer: 2,
            },
            {
                question: "¿Qué mar baña las costas de España por el este?",
                options: ["Mar Cantábrico", "Mar Mediterráneo", "Océano Atlántico", "Mar Negro"],
                correctAnswer: 1,
            },
            {
                question: "¿Cuál es la capital de Canadá?",
                options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
                correctAnswer: 3,
            },
            {
                question: "¿En qué país se encuentra la Torre Eiffel?",
                options: ["Italia", "Francia", "España", "Reino Unido"],
                correctAnswer: 1,
            },
            {
                question: "¿Cuál es la capital de Argentina?",
                options: ["Rosario", "Córdoba", "Buenos Aires", "Mendoza"],
                correctAnswer: 2,
            },
            {
                question: "¿Cuántos océanos hay en la Tierra?",
                options: ["3", "4", "5", "6"],
                correctAnswer: 2, // 5: Pacífico, Atlántico, Índico, Ártico, Antártico
            },
            {
                question: "¿Cuál es la isla más grande del mundo?",
                options: ["Australia", "Groenlandia", "Nueva Guinea", "Borneo"],
                correctAnswer: 1,
            },
            {
                question: "¿En qué continente se encuentra Brasil?",
                options: ["América del Norte", "América del Sur", "Europa", "África"],
                correctAnswer: 1,
            },
            {
                question: "¿Cuál es la capital de Alemania?",
                options: ["Berlín", "Hamburgo", "Múnich", "Fráncfort"],
                correctAnswer: 0,
            },
            {
                question: "¿Qué país tiene más islas en el mundo?",
                options: ["Indonesia", "Filipinas", "Suecia", "Maldivas"],
                correctAnswer: 2,
            },
            {
                question: "¿Qué cordillera separa Europa de Asia?",
                options: ["Alpes", "Cáucaso", "Urales", "Himalaya"],
                correctAnswer: 2,
            },
            {
                question: "¿Cuál es el volcán más alto del mundo?",
                options: ["Mauna Loa", "Monte Etna", "Ojos del Salado", "Monte Fuji"],
                correctAnswer: 2,
            },
            {
                question: "¿En qué país está ubicada la ciudad de Petra?",
                options: ["Israel", "Egipto", "Jordania", "Arabia Saudita"],
                correctAnswer: 2,
            },
            {
                question: "¿Cuál es el lago más grande de agua dulce?",
                options: ["Lago Baikal", "Lago Superior", "Lago Victoria", "Lago Titicaca"],
                correctAnswer: 1,
            },
            {
                question: "¿Cuál es la capital de Sudáfrica?",
                options: ["Ciudad del Cabo", "Pretoria", "Bloemfontein", "Todas son correctas"],
                correctAnswer: 3, // Sudáfrica tiene 3 capitales oficiales
            },
            ],
        },
        {
            category: "mathematics",
            questions: [
            {
                question: "¿Cuánto es 7 × 8?",
                options: ["54", "56", "58", "64"],
                correctAnswer: 1,
            },
            {
                question: "¿Cuál es el valor de π (pi) aproximadamente?",
                options: ["2.14", "3.14", "3.41", "4.13"],
                correctAnswer: 1,
            },
            {
                question: "¿Qué es un número primo?",
                options: ["Un número solo divisible entre 1 y él mismo", "Un número par", "Un número impar", "Un número divisible entre 2"],
                correctAnswer: 0,
            },
            {
                question: "¿Cuánto es la raíz cuadrada de 64?",
                options: ["6", "7", "8", "9"],
                correctAnswer: 2,
            },
            {
                question: "¿Cuánto es 12²?",
                options: ["124", "144", "164", "112"],
                correctAnswer: 1,
            },
            {
                question: "¿Qué es un ángulo recto?",
                options: ["60°", "90°", "120°", "180°"],
                correctAnswer: 1,
            },
            {
                question: "¿Cómo se llama un polígono de 5 lados?",
                options: ["Pentágono", "Hexágono", "Heptágono", "Cuadrilátero"],
                correctAnswer: 0,
            },
            {
                question: "¿Cuál es el resultado de 9 × 9?",
                options: ["81", "72", "99", "89"],
                correctAnswer: 0,
            },
            {
                question: "¿Qué propiedad afirma que a + b = b + a?",
                options: ["Distributiva", "Asociativa", "Conmutativa", "Identidad"],
                correctAnswer: 2,
            },
            {
                question: "¿Cuánto es 5 factorial (5!)?",
                options: ["60", "100", "120", "80"],
                correctAnswer: 2,
            },
            {
                question: "¿Cuál es el perímetro de un cuadrado de lado 4 cm?",
                options: ["12 cm", "16 cm", "8 cm", "10 cm"],
                correctAnswer: 1,
            },
            {
                question: "¿Cómo se llama un triángulo con dos lados iguales?",
                options: ["Equilátero", "Escaleno", "Isósceles", "Rectángulo"],
                correctAnswer: 2,
            },
            {
                question: "¿Cuánto es el área de un rectángulo de 5 cm × 4 cm?",
                options: ["9 cm²", "20 cm²", "25 cm²", "18 cm²"],
                correctAnswer: 1,
            },
            {
                question: "¿Cuál es el opuesto aditivo de 7?",
                options: ["-7", "7", "0", "1"],
                correctAnswer: 0,
            },
            {
                question: "¿Cómo se llama un polígono de 6 lados?",
                options: ["Pentágono", "Hexágono", "Heptágono", "Octágono"],
                correctAnswer: 1,
            },
            {
                question: "¿Cuánto es 2³?",
                options: ["6", "8", "9", "12"],
                correctAnswer: 1,
            },
            {
                question: "¿Qué tipo de número es √2?",
                options: ["Entero", "Racional", "Irracional", "Primo"],
                correctAnswer: 2,
            },
            {
                question: "¿Cuál es el resultado de dividir 45 entre 9?",
                options: ["4", "5", "6", "9"],
                correctAnswer: 1,
            },
            {
                question: "¿Cómo se llama el conjunto de números negativos, positivos y cero?",
                options: ["Naturales", "Racionales", "Enteros", "Irracionales"],
                correctAnswer: 2,
            },
            {
                question: "¿Cuánto es 15% de 200?",
                options: ["25", "30", "35", "40"],
                correctAnswer: 3,
            },
            {
                question: "¿Qué representa el símbolo ∑?",
                options: ["Multiplicación", "División", "Suma", "Resta"],
                correctAnswer: 2,
            },
            {
                question: "¿Cuánto es el cubo de 3?",
                options: ["6", "9", "18", "27"],
                correctAnswer: 3,
            },
            {
                question: "¿Cómo se llama un ángulo mayor de 90° pero menor de 180°?",
                options: ["Recto", "Agudo", "Obtuso", "Llano"],
                correctAnswer: 2,
            },
            {
                question: "¿Qué tipo de número es el 0?",
                options: ["Positivo", "Negativo", "Neutro", "Irracional"],
                correctAnswer: 2,
            },
            {
                question: "¿Cuál es la fórmula del área de un círculo?",
                options: ["πr²", "2πr", "πd", "r²π/2"],
                correctAnswer: 0,
            },
            ],
        },
        {
            category: "interteinment",
            questions: [
            {
                question: "¿Quién interpretó a Jack en la película *Titanic*?",
                options: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Johnny Depp"],
                correctAnswer: 1,
            },
            {
                question: "¿Cuál es la serie más vista de Netflix hasta 2023?",
                options: ["Stranger Things", "El juego del calamar", "La Casa de Papel", "Bridgerton"],
                correctAnswer: 1,
            },
            {
                question: "¿Quién canta la canción *Thriller*?",
                options: ["Prince", "Elvis Presley", "Michael Jackson", "Stevie Wonder"],
                correctAnswer: 2,
            },
            {
                question: "¿Qué actor interpreta a Iron Man en el Universo Marvel?",
                options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
                correctAnswer: 1,
            },
            {
                question: "¿Qué película ganó el Oscar a Mejor Película en 2020?",
                options: ["1917", "Joker", "Parásitos", "Érase una vez en Hollywood"],
                correctAnswer: 2,
            },
            {
                question: "¿Cómo se llama el hobbit protagonista de *El Señor de los Anillos*?",
                options: ["Frodo", "Bilbo", "Sam", "Pippin"],
                correctAnswer: 0,
            },
            {
                question: "¿Quién es el creador de *Star Wars*?",
                options: ["Steven Spielberg", "George Lucas", "J.J. Abrams", "James Cameron"],
                correctAnswer: 1,
            },
            {
                question: "¿Cuál es la princesa de Disney que tiene un tigre llamado Rajah?",
                options: ["Ariel", "Bella", "Jasmín", "Mulan"],
                correctAnswer: 2,
            },
            {
                question: "¿En qué película aparece el personaje Darth Vader?",
                options: ["Star Wars", "Star Trek", "Guardianes de la Galaxia", "Matrix"],
                correctAnswer: 0,
            },
            {
                question: "¿Qué saga cinematográfica tiene como anillo central un objeto de poder?",
                options: ["Harry Potter", "El Señor de los Anillos", "Las Crónicas de Narnia", "Percy Jackson"],
                correctAnswer: 1,
            },
            {
                question: "¿Cómo se llama el hechizo de desarme en Harry Potter?",
                options: ["Alohomora", "Expelliarmus", "Lumos", "Avada Kedavra"],
                correctAnswer: 1,
            },
            {
                question: "¿Qué superhéroe es conocido como el Caballero Oscuro?",
                options: ["Superman", "Spiderman", "Batman", "Iron Man"],
                correctAnswer: 2,
            },
            {
                question: "¿Cuál es el nombre de la protagonista femenina de *Titanic*?",
                options: ["Rose", "Mary", "Anna", "Elizabeth"],
                correctAnswer: 0,
            },
            {
                question: "¿Quién es el autor de la serie de libros *Canción de hielo y fuego*?",
                options: ["J.R.R. Tolkien", "George R.R. Martin", "C.S. Lewis", "Stephen King"],
                correctAnswer: 1,
            },
            {
                question: "¿Cuál es el nombre del parque temático ficticio en *Jurassic Park*?",
                options: ["Dino World", "Jurassic World", "Prehistoric Park", "Jurassic Park"],
                correctAnswer: 3,
            },
            {
                question: "¿Qué banda británica compuso la canción *Bohemian Rhapsody*?",
                options: ["The Beatles", "Queen", "The Rolling Stones", "Pink Floyd"],
                correctAnswer: 1,
            },
            {
                question: "¿Quién interpreta a Katniss Everdeen en *Los juegos del hambre*?",
                options: ["Jennifer Lawrence", "Emma Watson", "Kristen Stewart", "Scarlett Johansson"],
                correctAnswer: 0,
            },
            {
                question: "¿Cuál es la casa rival de Gryffindor en Hogwarts?",
                options: ["Hufflepuff", "Ravenclaw", "Slytherin", "Beauxbatons"],
                correctAnswer: 2,
            },
            {
                question: "¿Quién dirigió la trilogía original de *El Señor de los Anillos*?",
                options: ["Peter Jackson", "Steven Spielberg", "James Cameron", "Ridley Scott"],
                correctAnswer: 0,
            },
            {
                question: "¿Qué actor interpreta a Wolverine en las películas de *X-Men*?",
                options: ["Hugh Jackman", "Ryan Reynolds", "Ben Affleck", "Chris Pratt"],
                correctAnswer: 0,
            },
            {
                question: "¿En qué serie aparece el personaje Walter White?",
                options: ["Better Call Saul", "Breaking Bad", "Dexter", "Mad Men"],
                correctAnswer: 1,
            },
            {
                question: "¿Cuál es la película de animación de Pixar sobre emociones?",
                options: ["Coco", "Del revés (Intensamente)", "Up", "Toy Story"],
                correctAnswer: 1,
            },
            {
                question: "¿Quién interpreta a Jack Sparrow en *Piratas del Caribe*?",
                options: ["Johnny Depp", "Orlando Bloom", "Geoffrey Rush", "Harrison Ford"],
                correctAnswer: 0,
            },
            {
                question: "¿Qué superhéroe es conocido como el Hombre Araña?",
                options: ["Superman", "Batman", "Spiderman", "Iron Man"],
                correctAnswer: 2,
            },
            {
                question: "¿En qué película aparecen los personajes Elsa y Anna?",
                options: ["Valiente", "Enredados", "Frozen", "La Sirenita"],
                correctAnswer: 2,
            },
            ],
        },
    ];