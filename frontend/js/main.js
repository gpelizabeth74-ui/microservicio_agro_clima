const ctx = document.getElementById('miGrafico');

new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],

        datasets: [{
            label: 'Temperatura °C',

            data: [30, 28, 32, 29]
        }]
    }
});