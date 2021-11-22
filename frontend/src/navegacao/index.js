import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'

import Tab from './Tab'

export default props => (
    <View style={{flex: 1}}>
        <StatusBar
            backgroundColor="red"
            barStyle={`dark-content`}
            hidden={false} />
        <NavigationContainer screenOptions={{ headerShown: false}}>
            <Tab screenOptions={{ headerShown: false}}/>
        </NavigationContainer>
    </View>
)