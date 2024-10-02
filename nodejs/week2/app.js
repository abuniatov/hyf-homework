import express from "express";
import fs from "fs"; // to read documents.json
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const documents = JSON.parse(fs.readFileSync("documents.json", "utf-8"));

// GET / endpoint
app.get("/", (req, res) => {
  res.send("This is a search engine");
});

// GET /search endpoint
app.get("/search", (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(200).json(documents);
  }

  const filteredDocs = documents.filter((doc) =>
    Object.values(doc).some((value) =>
      value.toString().toLowerCase().includes(query.toLowerCase())
    )
  );

  res.status(200).json(filteredDocs);
});

// GET /documents/:id endpoint
app.get("/documents/:id", (req, res) => {
  const documentId = parseInt(req.params.id, 10);
  if (isNaN(documentId) || documentId <= 0) {
    return res.status(400).json({ error: "Invalid document ID" });
  }
  const foundDocument = documents.find((doc) => doc.id === documentId);
  if (!foundDocument) {
    return res.status(404).json({ error: "Document not found" });
  }
  res.status(200).json(foundDocument);
});

// POST /search endpoint
app.post("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;

  if (query && fields) {
    return res.status(400).json({
      error: "Cannot provide both query and field values in the same request",
    });
  }

  if (query) {
    const result = documents.filter((doc) =>
      Object.values(doc).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase())
      )
    );
    return res.status(200).json(result);
  }

  if (fields) {
    const result = documents.filter((doc) =>
      Object.entries(fields).every(
        ([key, value]) => doc[key] && doc[key].toString() === value.toString()
      )
    );
    return res.status(200).json(result);
  }

  res.status(200).json(documents);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});