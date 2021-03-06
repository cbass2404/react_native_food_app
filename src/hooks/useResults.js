import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
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

    useEffect(() => {
        searchApi("steak");
    }, []);

    return [searchApi, results, errorMessage];
};
