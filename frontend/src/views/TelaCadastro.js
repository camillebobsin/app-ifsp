import React, { useState, useEffect } from 'react'
import Estilo from '../components/estilo'
import { View, Text, Pressable, TextInput, KeyboardAvoidingView } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import api from '../services/api'

const cadastro = () => {
    const navigation = useNavigation()

    // const [aluno, setAluno] = useState([])
    const [nome, setNome] = useState('')
    const [prontuario, setProntuario] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [permissao, setPermissao] = useState('aluno')

    // async function sendCadastro(){
    //     const response = await api.get('alunos')
    //     setAluno(response.data)
    // }

    // useEffect(() => {
    //     sendCadastro()
    // }, [])

    async function sendCadastro(){
        const response = await fetch('http://192.168.0.8:3333/alunos', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome: nome, prontuario: prontuario, email: email, senha: senha, permissao: permissao })
        }) 
        navigation.navigate('TelaLogin')
    }


    return (
        <View style={Estilo.container}>

                <View style={[Estilo.box, Estilo.logo]}>
                    <Text style={[styles.mke]}>MKE</Text>
                </View>

                <Text style={styles.cadastro}>cadastro</Text>

                <TextInput style={[Estilo.box, Estilo.boxCadastro]} placeholder="nome" onChangeText={text => setNome(text)}/>
                <TextInput style={[Estilo.box, Estilo.boxCadastro, Estilo.boxCadastroProntuario]} keyboardType = 'numeric' placeholder="prontuário" onChangeText={text => setProntuario(text)}/>
                <Text style={[styles.prontuario]}>o prontuario será o seu número de usuário</Text>
                <TextInput style={[Estilo.box, Estilo.boxCadastro, Estilo.boxCadastroEmail]} placeholder="email" onChangeText={text => setEmail(text)}/>
                <TextInput style={[Estilo.box, Estilo.boxCadastro, Estilo.boxCadastroSenha]} secureTextEntry={true} placeholder="senha" onChangeText={text => setSenha(text)}/>

                <Pressable style={[Estilo.box, Estilo.back]} title='back' onPress = {() => navigation.navigate('TelaLogin')}>
                    <Text style={styles.back}>↺</Text>
                </Pressable>

                <Pressable style={[Estilo.box, Estilo.devolucao, Estilo.botaoCadastro]} onPress = {() => { sendCadastro() }}>
                    <Text style={[styles.texto, styles.registrar]}>registrar-se</Text>
                </Pressable>

        </View>
    )
}

export default cadastro


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
        marginTop: '9.95rem',
        fontSize: 15,
        lineHeight: 15,
        alignSelf: "center"
    },
    cadastro: {
        marginTop: '8.75rem',
        fontSize: 33,
        lineHeight: 40,
        alignSelf: "center"
    },
    back: {
        fontSize: 19,
        lineHeight: 21
    }
})