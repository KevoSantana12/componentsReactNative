import ThemedCard from 'presentation/shared/ThemedCard';
import ThemedSwitch from 'presentation/shared/ThemedSwitch';
import ThemedView from 'presentation/shared/ThemedView';
import React, { useState } from 'react';
import { Switch, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const Switches = () => {


  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  })



  return (
    <ThemedView margin className='mt-2'>
      <ThemedCard>
        <ThemedSwitch
          text='Active'
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className='mb-4'
        />

        <ThemedSwitch
          text='Hambriento'
          value={state.isHungry}
          onValueChange={(value) => setState({ ...state, isHungry: value })}
          className='mb-4'
        />

        <ThemedSwitch
          text='Feliz'
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          className='mb-4'
        />

      </ThemedCard>

    </ThemedView>
  );
};
export default Switches;