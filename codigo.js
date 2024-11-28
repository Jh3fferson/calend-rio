const sistema = {
    cursos: [],
    salas: [],
    agendamentos: []
};



// Adiciona um curso
document.getElementById('formCurso').addEventListener('submit', function (e) {
    e.preventDefault();
    const nomeCurso = document.getElementById('nomeCurso').value;
    const curso = { id: sistema.cursos.length + 1, nome: nomeCurso };
    sistema.cursos.push(curso);
    atualizarOpcoesCursos();
    alert(`Curso "${nomeCurso}" adicionado com sucesso.`);
    this.reset();
});

// Adiciona uma sala
document.getElementById('formSala').addEventListener('submit', function (e) {
    e.preventDefault();
    const nomeSala = document.getElementById('nomeSala').value;
    const capacidade = parseInt(document.getElementById('capacidadeSala').value, 10);
    const sala = { id: sistema.salas.length + 1, nome: nomeSala, capacidade };
    sistema.salas.push(sala);
    atualizarOpcoesSalas();
    alert(`Sala "${nomeSala}" adicionada com sucesso.`);
    this.reset();
});

// Agenda um curso
document.getElementById('formAgendamento').addEventListener('submit', function (e) {
    e.preventDefault();
    const cursoId = parseInt(document.getElementById('cursoId').value, 10);
    const salaId = parseInt(document.getElementById('salaId').value, 10);
    const data = document.getElementById('dataAgendamento').value;
    const hora = document.getElementById('horaAgendamento').value;

    const curso = sistema.cursos.find(c => c.id === cursoId);
    const sala = sistema.salas.find(s => s.id === salaId);

    const conflito = sistema.agendamentos.find(
        a => a.salaId === salaId && a.data === data
    );

    if (conflito) {
        alert(`A sala "${sala.nome}" já está ocupada na data ${data}.`);
        return;
    }

    sistema.agendamentos.push({ cursoId, salaId, data, hora });
    atualizarListaAgendamentos();
    alert(`Curso "${curso.nome}" agendado na sala "${sala.nome}" para o dia ${data} e no horario: ${hora}`);
    this.reset();
});

// Atualiza os campos de seleção de cursos
function atualizarOpcoesCursos() {
    const cursoSelect = document.getElementById('cursoId');
    cursoSelect.innerHTML = '';
    sistema.cursos.forEach(curso => {
        const option = document.createElement('option');
        option.value = curso.id;
        option.textContent = curso.nome;
        cursoSelect.appendChild(option);
        
    });
}

// Atualiza os campos de seleção de salas
function atualizarOpcoesSalas() {
    const salaSelect = document.getElementById('salaId');
    salaSelect.innerHTML = '';
    sistema.salas.forEach(sala => {
        const option = document.createElement('option');
        option.value = sala.id;
        option.textContent = sala.nome;
        salaSelect.appendChild(option);


    });
}

// Atualiza a lista de agendamentos
function atualizarListaAgendamentos() {
    const listaAgendamentos = document.getElementById('listaAgendamentos');
    listaAgendamentos.innerHTML = '';
    sistema.agendamentos.forEach(agendamento => {   
        const curso = sistema.cursos.find(c => c.id === agendamento.cursoId);
        const sala = sistema.salas.find(s => s.id === agendamento.salaId);
        const item = document.createElement('li');
        item.textContent = `Curso: ${curso.nome}, Sala: ${sala.nome}, Data: ${agendamento.data}, Horario: ${agendamento.hora}`;
        listaAgendamentos.appendChild(item);

        localStorage.setItem("NomeDoCurso",curso.nome)
        localStorage.setItem("NomeDaSala",sala.nome)
        localStorage.setItem("DATA",agendamento.data)
        localStorage.setItem("HORARIO",agendamento.hora)

    });
}





    




// funcao "onclick para mostrar o botao ver a agenda "


function MostraBotao(){

    document.getElementById("BotaoAgenda").style.visibility= "visible"

}