//estilização
import "./style.css";

//componentes
import CardBolo from "../../components/CardBolo";

//api
import api from "../../utils/api";

//hooks -> e funcionalidade
import { useEffect, useState } from "react";


function ListaBolo() {
    //js
    // const listaBolo = [];

    //react 
    // setBolos([1,2,3]);
    //bolos => ver o valor
    //serBolos => atribuir um novo valor

    //useState<any[] => o tipo do valor que pode receber 
    //([]) => e valor inicial
    //atribuindo valor react
    //visualizar valor em js e react 
    //bolos

    const [bolos, setBolos] = useState<any[]>([]);

    function listarBolos() { }
        //http://localhost:3000/bolos
        api.get("bolos")
        .then((Response)=>{
            /*then e quando api da retorno positivo */

            //atualiza o valor da variavel bolos
            //pelo retorno da api 
            setBolos(Response.data);

            console.log(Response.data);
            
        })
        .catch((error)=>{
           /*catch e quando api da retorno negativo */ 

            console.log(error);
        });

    // useEffect e acionado quando o componente e inicializado ou modificado
    useEffect(() => {
        //e acionada quando meu componente e inicalizado 
        listarBolos();
    }, [
        /*monitora*/

    ]);


    return (
        <main>
            <section className="lista container">
                <h1>Lista de Bolos</h1>

                {/* CARDBOLO */}

            </section>
        </main>
    );
};

export default ListaBolo;