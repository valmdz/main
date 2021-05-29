const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const aboutRouter = require("./api/about");
const projectsRouter = require("./api/projects");
const contactRouter = require("./api/contact");

const buildPath = path.join(__dirname, "../../dist");
const port = process.env.PORT || 3000;
const cors = require("cors");

// For week4 no need to look into this!
// Serve the built client html
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(cors());

router.use("/about", aboutRouter);
router.use("/projects", projectsRouter);
router.use("/contact", contactRouter);

app.use(process.env.API_PATH, router);

app.use(express.static('public'))

// for the frontend. Will first be covered in the react class
app.use("*", (_, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

module.exports = app;
 