// Obtener todos los elementos de días de la semana
const diasSemana = document.querySelectorAll('.dia-semana');

// Agregar un evento de clic a cada día de la semana
diasSemana.forEach(dia => {
    dia.addEventListener('click', () => {
        const targetId = dia.getAttribute('data-target');
        const lista = document.getElementById(targetId);

        // Ocultar todas las listas primero
        document.querySelectorAll('.lista').forEach(item => {
            if (item !== lista) {
                item.classList.remove('lista-visible');
            }
        });

        // Mostrar u ocultar la lista del día clicado
        lista.classList.toggle('lista-visible');
    });
});
