const { test, expect } = require('@playwright/test');

test('Navegar no UOL e verificar data de atualização dos termos de segurança', async ({ page }) => {
  //  Acessando o site principal do UOL
  await page.goto('http://uol.com.br');

  //  Aguardando a página carregar e localizando o link correto de Segurança e Privacidade
  const linkSeguranca = page.locator('a[href="https://sobreuol.noticias.uol.com.br/normas-de-seguranca-e-privacidade"]');
  await expect(linkSeguranca).toBeVisible();

  // Clicando no link para acessar a página de normas
  await linkSeguranca.click();

  await page.waitForLoadState('domcontentloaded');

  // Localizando o <strong>Atualização:</strong>
  const strongAtualizacao = page.locator('strong:has-text("Atualização:")').first();
  await expect(strongAtualizacao).toBeVisible();

  // Pegando o texto completo do parágrafo pai que inclui a data
  const parentText = await strongAtualizacao.evaluate(node => node.parentElement.textContent);

  //  Removendo o "Atualização:" para identificar apenas a data
  const dataAtualizacao = parentText.replace('Atualização:', '').trim();

  // Exibindo no console
  console.log('Data completa de atualização dos termos de segurança:', dataAtualizacao);

  // Capturando uma screenshot do parágrafo que contém a data
  const parentElement = strongAtualizacao.locator('..'); // pai do <strong>
  await parentElement.screenshot({ path: 'data-atualizacao.png' });

  // Verifincando se a data não está vazia
  expect(dataAtualizacao.length).toBeGreaterThan(0);
});
