import React from 'react'
import * as S from './style'

let fechado = true;

export default function TelaLateralApp() {


    function fecharTelaLateral() {
        if (!fechado) {
            telaLateral.style.width = "0%";
            telaLateral.style.marginLeft = "-2%";
            fechado = true;
        }else{
            telaLateral.style.width = "19.5%";
            telaLateral.style.marginLeft = "0.5%";
            fechado = false
        }
    }

    return (
        <>
            <S.TelaLateralApp id="telaLateral">
                <S.BtnFecharTela onClick={fecharTelaLateral}>

                </S.BtnFecharTela>
            </S.TelaLateralApp>
        </>
    )
}

export {fechado}
