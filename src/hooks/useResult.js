import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default (id) => {
    const [result, setResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
        } catch (err) {
            setErrorMessage("Something went wrong, try again later");
            console.error("useResult.js ERROR:", err);
        }
    };
    useEffect(() => {
        getResult(id);
    }, []);

    return [result, getResult, errorMessage];
};
