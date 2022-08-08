# Around the U.S. Back End

## Directories

`/data` — JSON files to temporarily emulate database integration.

`/routes` — Routing files.

`/helpers` - Generic functions such for example:
<const getDataFromFile = (file) => fsPromises.readFile(file, { encoding: 'utf8' }).then((data) => JSON.parse(data)).catch((err) => err)>

## Running the Project

`npm run start` — to launch the server.

`npm run dev` — to launch the server with the hot reload feature.
