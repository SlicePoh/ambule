import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import icon from '../assets/icon2.png'
const Home = () => {
  return (
    <SafeAreaView style={tw`bg-whit h-full`}>
        <View style={tw`p-5`}>
            <Image
                style={styles.image}
                source={icon}
            />
            {/* <Text style={[tw`text-red-500  text-xl`,styles.text] }>The hoe screen bitch</Text> */}
        </View>
    </SafeAreaView>
  );
;}

export default Home;

const styles = StyleSheet.create({
    text: {
        backgroundColor: "#fff",
    },
    image:{
        width: 150,
        height: 150,
    },
}) 