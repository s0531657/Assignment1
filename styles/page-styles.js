import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,
    width: '80%',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
  },
 

  
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
    marginBottom: 5,
  },
  story: {
    fontSize: 16,
    marginVertical: 10,
  },
  signatureBox: {
    alignSelf: 'stretch', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 20,
    marginBottom: 20,
    padding: 30,
    borderWidth: 1,
    borderColor: 'black',
  
  },
  signatureText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: -160,
  
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10, 
  },
  hallPass: {
    alignSelf: 'stretch',
    marginHorizontal: 40,
    padding: 50,
    borderColor: 'red',
    borderWidth: 1,
    alignItems: 'center',
  },
 
  verticalText: {
    fontSize: 40,
    fontWeight: 'bold',
    position: 'absolute',
    left: -80,
    top: '70%',
    transform: [{ translateY: -50 }, { rotate: '270deg' }],
  },

});

export default styles;
