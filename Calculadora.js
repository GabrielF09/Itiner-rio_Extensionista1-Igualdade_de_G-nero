function calcular(tipo) {
    let valorInput;
    let resultadoCampo;
    if (tipo === 'gap-salarial') {
        valorInput = parseFloat(document.getElementById('input-salario').value);
        resultadoCampo = document.getElementById('resultado-gap');
        
        if (isNaN(valorInput) || valorInput <= 0) return alert("Por favor, insira um salário!");
        let masculino = valorInput * 1.22;
        resultadoCampo.value = "Masculino: R$ " + masculino.toFixed(2);

    } 
    else if (tipo === 'representatividade') {
        valorInput = parseInt(document.getElementById('input-equipe').value);
        resultadoCampo = document.getElementById('resultado-equipe');

        if (isNaN(valorInput)) return alert("Insira o total de pessoas!");
        let meta = Math.ceil(valorInput * 0.5);
        resultadoCampo.value = "Meta: " + meta + " mulheres.";

    } 
    else if (tipo === 'dupla-jornada') {
        valorInput = parseFloat(document.getElementById('input-horas').value);
        resultadoCampo = document.getElementById('resultado-horas');
        
        if (isNaN(valorInput)) return alert("Insira as horas!");
        let totalCuidado = valorInput + 10.4;
        resultadoCampo.value = "Projeção Mulher: " + totalCuidado.toFixed(1) + "h/sem.";

    } 
    else if (tipo === 'lideranca') {
        valorInput = parseInt(document.getElementById('input-lideres').value);
        resultadoCampo = document.getElementById('resultado-lideres');
        if (isNaN(valorInput)) return alert("Insira o total!");
        let metaLider = Math.ceil(valorInput * 0.4);
        resultadoCampo.value = "Mínimo: " + metaLider + " mulheres diretoras.";
    }
}