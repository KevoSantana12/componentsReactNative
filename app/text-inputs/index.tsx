import ThemedCard from 'presentation/shared/ThemedCard';
import ThemedText from 'presentation/shared/ThemedText';
import ThemedTextInput from 'presentation/shared/ThemedTextInput';
import ThemedView from 'presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const isIOS = Platform.OS === 'ios'

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? 'height' : undefined}

    >
      <ScrollView>
        <ThemedView margin>
          <ThemedCard className='mb-5'>
            <ThemedTextInput
              placeholder='Nombre Completo'
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />

            <ThemedTextInput
              placeholder='Correo electronico'
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setForm({ ...form, email: text })}
            />

            <ThemedTextInput
              placeholder='Telefono'
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />

          </ThemedCard>

          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
