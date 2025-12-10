import { View, Text, TextInputProps } from 'react-native'
import React, { useState } from 'react'
import ThemedView from './ThemedView';
import ThemedCard from './ThemedCard';
import { TextInput } from 'react-native-gesture-handler';


interface Props extends TextInputProps {
    className?: string
}

const ThemedTextInput = ({ className, ...rest }: Props) => {

    return (
        <TextInput
            className='py-4 px-2 text-black dark:text-white'
            placeholderTextColor='grey'
            {...rest}
        />
    )
}

export default ThemedTextInput