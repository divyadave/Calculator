/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import {Button, StyleSheet, View, Text, TouchableOpacity} from 'react-native'
  
 class App extends Component {

  constructor() {
    super()
    this.state = {
      resultText: "",
      calculationText: "'"
    }
    operations = [ 'D','+', '-', '*', '/'];
  }
  calculateResult() {
    const text = this.state.resultText;
    this.setState({
      calculationText: eval(text)
    })

  }

  buttonPressed(text) {
    if(text === '=') {
      return this.calculateResult()
    }
    this.setState({
      resultText: this.state.resultText + text 
    })
  }
  operate(operation) {
    
    switch(operation){
      case 'D':
        let text = this.state.resultText.split('')
        text.pop()
        console.log('join', text.join(''))
        this.setState({
          resultText: text.join('')
        })
        break;
        case '+':
        case '-':
        case '*':
        case '/':
        const lastChar = this.state.resultText.split('').pop()
        if(this.operations.indexOf(lastChar) > 0 ) return
        if(this.state.resultText === "") return;
        this.setState({
          resultText: this.state.resultText + operation
          
        })
        
    }
  }
  
  
   render() {
     let rows = []
    let nums = [[1,2,3], [4,5,6], [7,8,9], ['.',0,'=']]
    for (let i = 0; i < 4; i++) {
      let col = []
      for (let j = 0; j < 3; j++) {
        col.push(<TouchableOpacity style={styles.btn} onPress={ () => this.buttonPressed(nums[i][j])}><Text style={styles.btnText}>{nums[i][j] }</Text></TouchableOpacity>)  
      }
      rows.push(<View style={styles.row}>{col}</View>)
   
    }
   this.operations = [ 'D','+', '-', '*', '/'];
   let ops = [];
    for(let k=0;k<4;k++) {
      ops.push(<TouchableOpacity style={styles.btn} onPress={ () => this.operate(this.operations[k])}><Text style={[styles.white, styles.btnText]}>{this.operations[k]}</Text></TouchableOpacity>)

    }
     return (
       <View style={styles.sectionContainer}>
         <View style={styles.result}>
           <Text style={styles.resultText}>{ this.state.resultText }</Text>
         </View>
         <View style={styles.calculation}>
         <Text style={styles.calculationText}>{ this.state.calculationText }</Text>
         </View>
         <View style={styles.buttons}>
           <View style={styles.numbers}>
             {rows}
            </View>
            <View style={styles.operations}>
              {ops}
          
            </View>
         </View>
       
       </View>
     );
   }
 }

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'black'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'center'

  },
  white: {
    color: 'white'

  },
 
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFF',
    fontWeight: '700'

  },
  
  result: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons : {
    flex: 5,
    flexDirection: 'row'
  },
  
  numbers: {
    flex: 2,
    backgroundColor: '#141518'
  },
  btnText: {
    fontSize: 25,
    color: 'white'
  },
  operations: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  calculationText: {
    fontSize: 40,
    color: 'black'
  },
  resultText: {
    fontSize: 50,
    color: 'black'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'


  }
});

export default App;
