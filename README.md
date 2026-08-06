# 🚀 Projeto de Estudos React

Este projeto foi desenvolvido com o objetivo de praticar os principais conceitos do React, incluindo componentização, gerenciamento de estado, consumo de APIs, hooks e operações CRUD.

---

## 📋 Sobre o Projeto

A aplicação foi criada como parte de estudos em React para consolidar conhecimentos sobre desenvolvimento Front-End moderno.

### Principais conceitos praticados:

- Componentes reutilizáveis
- Props
- State
- Hooks
- Custom Hooks
- Requisições HTTP
- CRUD
- Renderização condicional
- Manipulação de formulários
- Tratamento de erros
- Loading de requisições

---

## 🛠️ Tecnologias Utilizadas

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- JSON Server
- Git
- GitHub

---

## 📁 Estrutura do Projeto

```bash
src/
├── components/
├── hooks/
├── pages/
├── styles/
├── App.js
├── index.js
└── db.json
```

---

## ⚙️ Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Entrar na pasta do projeto

```bash
cd seu-repositorio
```

### 3. Instalar as dependências

```bash
npm install
```

---

## ▶️ Executando o Projeto

Inicie a aplicação React:

```bash
npm start
```

A aplicação estará disponível em:

```txt
http://localhost:3000
```

---

## 🗄️ Executando o JSON Server

Caso o projeto utilize uma API Fake com JSON Server:

```bash
npx json-server --watch db.json --port 3001
```

A API ficará disponível em:

```txt
http://localhost:3001/products
```

---

## 📦 Funcionalidades

- ✅ Listagem de produtos
- ✅ Cadastro de novos produtos
- ✅ Exclusão de produtos
- ✅ Consumo de API REST
- ✅ Atualização automática da interface
- ✅ Tratamento de erros
- ✅ Estado de carregamento
- ✅ Utilização de Custom Hooks

---

## 🧠 Conceitos Aplicados

### useState

Permite criar e gerenciar estados dentro dos componentes.

```javascript
const [products, setProducts] = useState([]);
```

### useEffect

Executa efeitos colaterais como chamadas para APIs.

```javascript
useEffect(() => {
  fetchData();
}, []);
```

### Custom Hooks

Utilização de hooks personalizados para reutilização de lógica.

```javascript
const { data, loading, error } = useFetch(url);
```

### CRUD

Operações implementadas:

- Create
- Read
- Update
- Delete

---

## 📸 Demonstração

Adicione aqui imagens ou GIFs da aplicação.

```md
!/screenshots/home.png

./screenshots/cadastro.png
```

---

## 🚀 Próximos Passos

- [ ] React Router
- [ ] Context API
- [ ] Redux Toolkit
- [ ] TypeScript
- [ ] Testes unitários
- [ ] Responsividade avançada
- [ ] Integração com API real
- [ ] Deploy na Vercel

---

## 🎯 Objetivo do Projeto

Este projeto foi criado exclusivamente para fins de estudo, prática e aperfeiçoamento das habilidades em React.js e desenvolvimento Front-End.

---

## 🤝 Contribuições

Sinta-se à vontade para contribuir com melhorias.

### Fork do projeto

```bash
git fork
```

### Criar uma branch

```bash
git checkout -b minha-feature
```

### Commitar alterações

```bash
git commit -m "feat: adicionando nova funcionalidade"
```

### Enviar alterações

```bash
git push origin minha-feature
```

### Abrir Pull Request

Após enviar as alterações, abra um Pull Request para análise.

---

## 👨‍💻 Autor

### João Paulo Castro dos Santos

GitHub:

```txt
https://github.com/seu-usuario
```

LinkedIn:

```txt
https://linkedin.com/in/seu-perfil
```

---

## 📜 Licença

Este projeto é destinado exclusivamente para fins educacionais e de aprendizado.

---

⭐ Caso tenha gostado do projeto, não esqueça de deixar uma estrela no repositório.