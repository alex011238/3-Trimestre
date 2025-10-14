// Lista Inicial de Participantes
let listaInscritos = [];

console.log("Lista inicial (vazia):", listaInscritos);

// Adicionando os primeiros nomes
listaInscritos.push("João Silva");
listaInscritos.push("Maria Santos");
listaInscritos.push("Pedro Almeida");

console.log("\nApós adicionar João, Maria e Pedro:", listaInscritos);
console.log("Quantidade de inscritos:", listaInscritos.length);

// Nova inscrição: Ana Pereira
console.log("\nAntes de adicionar Ana Pereira:", listaInscritos);
listaInscritos.push("Ana Pereira");
console.log("Depois de adicionar Ana Pereira:", listaInscritos);

// Inscrição VIP: Carlos Mendes
console.log("\nAntes de adicionar Carlos Mendes (VIP):", listaInscritos);
listaInscritos.unshift("Carlos Mendes");
console.log("Depois de adicionar Carlos Mendes (VIP):", listaInscritos);

// Gerenciamento de Vagas
// Remover o último (Pedro Almeida simuladamente)
let removidoUltimo = listaInscritos.pop();
console.log("\nRemovido do final (cancelamento):", removidoUltimo);
console.log("Lista após remoção do final:", listaInscritos);

// Remover o primeiro (Carlos Mendes transferido para lista especial)
let removidoPrimeiro = listaInscritos.shift();
console.log("\nRemovido do início (VIP transferido):", removidoPrimeiro);
console.log("Lista após remoção do início:", listaInscritos);

// Organizando para o Sorteio
console.log("\nAntes da ordenação alfabética:", listaInscritos);
listaInscritos.sort();
console.log("Depois da ordenação alfabética:", listaInscritos);

// Ordem alfabética inversa
console.log("\nAntes da inversão alfabética:", listaInscritos);
listaInscritos.reverse();
console.log("Depois da inversão alfabética:", listaInscritos);
