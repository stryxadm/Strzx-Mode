# STRXZ MODE

**STRXZ MODE** é uma plataforma que conecta tecnologia, comunicação e controle remoto em uma única experiência.

O projeto reúne recursos de conexão entre usuários, interação social, chamadas e compartilhamento de tela, com opções de controle remoto que dependem da autorização explícita de quem compartilha a tela.

## Tecnologias

- Electron
- Node.js
- Express
- Socket.IO
- WebRTC
- HTML, CSS e JavaScript

## Estrutura

- `src/` — interface e aplicação desktop
- `server/` — serviço de autenticação e comunicação
- `assets/` — recursos visuais do projeto

## Executar em desenvolvimento

1. Instale uma versão compatível do Node.js.
2. Instale as dependências com `npm install`.
3. Inicie o aplicativo com `npm start`.

Para iniciar apenas o servidor, use `npm run server`.

## Gerar instalador para Windows

Execute `npm run build`. O instalador será gerado na pasta `release/`.

## Configuração

Use `.env.example` como referência para as variáveis de ambiente. Não publique arquivos `.env` reais, credenciais ou dados privados.

**STRXZ MODE — Conectividade sem limites.**
