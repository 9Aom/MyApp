import React from "react";
import { Icon } from "react-native-vector-icons/FontAwesome";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const App = () => (
  <View style={{ backgroundColor: '#000',flex: 1}} >
    <View style={styles.Top} >
      <Text style={styles.textStyle} >
        Calculator
      </Text>
    </View>
      <View style={styles.Sec} >
        <View style={styles.SecText} >
          <Text style={{fontSize: 50, color: 'white'}} >  </Text>
        </View>
      </View>

{/* Numboard */}
  <View style={styles.NumBoard} >
    {/* Info Num */}
    <View style={styles.NumS} >
      <TouchableOpacity>
      <Text style={styles.NumSstyle} >AC</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.NumS} >
      <TouchableOpacity>
      <Text style={styles.NumSstyle} >%</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.NumS} >
      <TouchableOpacity>
      <FontAwesomeIcon icon="fa-solid fa-delete-left" />
      </TouchableOpacity>
    </View>
  </View>

  </View>
)
const styles = StyleSheet.create({
  Top: {
    marginTop: 30,
    paddingVertical: 8,
    borderWidth: 4,
    borderRadius: 6,
    backgroundColor: '#000',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  textStyle: {
    color: '#fff',
    fontSize: 20
  },
  Sec: {
    justifyContent: 'flex-end',
    backgroundColor: '#1f1f1f',
    width: 'auto',
    height: '26%'
  },
  SecText: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  NumBoard: {
    backgroundColor: '#000',
    flex: 1,
    flexDirection: 'row'

  },
  NumS: {
    margin: 10,
    backgroundColor: '#fff',
    width: 80,
    height: 80,
    borderRadius: 100/2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#919191'
  },
  NumSstyle: {
    fontSize: 40,
    color: '#fff'
  }
})
export default App;