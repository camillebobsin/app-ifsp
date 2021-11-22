import React, { useState } from 'react'
import Estilo from '../components/estilo'
import { View, Text, Pressable, TextInput, Alert } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import api from '../services/api'

const login = () => {
    const navigation = useNavigation()

    const [prontuario, setProntuario] = useState('')
    const [senha, setSenha] = useState('')

    async function sendLogin(){
        const body = {
            prontuario,
            senha
        }
        const response = await api.post('login', body);
        const status = response.data.status
        if(response.data.status == 'ok'){
            let aluno = response.data.aluno
            navigation.navigate('TelaInicial', { aluno })
        } else {
            Alert.alert(
            "Erro",
            `${status}`
        );
        }
        // Alert.alert(
        //     "Login realizado",
        //     `Nome: ${ok}`,
        // );
        // console.log("send login")
        // const response = await fetch('http://192.168.0.8:3333/login', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ prontuario: prontuario, senha: senha })
        // }) 
        // const ok = response.data.status
        // Alert.alert(
        //     "send login",
        //     `Nome: ${ok}`,
        //   );
        // console.log(response)
        // if(response.data.status == 'ok'){
        //     let aluno = response.data.aluno
        //     navigation.navigate('TelaInicial', { aluno })
        // } else {
        //     console.log(response.data.status)
        // }
    }


    return (
        <View style={Estilo.container}>
            <View style={[Estilo.box, Estilo.logo]}>
                <Text style={[styles.mke]}>MKE</Text>
            </View>

            <Text style={styles.login}>login</Text>

            <TextInput style={[Estilo.box, Estilo.boxLogin]} keyboardType = 'numeric' placeholder="usuário" onChangeText={text => setProntuario(text)}/>

            <TextInput style={[Estilo.box, Estilo.boxLogin, Estilo.boxLoginSenha]} secureTextEntry={true} placeholder="senha" onChangeText={text => setSenha(text)}/>

            <Pressable style={[Estilo.box, Estilo.login]} onPress = {() => sendLogin() }>
                <Text style={[styles.texto, styles.botaoLogin]}>login</Text>
            </Pressable>

            <Pressable style={[Estilo.box, Estilo.devolucao, Estilo.registrar]} onPress = {() => navigation.navigate('TelaCadastro') }>
                <Text style={[styles.texto, styles.registrar]}>registrar-se</Text>
            </Pressable>

        </View>
    )
}

export default login


EStyleSheet.build({
    $corPreto: '#000000',
})

const styles = EStyleSheet.create({
    texto: {
        textAlign: "center",
        color: '$corPreto',
        fontWeight: "normal",
        lineHeight: 43,
        fontSize: 16
    },
    registrar: {
        fontSize: 18,
        lineHeight: 21
    },
    mke: {
        textAlign: "center",
        color: '$corPreto',
        lineHeight: 43,
        fontSize: 36
    },
    prontuario: {
        marginTop: '9.5rem',
        fontSize: 15,
        lineHeight: 15,
        alignSelf: "center"
    },
    login: {
        marginTop: '9.375rem',
        fontSize: 33,
        lineHeight: 40,
        alignSelf: "center"
    },
    botaoLogin: {
        fontSize: 20,
        lineHeight: 21
    }
})