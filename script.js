function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');

    // Cria o artigo do cartão
    const article = document.createElement('article');
    article.className = 'cartao';

    // Cria o conteúdo do cartão (frente e verso)
    const conteudo = document.createElement('div');
    conteudo.className = 'cartao__conteudo';

    // Cria a frente do cartão
    const frente = document.createElement('div');
    frente.className = 'cartao__frente';
    frente.innerHTML = `<div><h3>${categoria}</h3><p>${pergunta}</p></div>`;

    // Cria o verso do cartão
    const verso = document.createElement('div');
    verso.className = 'cartao__verso';
    verso.innerHTML = `<p>${resposta}</p>`;

    // Adiciona frente e verso ao conteúdo
    conteudo.appendChild(frente);
    conteudo.appendChild(verso);

    // Adiciona conteúdo ao cartão
    article.appendChild(conteudo);

    // Adiciona evento de clique para virar o cartão
    article.addEventListener('click', () => {
        article.classList.toggle('virado');
    });

    // Adiciona o cartão ao container
    container.appendChild(article);
}
