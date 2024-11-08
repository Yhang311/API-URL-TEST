async function fetch_token(username, team) {
    const url = `http://220.88.39.23:5000/api/user/token?username=${encodeURIComponent(username)}&team=${encodeURIComponent(team)}`;
    //const url = `http://127.0.0.1:5000/api/user/token?username=${encodeURIComponent(username)}//&team=${encodeURIComponent(team)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch token!");
        }

        const data = await response.json();
        return data.access_token; 

    } catch (error) {
        console.error("Error fetching token and message:", error);
        return null;
    }
}

export default fetch_token;