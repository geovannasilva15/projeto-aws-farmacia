# Descrição da Arquitetura

A plataforma virtual proposta para a farmácia fictícia **Abstergo Industries** utiliza três serviços principais da AWS.

## Fluxo da Solução

1. O usuário acessa a página da farmácia virtual.
2. Os arquivos estáticos da interface ficam organizados no Amazon S3.
3. Ao registrar um pedido, a aplicação envia os dados para uma função AWS Lambda.
4. A função processa e valida os dados do pedido.
5. Os dados são armazenados no Amazon DynamoDB.

## Serviços

### Amazon S3

Responsável pelo armazenamento dos arquivos estáticos, imagens de produtos e documentos.

### AWS Lambda

Responsável por executar as regras de negócio sem necessidade de servidores tradicionais.

### Amazon DynamoDB

Responsável por armazenar produtos, clientes, pedidos e status de atendimento.

## Possíveis Melhorias Futuras

- Adicionar Amazon API Gateway para expor endpoints HTTP;
- Usar Amazon Cognito para autenticação de usuários;
- Usar Amazon CloudFront para distribuição de conteúdo;
- Integrar Amazon SNS ou Amazon SES para notificações;
- Criar esteiras de deploy automatizadas.
