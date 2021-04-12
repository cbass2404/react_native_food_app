import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    const [term, setTerm] = useState("");

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => console.log("term was submitted")}
            />
            <TextInput>Search Screen</TextInput>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
