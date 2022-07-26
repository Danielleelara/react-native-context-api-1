import { useContext } from 'react';
import { Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { estilos } from './estilos';
import { TemaContext } from "../../contexts/TemaContext";
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { ProdutosContext } from '../../contexts/ProdutosContext';

export default function Finalizar({navigation}) {
  const { temaEscolhido } = useContext(TemaContext);
  const { usuario } = useContext(AutenticacaoContext);
  const { quantidade, carrinho, ultimosVistos } = useContext(ProdutosContext);

  const estilo = estilos(temaEscolhido)


  return (
    <View style={estilo.container}>
      <Text style={estilo.texto} >{usuario.nome}</Text>
      <StatusBar />
      <TouchableOpacity style={estilo.botao} onPress={()=> navigation.navigate('Principal')}>
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

