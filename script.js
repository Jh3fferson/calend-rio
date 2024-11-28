// Dados dos eventos a
const events = [
    { aluno: "João", curso: "Matemática", sala: "101", data: "2024-11-21", hora: "08:00 - 10:00", cor: "matematica" },
    { aluno: "Maria", curso: "História", sala: "102", data: "2024-11-21", hora: "10:00 - 12:00", cor: "historia" },
    { aluno: "Ana", curso: "Física", sala: "103", data: "2024-11-22", hora: "08:00 - 10:00", cor: "fisica" },
     
];

// Gerar calendário
const generateCalendar = () => {
    const calendar = document.getElementById("calendar");
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Número de dias no mês
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Criar os dias no calendário
    for (let day = 1; day <= daysInMonth; day++) {
        const date = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

        // Criar o elemento do dia
        const dayElement = document.createElement("div");
        dayElement.className = "day";

        // Adicionar a data no topo
        const dayTitle = document.createElement("strong");
        dayTitle.innerText = `${day}/${currentMonth + 1}/${currentYear}`;
        dayElement.appendChild(dayTitle);

        // Filtrar eventos para o dia atual
        const dayEvents = events.filter(event => event.data === date);

        // Adicionar os eventos ao dia
        dayEvents.forEach(event => {
            const eventElement = document.createElement("div");
            eventElement.className = `event ${event.cor}`;
            eventElement.innerHTML = `
                <strong>${event.aluno}</strong><br>
                Curso: ${event.curso}<br>
                Sala: ${event.sala}<br>
                Hora: ${event.hora}
            `;
            dayElement.appendChild(eventElement);
        });

        // Adicionar o dia ao calendário
        calendar.appendChild(dayElement);
    }
};

generateCalendar();

