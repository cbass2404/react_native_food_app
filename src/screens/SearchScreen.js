import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

// axios
import yelp from "../api/yelp";

// local files
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async () => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term,
                    location: "san jose",
                },
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage("Something went wrong");
            console.error("YELP API ERROR:", err);
            return;
        }
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
            />
            <Text>Search Screen</Text>
            {errorMessage.length > 0 ? (
                <Text style={{ color: "red" }}>{errorMessage}</Text>
            ) : (
                <Text>We have found {results.length} results.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
