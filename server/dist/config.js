import "dotenv";
process.loadEnvFile();
function getEnvOrThrow(key) {
    const value = process.env[key];
    if (!value)
        throw new Error(`Environment variable "${key}" is not set`);
    return value;
}
export const config = {
    baseUrl: "http://localhost",
    clientPort: parseInt(getEnvOrThrow("CLIENT_PORT")),
    serverPort: parseInt(getEnvOrThrow("SERVER_PORT")),
    googlePlacesAPIKey: getEnvOrThrow("GOOGLE_PLACES_API_KEY"),
};
//# sourceMappingURL=config.js.map