function ServerConfig() {
  const port = process.env.SERVER_PORT || 7000;
  return { port };
}

const { port } = ServerConfig();

export { port };
