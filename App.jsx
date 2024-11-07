import React, {useState} from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const Display = () => {
const [display, setDisplay] = useState('');
};

const Press = ( value ) => {
  setDisplay((prev) => prev + value);
};

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
  <View>
    {['1','2','3','4','5','6','7','8','9','0','00','.'].map((num) => ( 
      <View style={styles.NumBoard} >
      {/* Info Num */}
        <TouchableOpacity>
      <View style={styles.NumS} >
        <Text style={styles.NumSstyle} >AC</Text>
      </View>
        </TouchableOpacity>
        <TouchableOpacity>
      <View style={styles.NumS} >
        <Text style={styles.NumSstyle} >%</Text>
      </View>
        </TouchableOpacity>
        <TouchableOpacity>
      <View style={styles.NumS} >
          <Text style={styles.NumSstyle} >Del</Text>
      </View>
        </TouchableOpacity>
        <TouchableOpacity>
      <View style={styles.NumS2} >
          <Text style={styles.NumSstyle} >/</Text>
      </View>
        </TouchableOpacity>
    </View>

    

     ) )};
      
  
  <View style={styles.NumBoard} >
    {/* Info Num */}
      <TouchableOpacity>
    <View style={styles.NumS3} >
      <Text style={styles.NumSstyle} >4</Text>
    </View>
      </TouchableOpacity>
      <TouchableOpacity>
    <View style={styles.NumS3} >
      <Text style={styles.NumSstyle} >5</Text>
    </View>
      </TouchableOpacity>
      <TouchableOpacity>
    <View style={styles.NumS3} >
        <Text style={styles.NumSstyle} >6</Text>
    </View>
      </TouchableOpacity>
      <TouchableOpacity>
    <View style={styles.NumS2} >
        <Text style={styles.NumSstyle} >-</Text>
    </View>
      </TouchableOpacity>
  </View>

  <View style={styles.NumBoard} >
    {/* Info Num */}
      <TouchableOpacity>
    <View style={styles.NumS3} >
      <Text style={styles.NumSstyle} >1</Text>
    </View>
      </TouchableOpacity>
      <TouchableOpacity>
    <View style={styles.NumS3} >
      <Text style={styles.NumSstyle} >2</Text>
    </View>
      </TouchableOpacity>
      <TouchableOpacity>
    <View style={styles.NumS3} >
        <Text style={styles.NumSstyle} >3</Text>
    </View>
      </TouchableOpacity>
      <TouchableOpacity>
    <View style={styles.NumS2} >
        <Text style={styles.NumSstyle} >+</Text>
    </View>
      </TouchableOpacity>
  </View>

  <View style={styles.NumBoard} >
    {/* Info Num */}
      <TouchableOpacity>
    <View style={styles.NumS3} >
      <Text style={styles.NumSstyle} >00</Text>
    </View>
      </TouchableOpacity>
      <TouchableOpacity>
    <View style={styles.NumS3} >
      <Text style={styles.NumSstyle} >0</Text>
    </View>
      </TouchableOpacity>
      <TouchableOpacity>
    <View style={styles.NumS3} >
        <Text style={styles.NumSstyle} >.</Text>
    </View>
      </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.NumS2} >
        <Text style={styles.NumSstyle} >=</Text>
    </View>
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
    width: 'auto',
    height: '26%',
    marginBottom: 30
  },
  SecText: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'red',
    top: 20
  },
  NumBoard: {
    backgroundColor: '#000',
    flexDirection: 'row',
  },
  NumS: {
    margin: 7,
    backgroundColor: '#fff',
    width: 80,
    height: 80,
    borderRadius: 100/2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#919191'
  },
  NumS2: {
    margin: 7,
    backgroundColor: '#fff',
    width: 80,
    height: 80,
    borderRadius: 100/2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffaa00'
  },
  NumS3: {
    margin: 7,
    backgroundColor: '#fff',
    width: 80,
    height: 80,
    borderRadius: 100/2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#404040'
  },
  NumSstyle: {
    fontSize: 40,
    color: '#fff'
  },
})
export default App;