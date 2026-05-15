AWSTemplateFormatVersion: '2010-09-09'
Description: Projeto educacional - Plataforma virtual de farmacia usando Amazon S3, AWS Lambda e Amazon DynamoDB.

Parameters:
  ProjectName:
    Type: String
    Default: farmacia-virtual-abstergo
    Description: Nome base do projeto.

Resources:
  SiteBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: !Sub '${ProjectName}-${AWS::AccountId}-${AWS::Region}'
      WebsiteConfiguration:
        IndexDocument: index.html
        ErrorDocument: index.html
      Tags:
        - Key: Projeto
          Value: !Ref ProjectName
        - Key: Responsavel
          Value: Geovanna Eduarda da Silva

  ProdutosTable:
    Type: AWS::DynamoDB::Table
    Properties:
      TableName: !Sub '${ProjectName}-produtos'
      BillingMode: PAY_PER_REQUEST
      AttributeDefinitions:
        - AttributeName: produtoId
          AttributeType: S
      KeySchema:
        - AttributeName: produtoId
          KeyType: HASH
      Tags:
        - Key: Projeto
          Value: !Ref ProjectName

  PedidosTable:
    Type: AWS::DynamoDB::Table
    Properties:
      TableName: !Sub '${ProjectName}-pedidos'
      BillingMode: PAY_PER_REQUEST
      AttributeDefinitions:
        - AttributeName: pedidoId
          AttributeType: S
      KeySchema:
        - AttributeName: pedidoId
          KeyType: HASH
      Tags:
        - Key: Projeto
          Value: !Ref ProjectName

  LambdaExecutionRole:
    Type: AWS::IAM::Role
    Properties:
      AssumeRolePolicyDocument:
        Version: '2012-10-17'
        Statement:
          - Effect: Allow
            Principal:
              Service: lambda.amazonaws.com
            Action: sts:AssumeRole
      ManagedPolicyArns:
        - arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
      Policies:
        - PolicyName: DynamoDBPedidosWritePolicy
          PolicyDocument:
            Version: '2012-10-17'
            Statement:
              - Effect: Allow
                Action:
                  - dynamodb:PutItem
                  - dynamodb:GetItem
                  - dynamodb:UpdateItem
                  - dynamodb:Scan
                Resource:
                  - !GetAtt PedidosTable.Arn
                  - !GetAtt ProdutosTable.Arn

  ProcessarPedidoFunction:
    Type: AWS::Lambda::Function
    Properties:
      FunctionName: !Sub '${ProjectName}-processar-pedido'
      Runtime: nodejs20.x
      Handler: index.handler
      Role: !GetAtt LambdaExecutionRole.Arn
      Timeout: 10
      Environment:
        Variables:
          PEDIDOS_TABLE: !Ref PedidosTable
          PRODUTOS_TABLE: !Ref ProdutosTable
      Code:
        ZipFile: |
          const crypto = require('crypto');

          exports.handler = async (event) => {
            const dados = typeof event.body === 'string' ? JSON.parse(event.body) : event;

            if (!dados.cliente || !dados.produto || !dados.quantidade) {
              return {
                statusCode: 400,
                body: JSON.stringify({ mensagem: 'Dados obrigatorios nao informados.' })
              };
            }

            const pedido = {
              pedidoId: `PED-${crypto.randomUUID()}`,
              cliente: dados.cliente,
              produto: dados.produto,
              quantidade: Number(dados.quantidade),
              status: 'Recebido',
              dataPedido: new Date().toISOString()
            };

            console.log('Pedido recebido:', pedido);

            return {
              statusCode: 201,
              body: JSON.stringify({ mensagem: 'Pedido registrado com sucesso.', pedido })
            };
          };
      Tags:
        - Key: Projeto
          Value: !Ref ProjectName

Outputs:
  SiteBucketName:
    Description: Nome do bucket S3 criado para arquivos estaticos.
    Value: !Ref SiteBucket
  SiteBucketWebsiteURL:
    Description: Endpoint de website estatico do bucket S3.
    Value: !GetAtt SiteBucket.WebsiteURL
  ProdutosTableName:
    Description: Nome da tabela de produtos.
    Value: !Ref ProdutosTable
  PedidosTableName:
    Description: Nome da tabela de pedidos.
    Value: !Ref PedidosTable
  ProcessarPedidoFunctionName:
    Description: Nome da funcao Lambda de processamento de pedidos.
    Value: !Ref ProcessarPedidoFunction
