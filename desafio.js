/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    let usuarioCartas = [];
    let computadorCartas = [];
    let usuarioResultado = 0;
    let computadorPontuacao = 0;
    
    while (usuarioResultado < 21 && (!computadorPontuacao || computadorPontuacao < 21)) {
      const cartaUsuario = comprarCarta();
      usuarioCartas.push(cartaUsuario.texto);
      usuarioResultado += cartaUsuario.valor;
    
      if (usuarioResultado > 21) {
        console.log(`Usuário - cartas: ${usuarioCartas.join(' ')} - pontuação ${usuarioResultado}`);
        console.log(`Computador - cartas: ${computadorCartas.join(' ')} - pontuação ${computadorPontuacao}`);
        console.log("O computador ganhou!");
        break;
      }
    
      const cartaComputador = comprarCarta();
      computadorCartas.push(cartaComputador.texto);
      computadorPontuacao += cartaComputador.valor;
    
      if (computadorPontuacao > 21) {
        console.log(`Usuário - cartas: ${usuarioCartas.join(' ')} - pontuação ${usuarioResultado}`);
        console.log(`Computador - cartas: ${computadorCartas.join(' ')} - pontuação ${computadorPontuacao}`);
        console.log("O usuário foi ganhador!");
        break;
      }
    }
    
    if (usuarioResultado <= 21 && computadorPontuacao <= 21) {
      if (usuarioResultado > computadorPontuacao) {
        console.log(`Usuário - cartas: ${usuarioCartas.join(' ')} - pontuação ${usuarioResultado}`);
        console.log(`Computador - cartas: ${computadorCartas.join(' ')} - pontuação ${computadorPontuacao}`);
        console.log("O usuário foi ganhador!");
      } else if (usuarioResultado < computadorPontuacao) {
        console.log(`Usuário - cartas: ${usuarioCartas.join(' ')} - pontuação ${usuarioResultado}`);
        console.log(`Computador - cartas: ${computadorCartas.join(' ')} - pontuação ${computadorPontuacao}`);
        console.log("O computador ganhou!");
      } else {
        console.log(`Usuário - cartas: ${usuarioCartas.join(' ')} - pontuação ${usuarioResultado}`);
        console.log(`Computador - cartas: ${computadorCartas.join(' ')} - pontuação ${computadorPontuacao}`);
        console.log("Resultado Empate!");
      }
    }
    