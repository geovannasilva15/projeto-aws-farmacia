# Roteiro rapido para apresentar o projeto

Este roteiro pode ser usado para explicar o projeto em uma entrevista, avaliacao ou apresentacao da DIO.

## 1. Apresentacao inicial

Este projeto foi desenvolvido para uma farmacia ficticia chamada Abstergo Industries. A proposta foi criar uma arquitetura inicial em nuvem usando AWS, com foco em reducao de custos e escalabilidade.

## 2. Problema identificado

A farmacia precisava criar uma plataforma virtual sem depender de servidores fisicos, infraestrutura local ou manutencao complexa. Por isso, escolhi uma abordagem serverless.

## 3. Servicos utilizados

Foram escolhidos tres servicos principais:

- Amazon S3, para hospedar arquivos estaticos e imagens;
- AWS Lambda, para processar pedidos sem servidor dedicado;
- Amazon DynamoDB, para armazenar produtos, clientes e pedidos.

## 4. Justificativa da arquitetura

A arquitetura ajuda a reduzir custos porque evita servidores sempre ligados. Os servicos usados permitem escalabilidade e cobranca conforme o uso, o que combina com uma plataforma que pode crescer aos poucos.

## 5. O que foi entregue

O repositorio contem README, relatorio tecnico, diagrama de arquitetura, front-end simples, funcao Lambda, exemplos de dados e template CloudFormation.

## 6. Melhorias futuras

Como melhoria futura, eu integraria o front-end com Amazon API Gateway, salvaria pedidos reais no DynamoDB, adicionaria autenticacao com Cognito e monitoramento com CloudWatch.
