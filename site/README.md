# 21Go! — Proteção patrimonial

Landing page estática, responsiva e sem dependências. Os arquivos publicáveis estão em `dist/`.

## Visualizar

```sh
python3 -m http.server 4173 --directory dist --bind 127.0.0.1
```

Abra http://127.0.0.1:4173.

## Contato

O número fornecido pelo cliente, **+55 21 97495-0212**, está centralizado em `dist/script.js`. Os links HTML também incluem esse destino para funcionar sem JavaScript. Cada categoria de veículo abre o WhatsApp com uma mensagem específica; nenhuma mensagem é enviada automaticamente.

## Conteúdo e referências

- Layout de referência: https://classeaesteticaautomotiva.onrender.com/ — consultado em 03/10/2026; página única, apresentação automotiva escura, navegação por âncoras e contato direto.
- Presidente: https://www.instagram.com/marcosalves_pr/ — perfil acessível no navegador em 03/10/2026. Nome, cargo e citação de apresentação conferidos no perfil.
- Materiais enviados pelo cliente: cinco imagens na pasta superior. A paleta, a área de atendimento e os cinco benefícios foram extraídos dessas peças. A foto do presidente foi fornecida pelo cliente.
- Categorias carro, moto e moto elétrica e terminologia de proteção patrimonial: briefing do cliente.
- Foram encontrados sites de terceiros com afirmações divergentes sobre a empresa. Não foram incorporados preços, estatísticas, prazos, condições regulatórias ou tempo de mercado desses sites.
- A campanha com vencimento em 10 de outubro não foi incluída, pois não há confirmação de vigência e condições. O prazo publicitário de cotação em dois minutos também não foi prometido.
- Os arquivos originais de imagem foram preservados. A imagem automotiva é enquadrada por CSS para utilizar o carro sem reproduzir os textos de campanha.

## Estrutura

`dist/index.html`: conteúdo e metadados. `dist/styles.css`: identidade e responsividade. `dist/script.js`: WhatsApp e menu móvel. `dist/assets/`: imagens fornecidas pelo cliente.

Os benefícios estão sujeitos à proposta e ao regulamento. Valores, limites, participações, critérios de elegibilidade e início de vigência devem ser confirmados pelo atendimento. A página não coleta dados por formulário, não usa analytics e não envia mensagens automaticamente.

## Hospedagem

Pode ser hospedado como site estático com a pasta pública `dist` e sem comando de build. A integração Sites, quando disponível, usa `.openai/hosting.json`.
