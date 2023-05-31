function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/perfil.jpeg")
    img.setAttribute("alt", "Caricatura do Fockah com fundo verde.")
  } else {
    img.setAttribute("src", "./assets/fockah.png")
    img.setAttribute(
      "alt",
      "Foto de perfil do canal do fockah. Com uma fockah em cima de uma cadeira gamer preta, com um fundo azul."
    )
  }
}
