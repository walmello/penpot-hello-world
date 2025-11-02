// Esse código roda dentro do sandbox do Penpot
console.log("👋 Hello Penpot plugin!");

// Quando o plugin é carregado
window.addEventListener("message", (event) => {
  console.log("Mensagem do Penpot:", event.data);
});

// Manda uma mensagem pro Penpot só pra testar
window.parent.postMessage({ type: "hello", message: "Olá do plugin!" }, "*");
