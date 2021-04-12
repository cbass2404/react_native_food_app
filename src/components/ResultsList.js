import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// local files
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
    const resultCheck = (resultArray) => {
        if (resultArray.length !== 0) {
            return (
                <View style={styles.container}>
                    <Text style={styles.titleStyle}>{title}</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={results}
                        keyExtractor={(result) => result.id}
                        renderItem={({ item }) => {
                            return <ResultsDetail result={item} />;
                        }}
                    />
                </View>
            );
        } else {
            return null;
        }
    };
    return resultCheck(results);
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5,
    },
});

export default ResultsList;
