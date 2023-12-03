const h2 = document.querySelector('h2');

function ranquearPartidas( vitorias, derrotas ){
  return vitorias - derrotas;
}

function calculandoNivel( result ){
  let level = '';
  if( result <= 10 ){
    level = 'Ferro';
  }else if( result > 10 && result <= 20 ){
    level = 'Bronze';
  }else if (result > 20 && result <= 50) {
    level = 'Prata';
  }else if (result > 50 && result <= 80) {
    level = 'Ouro';
  }else if (result > 80 && result <= 90) {
    level = 'Diamante';
  }else if (result > 90 && result <= 100) {
    level = 'Lendario';
  }else{
    level = 'Imortal';
  }
  
  return level;
}

function exibirLevel( result, level ){
  h2.innerText = "O Herói tem de saldo de **{"+result+"}** está no nível de **{"+level+"}**";
}

function estatistica( vitorias, derrotas ){
  let result = ranquearPartidas( vitorias, derrotas );
  let level = calculandoNivel( result );
  exibirLevel( result, level );
}

estatistica( 45, 13 );
