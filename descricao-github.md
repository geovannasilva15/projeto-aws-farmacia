:root {
  --primary: #1f6f78;
  --secondary: #0e3f46;
  --accent: #f2b84b;
  --background: #f5f8fa;
  --text: #1d2b32;
  --white: #ffffff;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: var(--background);
  color: var(--text);
}

.hero {
  min-height: 70vh;
  background: linear-gradient(135deg, var(--secondary), var(--primary));
  color: var(--white);
  padding: 24px;
}

.navbar {
  display: flex;
  align-items: center;
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
}

.logo {
  font-weight: 700;
  margin-right: auto;
  font-size: 1.25rem;
}

.navbar a {
  color: var(--white);
  text-decoration: none;
  font-weight: 600;
}

.hero-content {
  max-width: 900px;
  margin: 110px auto 0;
}

.hero-content h1 {
  font-size: clamp(2.3rem, 6vw, 4.8rem);
  line-height: 1.02;
  margin: 0 0 18px;
}

.hero-content p {
  max-width: 680px;
  font-size: 1.18rem;
  line-height: 1.6;
}

.button,
button {
  display: inline-block;
  background: var(--accent);
  color: #17242a;
  border: 0;
  border-radius: 999px;
  padding: 14px 22px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
}

.section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 64px 24px;
}

.section h2 {
  font-size: 2rem;
  margin-top: 0;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 20px;
}

.card {
  background: var(--white);
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 12px 28px rgba(31, 63, 70, 0.08);
}

.tag {
  display: inline-block;
  background: #e3f2f4;
  color: var(--primary);
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 0.85rem;
  font-weight: 700;
}

.form-section {
  background: var(--white);
  border-radius: 24px;
  box-shadow: 0 16px 32px rgba(31, 63, 70, 0.08);
}

form {
  display: grid;
  gap: 16px;
  max-width: 520px;
}

label {
  display: grid;
  gap: 8px;
  font-weight: 700;
}

input,
select {
  padding: 12px 14px;
  border: 1px solid #cfd9de;
  border-radius: 12px;
  font-size: 1rem;
}

.resultado {
  margin-top: 20px;
  padding: 16px;
  border-radius: 14px;
  background: #eaf7ef;
  display: none;
}

footer {
  text-align: center;
  padding: 32px;
  background: #102e35;
  color: var(--white);
}
