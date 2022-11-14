import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { val } from "../redux/actions"

const compApp = ({ myitmes, val }) => {
    const [text, setText] = useState("");
    const handleShow = () => {
        val(text)
    };

    return (
        <View style={styles.contain}>
            <Text style={styles.head}>This is redux project</Text>
            <TextInput
                placeholder='Enter value here'
                style={styles.textInputStyle}
                onChangeText={setText}


            />
            <TouchableOpacity style={styles.button} onPress={handleShow}>Add value to list</TouchableOpacity>
            <FlatList data={myitmes} renderItem={({ item }) => <Text style={styles.item}> {item} </Text>} />
        </View>

    );
};
const styles = StyleSheet.create({
    
    head:{
        marginBottom:20,
        fontSize:40, 
        fontWeight:"bold", 

    },
    contain: {
        alignContent: 'center',
        alignItems: 'center',
        marginTop:'10%'
        
    },
    textInputStyle: {
        textAlign: 'center',
        height: 40,
        width: '85%',
        borderWidth: 3.5,
        borderColor: 'green',
        borderRadius: 10,
        

    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        borderWidth:3, 
        borderColor:'silver',
        fontSize:20,
        backgroundColor:'silver', 
        borderRadius:20

    },
    button: {
        backgroundColor: 'silver',
        textAlign: 'center',
        fontSize: 20,
        borderWidth: 3.5,
        borderRadius: 6,
        margin: 15,
        borderColor:'green'
    }

});
const mapStateToProps = (state) => ({ myitmes: state.myitmes.value });

const mapDisTpProps = { val };

export default connect(mapStateToProps, mapDisTpProps)(compApp);


