import {StyleSheet, Appearance} from 'react-native';

const styles = StyleSheet.create({
  spaceContainer: {alignItems: 'center', justifyContent: 'center'},
  headingText: {
    color: Appearance.getColorScheme() === 'light' ? 'black' : 'white',
    fontSize: 40,
    textAlign: 'center',
    margin: 20,
    fontWeight: 900,
  },
  playerContainer: {
    backgroundColor: 'grey',
    marginHorizontal: 30,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerContainerText: {
    fontSize: 30,
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
  resetText: {
    fontSize: 30,
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
  resetButton: {
    backgroundColor: 'grey',
    marginTop: 30,
    marginHorizontal: 70,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
