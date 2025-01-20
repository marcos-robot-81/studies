import React, { useEffect } from "react"
import { Botao } from "../botao"
import style from './cronometro.module.scss'
import Relogio from "./relogio"
import { tempoParaSegundos } from "../../common/utils/time"
import { ITarefas } from "../../types/tarefa"
import { useState } from "react"

interface props{
    selecionado: ITarefas | undefined,
    finalizaTarefa: () => void;
}


export default function Cronometro({selecionado, finalizaTarefa}: props) {



    const [tempo, setTempo] = useState<number>();

    function regrassiva(contador: number = 0){
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador-1);
                return regrassiva(contador -1);
            }
            finalizaTarefa();
        }, 1000);
    }
    


    useEffect(()=>{
        if(selecionado?.tempo){setTempo(tempoParaSegundos(selecionado?.tempo))}
    }, [selecionado])
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolja um card e inicie o cronõmetro</p>
            
            <br/>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <br/>
            <Botao texto='começar!' onClick={()=> regrassiva(tempo)}/>
        </div>
    )
}
