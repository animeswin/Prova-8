function converter(){
  const metros = Number(document.querySelector("#metros").value)
  const unidade = document.querySelector("#unidade").value
  let resultado

  if (isNaN(metros) || metros < 0) {
    alert("Por favor, insira um valor válido em metros.")
    return
  }

  switch (unidade) {
    case "jardas":
      resultado = metros * 1.094
      break
    case "pes":
      resultado = metros * 3.281
      break
    case "polegadas":
      resultado = metros * 39.37
      break
    case "milhas":
      resultado = metros * 0.000621
      break
    default:
      resultado = "Unidade de conversão inválida."
  }

  document.querySelector("#resultado").innerText = `${resultado.toFixed(
    4
  )} ${unidade}`
}