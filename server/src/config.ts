import "dotenv";

process.loadEnvFile();

type Config = {
  port: number;
};

function getEnvOrThrow(key: string) {
  const value = process.env[key];
  if (!value) throw new Error(`Environment variable "${key}" is not set`);
  return value;
}

export const config: Config = {
  port: parseInt(getEnvOrThrow("PORT")),
};
