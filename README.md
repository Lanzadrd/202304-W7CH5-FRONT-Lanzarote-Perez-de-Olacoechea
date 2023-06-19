# Week 5 - Proyecto en equipo

Trabajo hecho por equipo Luisa (Madrid-202304).
Hemos utilizado la API de Rick & Morty:
-> https://rickandmortyapi.com/
Si quieres investigar por tu cuenta, editar o simplemente ver como funciona, puedes acceder a nuestro repositorio de github:
-> https://github.com/isdi-coders-2023/Luisa-202304-mad

## Componentes y responsabilidades:

Header: Renderiza el logo y contiene la funcionalidad de ir a home.

Menu: Renderiza el menú de navegación encargado de renderizar los diferentes componentes (Routes) usadas en nuestra SPA.

Home: Renderiza la lista de personajes deseada con función de paginación y filtrado.

Filter: Componente hijo de home, se encarga de pasarle a la funcion del repositorio la url deseada con los filtros seleccionados.

Character details: Renderiza la tarjeta de información del personaje con información detallada.

Buttons: Encargados de mandar la url correcta según se quiera avanzar o retroceder de página.

Footer: Renderiza nombre del equipo, función estética.

ErrorPage: Encargada de renderizarse cuando la ruta deseada no se encuentre y/o no esté disponible.
