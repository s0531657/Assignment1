import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Link } from 'expo-router';
import Styles from '../styles/page-styles';
import { Pressable,} from 'react-native';

export default function Page() {

    const [name, onChangeName] = React.useState("");
    const [noun, onChangeNoun] = React.useState("");
    const [event, onChangeEvent] = React.useState("");

    const clearInputs = () => {
        onChangeName("");
        onChangeNoun("");
        onChangeEvent("");
    };

    
    return (
        <View style={Styles.page} >
            <Text style={Styles.header}> Assignment 1 </Text>
            <Text> How to play Mad Libs hall Pass </Text>

            <TextInput
                style={Styles.input}
                onChangeText={onChangeName}
                value={name}
                placeholder="Name"
            />

<TextInput
                style={Styles.input}
                onChangeText={onChangeNoun}
                value={noun}
                placeholder="Noun"
            />

<TextInput
                style={Styles.input}
                onChangeText={onChangeEvent}
                value={event}
                placeholder="An Event"
            />


            <Link
                style={Styles.button}
                href={{
                    pathname: "/page2",
                    params: { name, noun, event }
                }} asChild
            >
                <Pressable style={Styles.button}>
                    <Text>Make my hall pass</Text>
                </Pressable>
            </Link>

            <Pressable style={Styles.button} onPress={clearInputs}>
                <Text> Clear </Text>
            </Pressable>
        </View>
    )
}