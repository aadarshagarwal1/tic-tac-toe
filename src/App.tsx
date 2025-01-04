import {
  Appearance,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Space from './components/Space';
import Snackbar from 'react-native-snackbar';
import styles from './styles';
export default function App() {
  const onSpacePress = (index: number) => {
    if (winner.length < 1) {
      winCheck();
      const row = Math.floor(index / 3);
      const col = index % 3;
      if (data[row][col] === '') {
        setData(initialData => {
          let returnData = initialData;
          returnData[row][col] = currentPlayer;
          return returnData;
        });
        setCurrentPlayer(prev => {
          return prev.toString() === '✕' ? '◯' : '✕';
        });
        winCheck();
      } else {
        Snackbar.show({
          text: 'Choose different space.',
          backgroundColor: 'black',
          textColor: 'white',
        });
      }
    } else {
      Snackbar.show({
        text: 'Start new game.',
        backgroundColor: 'black',
        textColor: 'whtie',
      });
    }
    if(winner.length<1){drawCheck();}
  };
  const reset = () => {
    setData([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    setWinner('');
    setCurrentPlayer('✕');
    setIsDraw(false);
    Snackbar.dismiss();
  };
  const winCheck = () => {
    for (let i = 0; i < data.length; i++) {
      allElementEqual(data[i]);
    }
    let transposedData: string[][] = [[], [], []];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        transposedData[j][i] = data[i][j];
      }
    }
    for (let i = 0; i < transposedData.length; i++) {
      allElementEqual(transposedData[i]);
    }

    let diagonalArray: string[][] = [[], []];
    for (let i = 0, j = 0; i < data.length; i++, j++) {
      const element = data[i][j];
      diagonalArray[0].push(element);
    }
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        if (i + j === data.length - 1) {
          const el = data[i][j];
          diagonalArray[1].push(el);
        }
      }
    }
    for (let i = 0; i < diagonalArray.length; i++) {
      allElementEqual(diagonalArray[i]);
    }
  };
  const allElementEqual = (arr: string[]) => {
    if (arr[0].length < 1) return null;
    const el = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (!(arr[i] === el)) {
        return null;
      }
    }
    setWinner(el);
  };
  const drawCheck = () => {
    if (winner.length < 1) {
      for (let i = 0; i < data.flat().length; i++) {
        if (data.flat()[i].length < 1) return null;
      }
      setIsDraw(true);
    }
  };

  const [currentPlayer, setCurrentPlayer] = useState('✕');
  const [data, setData] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [winner, setWinner] = useState('');
  const [isDraw, setIsDraw] = useState(false);
  return (
    <View>
      <Text style={styles.headingText}>TIC TAC TOE</Text>
      {!(isDraw || winner.length > 0) && (
        <View style={styles.playerContainer}>
          <Text style={styles.playerContainerText}>
            Player {currentPlayer}'s turn
          </Text>
        </View>
      )}
      <View style={styles.spaceContainer}>
        <FlatList
          data={data.flat()}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          renderItem={item => (
            <TouchableOpacity onPress={() => onSpacePress(item.index)}>
              <Space character={item.item} />
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={reset}>
        <Text style={styles.resetText}>RESET</Text>
      </TouchableOpacity>

      {winner.length > 0 && (
        <Text style={styles.headingText}>PLAYER {winner} WINS!</Text>
      )}
      {isDraw && <Text style={styles.headingText}>DRAW!</Text>}
    </View>
  );
}
