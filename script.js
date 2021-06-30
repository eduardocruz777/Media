function verificar() {
    let aluno = window.prompt('Qual é o nome do aluno?')
    let n1 = parseFloat(window.prompt(`Primeira nota de ${aluno}:`).replace(',', '.'))
    let n2 = parseFloat(window.prompt(`Segunda nota de ${aluno}:`).replace(',', '.'))
    var n = ((n1 + n2) / 2)
    res.innerHTML = `<h2>
    <p>Analisando a situação de ${aluno}...</p>
</h2>`
    if (n > 6) {
        res.innerHTML += `<p>Com as notas ${n1.toLocaleString('pt-br',{maximumFractionDigits: 2})} e ${n2.toLocaleString('pt-br',{maximumFractionDigits: 2})} a <strong>média é ${n.toLocaleString('pt-br',{maximumFractionDigits: 2})}</strong>`
        res.innerHTML += '<p>Com média acima de 6,0 o aluno está  <mark id="cor1"><strong id="cor1">APROVADO.</strong></mark></p>'
    } else if ((n >= 3) && (n <= 6)) {
        res.innerHTML += `<p>Com as notas ${n1.toLocaleString('pt-br',{maximumFractionDigits: 2})} e ${n2.toLocaleString('pt-br',{maximumFractionDigits: 2})} a <strong>média é ${n.toLocaleString('pt-br',{maximumFractionDigits: 2})}</strong>`
        res.innerHTML += '<p>Com média entre 3,0 e 6,0 o aluno está em <strong id="cor2">RECUPERAÇÃO.</strong></p>'
    } else if (n < 3) {
        res.innerHTML += `<p>Com as notas ${n1.toLocaleString('pt-br',{maximumFractionDigits: 2})} e ${n2.toLocaleString('pt-br',{maximumFractionDigits: 2})} a <strong>média é ${n.toLocaleString('pt-br',{maximumFractionDigits: 2})}</strong>`
        res.innerHTML += '<p>Com média abaixo de 3,0 o aluno está <mark id="cor2"><strong id="cor3">REPROVADO.</strong></mark></p>'
    } else {
        res.innerHTML = '<p>Clique no botão acima para informar as notas do aluno.</p>'
        window.alert('Por favor digite um número válido')
    }
}