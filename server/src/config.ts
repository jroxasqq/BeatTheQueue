import "dotenv";

process.loadEnvFile();

type Config = {
  baseUrl: string;
  clientPort: number;
  serverPort: number;
  googlePlacesAPIKey: string;
};

function getEnvOrThrow(key: string) {
  const value = process.env[key];
  if (!value) throw new Error(`Environment variable "${key}" is not set`);
  return value;
}

export const config: Config = {
  baseUrl: "http://localhost",
  clientPort: parseInt(getEnvOrThrow("CLIENT_PORT")),
  serverPort: parseInt(getEnvOrThrow("SERVER_PORT")),
  googlePlacesAPIKey: getEnvOrThrow("GOOGLE_PLACES_API_KEY"),
};
