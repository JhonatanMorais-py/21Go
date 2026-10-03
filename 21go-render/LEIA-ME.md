# 21Go! — pacote pronto para o Render

Este projeto é um site estático e não precisa de Node.js, banco de dados, variáveis de ambiente ou comando de inicialização.

## Publicação pelo painel do Render

1. Envie o conteúdo desta pasta para um repositório no GitHub, GitLab ou Bitbucket.
2. No Render, escolha **New > Static Site** e conecte o repositório.
3. Use estas configurações:

   - **Build Command:** `echo "Site estático pronto"`
   - **Publish Directory:** `dist`

4. Clique em **Create Static Site**.

O arquivo `render.yaml` também permite publicar como Blueprint. Nesse caso, o Render reconhece automaticamente a pasta `dist` e os cabeçalhos definidos para o site.

## Estrutura

- `dist/index.html`: página principal.
- `dist/styles.css`: identidade visual e responsividade.
- `dist/script.js`: menu e links de WhatsApp.
- `dist/assets/`: imagens usadas no site.
- `render.yaml`: configuração de publicação no Render.

## Atualizações

Edite somente os arquivos dentro de `dist`. Após enviar as alterações ao repositório conectado, o Render fará uma nova publicação automaticamente.

O WhatsApp configurado no site é **+55 21 97495-0212**.
