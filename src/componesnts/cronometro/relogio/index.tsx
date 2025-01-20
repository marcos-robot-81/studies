import React from "react"
import style from'./relogio.module.scss'

interface props{
    tempo: number | undefined
}

export default function Relogio({ tempo = 0}: props){

    const minutos = Math.floor(tempo / 60);
    const segudos = tempo%60;
    const [minutosDezena, minutosUnidade] = String(minutos)
    .padStart(2,'0');
    const [segundoDezena, segundoUnidade] = String(segudos)
    .padStart(2,'0');


    return(
        <>
        <span className={style.relogioNumero}>{minutosDezena}</span>
        <span className={style.relogioNumero}>{minutosUnidade}</span>
        <span>:</span>
        <span className={style.relogioNumero}>{segundoDezena}</span>
        <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}