import api from "../api";

export async function salvarProduto(produto){
  try {
    const resultado = await api.post('/produtos', produto);
    console.log(resultado.data)
    return resultado.data 

  } catch (error) {
    console.log(error)
    return {}
  }
}

export async function pegarProdutos(){
  try {
    const resultado = await api.get('/produtos');
    console.log(resultado.data)
    return resultado.data 

  } catch (error) {
    console.log(error)
    return []
  }
}