# RELATÓRIO DE IMPLEMENTAÇÃO DE SERVIÇOS AWS

**Data:** 15/05/2026  
**Empresa:** Abstergo Industries  
**Responsável:** Geovanna Eduarda da Silva  
**Projeto:** Plataforma virtual para farmácia fictícia

## 1. Introdução

Este relatório apresenta uma proposta de implementação de serviços em nuvem para a empresa fictícia **Abstergo Industries**, representada neste projeto como uma farmácia que deseja criar uma plataforma virtual para exposição de produtos, registro de pedidos e organização de dados operacionais.

O objetivo do projeto é selecionar e justificar **3 serviços da AWS** capazes de apoiar a construção da solução com foco em **redução de custos imediatos**, escalabilidade, organização dos dados e menor dependência de infraestrutura física.

A proposta foi estruturada para atender ao desafio prático da DIO, demonstrando como serviços em nuvem podem substituir recursos locais, reduzir manutenção e permitir que a empresa pague de forma mais alinhada ao uso real da aplicação.

## 2. Contexto da empresa

A **Abstergo Industries** é uma farmácia fictícia que deseja modernizar sua operação por meio de uma plataforma virtual. A solução proposta deverá permitir que clientes consultem produtos, registrem solicitações e que a empresa organize pedidos e informações essenciais de forma simples, segura e escalável.

Antes da adoção da nuvem, a empresa poderia depender de servidores físicos, armazenamento local, manutenção manual e aquisição antecipada de infraestrutura. Com a AWS, a estrutura passa a ser mais flexível, permitindo iniciar com baixo custo e crescer conforme a demanda.

## 3. Objetivo do projeto

O projeto tem como objetivo propor uma arquitetura inicial em AWS para uma plataforma virtual de farmácia, utilizando três serviços principais:

1. **Amazon S3**, para armazenamento de arquivos estáticos, imagens e documentos.
2. **AWS Lambda**, para processamento serverless de pedidos e regras de negócio.
3. **Amazon DynamoDB**, para armazenamento de dados como produtos, clientes e pedidos.

## 4. Arquitetura proposta

A arquitetura sugerida segue um modelo simples e escalável:

```text
Usuário acessa a plataforma virtual
        |
        v
Amazon S3 armazena páginas estáticas, imagens e documentos
        |
        v
AWS Lambda processa pedidos e automações
        |
        v
Amazon DynamoDB registra produtos, clientes, pedidos e status
```

Essa composição reduz a necessidade de servidores tradicionais, facilita a manutenção e permite expansão futura da aplicação.

## 5. Descrição das etapas do projeto

### Etapa 1 - Amazon S3

- **Nome da ferramenta:** Amazon S3
- **Foco da ferramenta:** Armazenamento de arquivos, imagens e conteúdo estático
- **Descrição do caso de uso:**

O Amazon S3 será utilizado para armazenar arquivos estáticos da plataforma virtual, incluindo páginas HTML, arquivos CSS, scripts JavaScript, imagens dos produtos e documentos institucionais da farmácia.

Na prática, o S3 permite que a empresa organize os arquivos da aplicação sem manter servidores físicos para armazenamento. A farmácia poderá utilizar buckets para armazenar imagens dos produtos, catálogos digitais, documentos administrativos e materiais relacionados aos pedidos.

**Aplicações no projeto:**

- Hospedagem dos arquivos estáticos da plataforma;
- Armazenamento de imagens de medicamentos e produtos;
- Organização de documentos digitais;
- Apoio a backups simples;
- Redução de custos com servidores locais de arquivos.

**Benefício financeiro esperado:**

A empresa reduz custos por não precisar adquirir ou manter infraestrutura própria de armazenamento, usando um serviço gerenciado e escalável.

### Etapa 2 - AWS Lambda

- **Nome da ferramenta:** AWS Lambda
- **Foco da ferramenta:** Execução de código sem gerenciamento de servidores
- **Descrição do caso de uso:**

O AWS Lambda será usado para processar ações da plataforma, como registro de pedidos, validação de dados enviados pelos clientes, atualização de status e integração com o banco de dados.

Esse serviço segue o modelo serverless, permitindo que o código seja executado apenas quando necessário. Assim, a empresa evita manter servidores ligados continuamente, reduzindo custos em períodos de baixa demanda.

**Aplicações no projeto:**

- Processamento de pedidos realizados na plataforma;
- Validação de dados do cliente;
- Integração entre o formulário do site e o banco de dados;
- Automação de tarefas administrativas;
- Criação de uma estrutura preparada para crescimento futuro.

**Benefício financeiro esperado:**

A farmácia paga pelo uso efetivo da função, sem necessidade de provisionar servidores permanentes para processar pequenas rotinas.

### Etapa 3 - Amazon DynamoDB

- **Nome da ferramenta:** Amazon DynamoDB
- **Foco da ferramenta:** Banco de dados NoSQL serverless e gerenciado
- **Descrição do caso de uso:**

O Amazon DynamoDB será utilizado para armazenar informações da plataforma, como produtos, categorias, clientes, pedidos e status de atendimento.

Por ser um banco de dados gerenciado, o DynamoDB reduz a necessidade de administração manual de servidores de banco de dados, atualizações, provisionamento complexo e manutenção operacional.

**Aplicações no projeto:**

- Cadastro de produtos da farmácia;
- Registro de clientes;
- Armazenamento de pedidos;
- Consulta de status de atendimento;
- Escalabilidade automática conforme o volume de acessos.

**Benefício financeiro esperado:**

O uso de capacidade sob demanda evita gastos antecipados com infraestrutura de banco de dados e permite ajustar custos conforme o volume real de requisições.

## 6. Justificativa da escolha dos serviços

A escolha dos serviços foi baseada em uma estratégia de simplicidade, baixo custo inicial e facilidade de evolução.

- O **Amazon S3** reduz a necessidade de manter servidores para arquivos estáticos.
- O **AWS Lambda** evita servidores sempre ligados para processar pequenas rotinas.
- O **Amazon DynamoDB** oferece banco de dados gerenciado, reduzindo a necessidade de administração manual.

Essa combinação é adequada para uma farmácia fictícia que está iniciando sua plataforma virtual e precisa de uma base flexível para crescer futuramente.

## 7. Benefícios esperados

Com a implementação dos serviços AWS selecionados, a empresa **Abstergo Industries** poderá obter os seguintes benefícios:

- Redução de custos com servidores físicos;
- Menor necessidade de manutenção técnica local;
- Pagamento mais alinhado ao uso real da aplicação;
- Maior escalabilidade da plataforma;
- Armazenamento seguro e organizado;
- Processamento automatizado de pedidos;
- Melhor controle de produtos e solicitações;
- Facilidade para evoluir a aplicação no futuro.

## 8. Evidências do projeto entregue

O repositório do projeto contém:

- README com descrição completa da solução;
- Relatório de implementação em Markdown e PDF;
- Diagrama da arquitetura proposta;
- Front-end demonstrativo da farmácia virtual;
- Função Lambda para simulação de processamento de pedido;
- Arquivos JSON com exemplos de produtos e pedidos;
- Template CloudFormation educacional;
- Documentos auxiliares com plano de custos, decisões técnicas e checklist de entrega.

## 9. Possíveis melhorias futuras

A arquitetura proposta pode evoluir futuramente com a adição dos seguintes recursos:

- Amazon API Gateway para expor a Lambda como uma API;
- Amazon Cognito para autenticação de usuários;
- Amazon CloudFront para distribuição de conteúdo com melhor desempenho;
- Amazon CloudWatch para monitoramento e logs;
- Políticas IAM mais restritas para segurança em ambiente real;
- Integração real entre front-end, Lambda e DynamoDB.

## 10. Conclusão

A implementação dos serviços **Amazon S3**, **AWS Lambda** e **Amazon DynamoDB** na empresa fictícia **Abstergo Industries** tem como objetivo reduzir custos operacionais, simplificar a infraestrutura tecnológica e permitir a criação de uma plataforma virtual eficiente para uma farmácia.

A proposta demonstra como uma solução em nuvem pode substituir parte da infraestrutura tradicional, trazendo mais flexibilidade, escalabilidade e organização. Recomenda-se a continuidade da utilização dos serviços implementados e a avaliação de novas tecnologias AWS conforme o crescimento da plataforma.

## 11. Anexos

- Diagrama da arquitetura da solução;
- Link do repositório no GitHub;
- Arquivos de exemplo de banco de dados;
- Código da função Lambda;
- Front-end demonstrativo;
- Template CloudFormation;
- Documentação complementar.

**Assinatura do Responsável pelo Projeto:**

Geovanna Eduarda da Silva
