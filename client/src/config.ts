type Config = {
  baseUrl: string;
  serverPort: number;
};

function getEnvOrThrow(key: string) {
  const value = import.meta.env[key];
  if (!value) throw new Error(`Environment variable "${key}" is not set`);
  return value;
}

export const config: Config = {
  baseUrl: `${window.location.protocol}//${window.location.hostname}`,
  serverPort: parseInt(getEnvOrThrow("VITE_SERVER_PORT")),
};
