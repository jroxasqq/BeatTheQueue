import "dotenv";
process.loadEnvFile();
function getEnvOrThrow(key) {
    const value = process.env[key];
    if (!value)
        throw new Error(`Environment variable "${key}" is not set`);
    return value;
}
export const config = {
    port: getEnvOrThrow("PORT"),
    besttimesAPIKey: getEnvOrThrow("BESTTIMES_API_KEY"),
};
//# sourceMappingURL=config.js.map