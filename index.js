import server from "./src/server.js";

const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});
