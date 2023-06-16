'use strict'

import { patrocinadores, excluirPatrocinador } from "./api.js";
let dados = await patrocinadores();
console.log(dados)

import { excluirPatrocinador } from "./api.js";

const cardPatrocinador = (dados) => {

    const card = document.createElement('div')
    card.classList.add('card')


    const text_container = document.createElement('div')
    card.classList.add('text_container')

    const name = document.createElement('h3')
    name.classList.add('card__name')
    name.textContent = "Nome do Patrocinador: " + dados.razao_social;

    const email = document.createElement('p')
    email.classList.add('card__email')
    email.textContent = "E-mail: " + dados.email;

    const cnpj = document.createElement('p')
    cnpj.classList.add('card__cpf')
    cnpj.textContent = "CNPJ: " + dados.cnpj;


    const telefone = document.createElement('p')
    telefone.classList.add('card__telefone')
    telefone.textContent = "Telefone: " + dados.telefone;

    const button = document.createElement('button')
    button.classList.add('card__button')
    button.textContent = "Excluir";

    button.addEventListener('click', () => {
        excluirPatrocinador(dados.id); // Chama a função para excluir o produto passando o ID como parâmetro
        card.remove(); // Remove o card do DOM após a exclusão
    });


    text_container.append(name, email, cnpj, telefone, button)


    card.append(text_container)

    return card
}

export const carregarPatrocinador= async () => {

    const container = document.getElementById('container-collections')
    const cards = dados.patrocinador.map(cardPatrocinador)
    container.append(...cards)

}

carregarPatrocinador();