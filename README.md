# Captura de Data de Atualização dos Termos de Segurança no UOL

Este projeto automatiza a captura da **data de atualização** da página de termos de segurança e privacidade do UOL, utilizando **Playwright**.

---

## Descrição

O teste realiza o seguinte fluxo:

1. Acessa o site [UOL](https://uol.com.br) e aguarda o carregamento do DOM.
2. Localiza o link para a página de **Segurança e Privacidade**.
3. Clica no link e aguarda a página carregar.
4. Busca o elemento `<strong>` contendo a palavra **"Atualização:"**.
5. Extrai a data do texto do parágrafo pai e exibe no console.
6. Captura uma **screenshot** do parágrafo que contém a data.
7. Verifica que a data não está vazia.

---

## Tecnologias

- [Playwright](https://playwright.dev/)
- Node.js
- JavaScript (ES6)

---

## Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
