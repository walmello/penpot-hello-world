// plugin.js

// Abre a janela (iframe) do plugin dentro do Penpot
penpot.ui.open("Hello Plugin", "/index.html", {
  width: 400,
  height: 200
});

// Envia uma mensagem inicial para a UI (iframe)
penpot.ui.sendMessage({ type: "greet", text: "Olá do Penpot!" });
