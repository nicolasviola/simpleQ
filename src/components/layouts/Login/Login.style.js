// Dependencies:
import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({

  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },

  header: {
    height: '10%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  buttonStyle: {
    marginLeft: 10,
    marginRight: 10,
    height: '80%',
    width: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  textTitleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textTitle: {
    color: '#009ED9',
    fontWeight: '700',
    fontSize: 20,
    marginTop: 10,
  },

  childrenContainer: {

  },

})
