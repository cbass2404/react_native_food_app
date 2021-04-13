import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

// custom api hook
import useResult from "../hooks/useResult";

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam("id");
    const [result, getResult, errorMessage] = useResult(id);

    if (!result) {
        return null;
    }
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image
                            style={styles.imageStyle}
                            source={{ uri: item }}
                        />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300,
    },
});

export default ResultsShowScreen;
