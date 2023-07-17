import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity,Text } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import Physics from './physics';
import { useEffect, useState } from 'react';
import ControlButtons from './components/ControlButtons';
import Matter from 'matter-js';
import Mario from './components/Mario'


let engine = Matter.Engine.create({enableSleeping:false})   


export default function App() {
  rightMario = () => {
    
     
  }

  leftMario = () => {

  }

  const [running, setRunning] = useState(false)
  useEffect(() => {
    setRunning(true)
  }, [])

  return (
    <View style={styles.container}>
      <GameEngine
        systems={[Physics]}
        running={running}
        style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}
        entities={entities()}>

      </GameEngine>
      
      {/* ControlButton */}
      {/* <ControlButtons/> */}
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffd0',
  },
  btn: {
    height: 80,
    width: 80,
    backgroundColor: "blue",
    borderRadius: 10,
    margin: 2,
  },
  controlButtons: {
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 200,
    height: 200,
    flexDirection: 'column',
  },

  upperButton: {
    width: 200,
    height: 100,
    alignItems: 'center',
  },
  lowerBUttons: {
    width: 200,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
});
