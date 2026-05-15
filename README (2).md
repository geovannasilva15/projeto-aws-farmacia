<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Abstergo Pharma - Plataforma Virtual</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="hero">
    <nav class="navbar">
      <div class="logo">Abstergo Pharma</div>
      <a href="#produtos">Produtos</a>
      <a href="#pedido">Pedido</a>
      <a href="#arquitetura">AWS</a>
    </nav>
    <section class="hero-content">
      <h1>Farmácia virtual com infraestrutura em nuvem</h1>
      <p>Projeto fictício utilizando Amazon S3, AWS Lambda e Amazon DynamoDB para reduzir custos e organizar pedidos.</p>
      <a class="button" href="#pedido">Simular pedido</a>
    </section>
  </header>

  <main>
    <section id="produtos" class="section">
      <h2>Produtos em destaque</h2>
      <div class="cards">
        <article class="card">
          <span class="tag">Medicamento</span>
          <h3>Analgésico 500mg</h3>
          <p>Produto fictício para demonstração do catálogo virtual.</p>
        </article>
        <article class="card">
          <span class="tag">Higiene</span>
          <h3>Álcool em Gel</h3>
          <p>Item de cuidado e prevenção listado na plataforma.</p>
        </article>
        <article class="card">
          <span class="tag">Bem-estar</span>
          <h3>Vitamina C</h3>
          <p>Produto fictício para exemplo de organização em banco de dados.</p>
        </article>
      </div>
    </section>

    <section id="pedido" class="section form-section">
      <h2>Simulação de pedido</h2>
      <p>Este formulário representa o envio de dados que poderia ser processado por uma função AWS Lambda.</p>
      <form id="pedidoForm">
        <label>Nome do cliente
          <input type="text" id="cliente" placeholder="Digite o nome" required />
        </label>
        <label>Produto
          <select id="produto" required>
            <option value="Analgésico 500mg">Analgésico 500mg</option>
            <option value="Álcool em Gel">Álcool em Gel</option>
            <option value="Vitamina C">Vitamina C</option>
          </select>
        </label>
        <label>Quantidade
          <input type="number" id="quantidade" min="1" value="1" required />
        </label>
        <button type="submit">Registrar pedido</button>
      </form>
      <div id="resultado" class="resultado"></div>
    </section>

    <section id="arquitetura" class="section architecture">
      <h2>Serviços AWS utilizados</h2>
      <div class="cards">
        <article class="card">
          <h3>Amazon S3</h3>
          <p>Hospedagem de arquivos estáticos, imagens e documentos da plataforma.</p>
        </article>
        <article class="card">
          <h3>AWS Lambda</h3>
          <p>Processamento de pedidos sem gerenciamento de servidores.</p>
        </article>
        <article class="card">
          <h3>Amazon DynamoDB</h3>
          <p>Banco de dados NoSQL para produtos, clientes e pedidos.</p>
        </article>
      </div>
    </section>
  </main>

  <footer>
    <p>Projeto educacional - DIO | Abstergo Industries</p>
  </footer>
  <script src="script.js"></script>
</body>
</html>
