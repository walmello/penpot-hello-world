penpot.ui.open("Hello (JS puro)", "https://playful-arithmetic-369e90.netlify.app/index.html", {
  width: 400,
  height: 200
});
penpot.ui.sendMessage({ type: "plugin_loaded" });  // Envia uma mensagem para o frontend

// Função para acessar objetos selecionados
async function getSelectedObjects() {
  const selection = await penpot.selection.get();  // Pega os objetos selecionados
  console.log("Objetos selecionados:", selection);  // Mostra no console
  penpot.ui.sendMessage({ type: "selected_objects", data: selection });  // Envia os dados para o frontend
}

// Chama a função assim que o plugin é carregado
getSelectedObjects();
