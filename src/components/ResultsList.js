import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// local files
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <ResultsDetail result={item} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default ResultsList;
