function calcular() { 


    let div = document.getElementById('resultado');

    let tituloInput = document.getElementById('titulo').value; 
    let autorInput  = document.getElementById('autor').value;
    let paginaInput = document.getElementById('pagina').value;
    let diasInput  = document.getElementById('dia').value;

    const arrPessoa = []


        const pessoa ={

            titulo: tituloInput,
            autor: autorInput,
            pagina: paginaInput,
            dia: diasInput,
            resultado: resultado(diasInput, paginaInput), 
           
        }

        arrPessoa.push(pessoa)

        imprimir()

        console.log(arrPessoa);

        function resultado(dias, paginas) { 

            return paginas / dias; 

        }


        function imprimir(){


            for(let i = 0; arrPessoa.length; i++){
            div.innerHTML += `
            <tr>
                <td>${arrPessoa[i].titulo}</td> 
                <td>${arrPessoa[i].autor}</td>
                <td>${arrPessoa[i].pagina}</td>
                <td>${arrPessoa[i].dia}</td>
                <td>${arrPessoa[i].resultado + ' páginas por dia'}</td>
            </tr>
            `}
            }
}