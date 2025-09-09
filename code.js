let valores_Postos = [];
            let soma_total_Valores_Pesquisados = 0;
            let media;
            let menor_Valor_Pesquisado = 0.0;
            let gasto_Diario;

            function verificar_Resposta(converter_Variavel, pergunta_Usuario){
                let resposta_Usuario = converter_Variavel(prompt(pergunta_Usuario));

                while(isNaN(resposta_Usuario) || resposta_Usuario <= 0){
                    resposta_Usuario = converter_Variavel(prompt(pergunta_Usuario + '\n (Aceita somente números e que sejam maior que 0)'));
                }
                return resposta_Usuario;
            }

            let distancia_Percorrida = verificar_Resposta(parseFloat, 'Qual a distância percorrida da sua casa até seu trabalho (em km)?');
            let consumo_Medio = verificar_Resposta(parseFloat, 'Qual o consumo médio do seu veículo (em km/L)?');

            let consumo_NecessarioLitros = distancia_Percorrida / consumo_Medio;
            alert(`O consumo necessário é ${consumo_NecessarioLitros} litros`);

            let quantidade_Postos_Pesquisados = verificar_Resposta(parseInt, 'Em quantos postos você pesquisou?');

            for (let i = 1; i <= quantidade_Postos_Pesquisados; i++) {
                valores_Postos[i] = verificar_Resposta(parseFloat, `Digite o valor encontrado (em R$) no posto ${i}:`);

                soma_total_Valores_Pesquisados += valores_Postos[i];
                if(i === 1){
                    menor_Valor_Pesquisado = valores_Postos[i];
                }
                if(menor_Valor_Pesquisado > valores_Postos[i]){
                    menor_Valor_Pesquisado = valores_Postos[i];
                }
            }
            gasto_Diario = 2 * (consumo_NecessarioLitros * menor_Valor_Pesquisado);

            media = parseFloat(soma_total_Valores_Pesquisados / quantidade_Postos_Pesquisados);

            function quebrar_Linhas(texto) {
                return document.writeln(texto + "<br>");
            }

            quebrar_Linhas(`O consumo necessário é ${consumo_NecessarioLitros} litros`);
            quebrar_Linhas(`O menor valor pesquisado é R$ ${menor_Valor_Pesquisado}`);
            quebrar_Linhas(`A média dos valores pesquisados é R$ ${media}`);
            quebrar_Linhas(`O gasto diário (ida e volta) é R$ ${gasto_Diario}`);