import React, { useState } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

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
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage.length > 0 ? (
                <Text style={styles.errorStyle}>{errorMessage}</Text>
            ) : null}
            <ScrollView>
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
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    errorStyle: {
        color: "red",
        marginLeft: 15,
    },
    resultStyle: {
        marginLeft: 15,
    },
});

export default SearchScreen;
