import { colors } from '@/uteis/colors';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Botao from "./botao";

const Calculadora = () => {
    const [firstValue,  setFirstValue] = useState('');
    const [displayValue,  setDisplayValue] = useState('0');
    const [operator,  setOperator] = useState('');

    const handleNumberInput = (num: string) => {
        if (displayValue == '0') {
            setDisplayValue(num);
        }else{
            setDisplayValue(displayValue +num);
        }
    }

    const handleOperatorInput = (op: string) => {
    setOperator(op);
    setFirstValue(displayValue);
    setDisplayValue('0');
}

    const handleCalculation = () => {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(displayValue);

        if (operator === '+'){
            setDisplayValue ( (num1 +num2).toString());
        }else if (operator === '-'){
            setDisplayValue ( (num1 - num2).toString());
        }else if (operator === '*'){
            setDisplayValue ( (num1 * num2).toString());
        }else if (operator === '/'){
            setDisplayValue ( (num1/num2).toString());
        }

        setOperator('');
        setFirstValue('');
    }

    const handleCleaner = () => {
        setDisplayValue('0');
        setOperator('');
        setFirstValue('');
    }

    const handleDelete = () => {
        if(displayValue.length == 1){
            setDisplayValue('0')
        }else{
            setDisplayValue(displayValue.slice(0-1));
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={{fontSize: 30, fontWeight: '300'}}>{firstValue + operator}</Text>
                <Text style={{fontSize: 70, fontWeight: '300'}}>{displayValue}</Text>
            </View>
            <View style={styles.teclado}>
                <Botao title='AC' type= 'topo' onPress={() => handleCleaner()}/>
                <Botao title= '⌫' type= 'topo' onPress={() => handleDelete()}/>
                <Botao title= '√' type= 'direita' onPress={() => handleOperatorInput('/')}/>
                <Botao title= '÷' type= 'direita' onPress={() => handleOperatorInput('/')}/>
                <Botao title= '7' type= 'numero' onPress={() => handleNumberInput('7')}/>
                <Botao title= '8' type= 'numero' onPress={() => handleNumberInput('8')}/>
                <Botao title= '9' type= 'numero' onPress={() => handleNumberInput('9')}/>
                <Botao title= 'x' type= 'direita' onPress={() => handleOperatorInput('*')}/>
                <Botao title= '6' type= 'numero' onPress={() => handleNumberInput('6')}/>
                <Botao title= '5' type= 'numero' onPress={() => handleNumberInput('5')}/>
                <Botao title= '4' type= 'numero' onPress={() => handleNumberInput('4')}/>
                <Botao title= '-' type= 'direita' onPress={() => handleOperatorInput('-')}/>
                <Botao title= '1' type= 'numero' onPress={() => handleNumberInput('1')}/>
                <Botao title= '2' type= 'numero' onPress={() => handleNumberInput('2')}/>
                <Botao title= '3' type= 'numero' onPress={() => handleNumberInput('3')}/>
                <Botao title= '+' type= 'direita' onPress={() => handleOperatorInput('+')}/>
                <Botao title="0" type="numero" wide onPress={() => handleNumberInput('0')}/>
                <Botao title= '.' type= 'direita'/>
                <Botao title= '=' type= 'direita' onPress={() => handleCalculation()}/>
                
            </View>
        </View>
    )
}

export default Calculadora;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    display: {
        flex: 1,
        backgroundColor: colors.background,
        paddingVertical: 20,
        paddingHorizontal: 40, 
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    teclado: {
        flex: 2,
        backgroundColor: colors.background,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 30,
        padding: 30
    }
})