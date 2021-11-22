import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

EStyleSheet.build({
    $corFundo: '#ffffff', $corPreto: '#000000',
    $corAzul: '#d7e9f7', $corRosa: '#f7d5e0',
    $corAmarelo: '#f4d19b', $corVerde: '#cbeeca',
    $sizeBox: '7.125rem', $sizeLogo: '7rem', $logoR: '3.5rem',
    $bWidth: '0.125rem', $bRadius: '0.625rem',
    $sO: '0.016rem', $sR: '0.313rem', $sW: '0.625rem', $sH: '1.563rem', $sE: '0.438rem',
    $boxWG: '10rem', $boxHG: '2.688rem',
    $boxWP: '8.75rem', $boxHP: '2.313rem',
    $bkTL: '0.625rem', $bkWH: '3.125rem', $bkR: '1.563rem'
})

export default EStyleSheet.create({
    container: {
        backgroundColor: '$corFundo',
        padding: '1.5rem',
        flex: 1
    },
    box: {
        borderWidth: '$bWidth', 
        borderColor: '$corPreto', 
        borderRadius: '$bRadius',
        shadowColor: '$corPreto', 
        shadowOpacity: '$sO', 
        shadowRadius: '$sR', 
        shadowOffset: {width: '$sW', heigth: '$sH',}, 
        elevation: '$sE',
        color: '$corPreto', 
        fontSize: 36, 
        fontWeight: "normal",
        position: "absolute", 
        lineHeight: 43, 
        alignItems: "center",
        justifyContent: "center"
    }, 
    boxSquareA: {
        backgroundColor: '$corAmarelo',
        width: '$sizeBox', 
        height: '$sizeBox',
        marginTop: '18rem', 
        marginLeft: '3.625rem'
    },
    boxKitA: {
        backgroundColor: '$corAmarelo',
        width: '$sizeBox', 
        height: '$sizeBox',
        top: '6.813rem', 
        alignSelf: "center"
    },
    boxSquareV: {
        backgroundColor: '$corVerde',
        width: '$sizeBox', 
        height: '$sizeBox',
        marginTop: '18rem', 
        marginLeft: '13.75rem',
    },
    boxKitV: {
        backgroundColor: '$corVerde',
        width: '$sizeBox', 
        height: '$sizeBox',
        top: '6.813rem', 
        alignSelf: "center"
    },
    devolucao: {
        backgroundColor: '$corAzul',
        width: '$boxWG', 
        height: '2.875rem',
        marginTop: '28.75rem',
        alignSelf: "center",
        textAlign: "center", 
        textAlignVertical: "center"
    },
    problema: {
        backgroundColor: '$corAzul',
        width: '9.375rem', 
        height: '$boxHP',
        alignSelf: "center",
        marginTop: '34.688rem', 
        textAlign: "center", 
        textAlignVertical: "center"
    },
    gerar: {
        backgroundColor: '$corAzul',
        width: '$boxWG', 
        height: '$boxHG',
        marginTop: '31.25rem',
        alignSelf: "center",
        textAlign: "center", 
        textAlignVertical: "center"
    },
    back: {
        width: '$bkWH', 
        height: '$bkWH', 
        borderRadius: '$bkR',
        marginTop: '1.875rem', 
        marginLeft: '0.938rem',
        backgroundColor: '$corAzul',
        fontSize: 36,
        textAlign: "center", 
        textAlignVertical: "center"
    },
    logo: {
        width: '$sizeLogo', 
        height: '$sizeLogo', 
        borderRadius: '$logoR',
        marginTop: '1.875rem', 
        alignSelf: "center",
        backgroundColor: '$corRosa', 
        textAlign: "center", 
        textAlignVertical: "center"
    },
    codigo: {
        backgroundColor: '$corRosa',
        width: '18.75rem', 
        height: '3.125rem',
        marginTop: '11.875rem',
        alignSelf: "center",
        fontSize: 33,
        lineHeight: 39,
        textAlign: "center", 
        textAlignVertical: "center"
    },
    boxCod: {
        backgroundColor: '#F1F0F0',
        width: '18.75rem', 
        height: '4.375rem',
        marginTop: '14.375rem',
        alignSelf: "center",
        textAlign: "center", 
        textAlignVertical: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    ativar: {
        backgroundColor: '$corVerde',
        width: '11.875rem', 
        height: '2.875rem',
        marginTop: '28.75rem',
        alignSelf: "center",
        textAlign: "center", 
        textAlignVertical: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    boxCadastro: {
        backgroundColor: '#F4D19B',
        width: '18.75rem', 
        height: '2.813rem',
        marginTop: '14.375rem',
        alignSelf: "center",
        padding: 10,
        textAlignVertical: "center",
        alignItems: "center",
        justifyContent: "center",
        color: '$corPreto',
        fontWeight: "normal",
        lineHeight: 29,
        fontSize: 24
    },
    boxCadastroProntuario: {
        marginTop: '18.75rem'
    },
    boxCadastroEmail: {
        marginTop: '24.063rem'
    },
    boxCadastroSenha: {
        marginTop: '28.438rem'
    },
    botaoCadastro: {
        marginTop: '34.45rem'
    },
    boxLogin: {
        backgroundColor: '#F4D19B',
        width: '18.75rem', 
        height: '2.813rem',
        marginTop: '15.625rem',
        alignSelf: "center",
        padding: 10,
        textAlignVertical: "center",
        alignItems: "center",
        justifyContent: "center",
        color: '$corPreto',
        fontWeight: "normal",
        lineHeight: 29,
        fontSize: 24
    },
    boxLoginSenha: {
        marginTop: '20rem'
    },
    login: {
        backgroundColor: '$corVerde',
        width: '11.875rem', 
        height: '2.875rem',
        marginTop: '26.25rem',
        alignSelf: "center",
        textAlign: "center", 
        textAlignVertical: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    registrar: {
        marginTop: '33.125rem'
    }
})
