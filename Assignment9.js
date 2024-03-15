async function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() < 0.7; 
            if (success) {
                const data = { message: "Data successfully fetched" };
                resolve(data); 
            } else {
                reject(new Error("Failed to fetch data")); 
            }
        }, 2000); 
    });
}