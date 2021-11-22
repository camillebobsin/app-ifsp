import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import TelaInicial from './views/TelaInicial'
import TelaKit from './views/TelaKit'
import TelaCodigo from './views/TelaCodigo'
import TelaCadastro from './views/TelaCadastro'
import TelaLogin from './views/TelaLogin'

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <TelaInicial />
        <TelaKit />
        <TelaCodigo />
        <TelaCadastro />
        <TelaLogin />
    </SafeAreaView>
)