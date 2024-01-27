import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-styles';

export default function Page2() {
  const params = useLocalSearchParams();
  const { name, noun, event } = params;
  const today = new Date().toLocaleDateString();

  return (
    <View style={Styles.page}>
      <Link href="/" asChild>
        <TouchableOpacity style={Styles.backButton}>
          <Text>←</Text>
        </TouchableOpacity>
      </Link>


      <View style={Styles.hallPass}>
        <Text style={Styles.verticalText}>HALL PASS</Text>

        <Text style={Styles.header}>Mad Libs</Text>

        <Text style={Styles.date}>Date: {today}</Text>

        <Text style={Styles.story}>{name} is too cool </Text>
        <Text style={Styles.story}>for {noun} class.</Text>
        <Text style={Styles.story}>Instead, she/he will be</Text>
        <Text style={Styles.story}>attending the {event}.</Text>

        <View style={Styles.signatureBox}>
          <Text style={Styles.signatureText}>Signed:</Text>
        </View>
      </View>
    </View>
  );
}
