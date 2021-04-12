import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

// hooks
import useResults from "../hooks/useResults";

// local files
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            <Text>Search Screen</Text>
            {errorMessage.length > 0 ? (
                <Text style={{ color: "red" }}>{errorMessage}</Text>
            ) : (
                <Text>We have found {results.length} results.</Text>
            )}
            <ResultsList title="Cost Effective" />
            <ResultsList title="Bit Pricier" />
            <ResultsList title="Big Spender" />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
