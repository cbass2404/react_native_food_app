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

    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price;
        });
    };

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
            <ResultsList
                results={filterResultsByPrice("$")}
                title="Cost Effective"
            />
            <ResultsList
                results={filterResultsByPrice("$$")}
                title="Bit Pricier"
            />
            <ResultsList
                results={filterResultsByPrice("$$$")}
                title="Big Spender"
            />
            <ResultsList
                results={filterResultsByPrice("$$$$")}
                title="Break the bank"
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
