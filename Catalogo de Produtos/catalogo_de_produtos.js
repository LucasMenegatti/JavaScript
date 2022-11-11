const params = new URLSearchParams(window.location.search);
const parametro = params.get('cat');

class produto_card {
    constructor(categoria, url_imagem, nome, sub_texto) {
        this.categoria = categoria;
        this.url_imagem = url_imagem;
        this.nome = nome;
        this.sub_texto = sub_texto;
    }
}

const titulos = ["Linha 1", "Linha 2", "Linha 3", "Linha 4"];

const sub_titulos = [
    '<p class="text-center m-0">Subtitulo 1</p>',
    '<p class="text-center m-0">Subtitulo 2</p>',
    '<p class="text-center m-0">Subtitulo 3</p>'
]

function desenha_cards(filtro, local) {
    document.querySelector(local).innerHTML = "";
    document.querySelector('.titulo-interno').innerHTML = `<h1 class="text-center m-0">${titulos[filtro]}</h1>`;
    document.querySelector('.subtitulo-interno').innerHTML = sub_titulos[filtro];
    for(var i=0; i<array_produtos.length; i++){
        if (array_produtos[i].categoria == filtro) {
            var mydiv = document.querySelector(local);
            var newcontent = document.createElement('div');
            newcontent.innerHTML = 
                `<div class="card">
                    <img src="${array_produtos[i].url_imagem}" class="card-img-top p-3" alt="">
                    <div class="card-body">
                        <h5 class="card-title text-center">${array_produtos[i].nome}</h5>
                        <p class="card-text text-center">${array_produtos[i].sub_texto}</p>
                    </div>
                </div>`;
            while (newcontent.firstChild) {
                mydiv.appendChild(newcontent.firstChild);
            }           
        }
    }
}

/* ============================ CRIANDO OS PRODUTOS ============================= */
const array_produtos = [];

/* Linha 1 */
array_produtos.push(new produto_card (
    0,
    "./imagens/produtos/agricolas/mf/058456-300x300.jpg",
    "Cód. 058456",
    "Para: MASSEY FERGUSON"
))

/* Linha 2 */
array_produtos.push(new produto_card (
    1,
    "./imagens/produtos/rodoviarios/balança-asa-delta-furo-50mm.jpg",
    "Balança asa delta",
    "Fruo 50mm"
))

/* Linha 3 */

array_produtos.push(new produto_card (
    2,
    "./imagens/produtos/implementos/carreta_agrícola_hidráulica_basculante_6000kg-300x300.jpg",
    "CARRETA AGRÍCOLA METÁLICA BASCULANTE HIDRÁULICA DIRIGÍVEL 6000Kg",
    ""
))

desenha_cards(parametro, '.cards__container');