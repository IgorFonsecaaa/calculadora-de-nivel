let saldoPartidas
let nivel 
calculoNivel(350, 250)

function calculoNivel (vitorias, derrotas) {
    saldoPartidas = vitorias - derrotas
    return saldoPartidas
}

if(saldoPartidas <= 10) {
    nivel = "Ferro"
} else if (saldoPartidas <=20) {
    nivel = "Bronze"
} else if (saldoPartidas <=50) {
    nivel = "Prata"
} else if (saldoPartidas <=80) {
    nivel = "Ouro"
} else if (saldoPartidas <=90) {
    nivel = "Diamante"
} else if (saldoPartidas <=100) {
    nivel = "Lendário"
} else {
    nivel = "Imortal"
}

console.log(`O Herói tem de saldo de ${saldoPartidas} está no nível ${nivel}`)