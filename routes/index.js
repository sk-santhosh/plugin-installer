var express = require("express");
var router = express.Router();

var exec = require("child_process").exec;

const { Command } = require("commander");
const program = new Command();

const packages = require("../package.json");

program.version("0.0.1");

var _packages = [
  {
    name: "Swagger",
    package: "swagger",
    install: "npm i swagger",
    uninstall: "npm remove swagger",
    installed: false,
  },
  {
    name: "Bootstrap",
    package: "bootstrap",
    install: "npm i bootstrap",
    uninstall: "npm remove bootstrap",
    installed: false,
  },
  {
    name: "Mongoose",
    package: "mongoose",
    install: "npm i mongoose",
    uninstall: "npm remove mongoose",
    installed: false,
  },
];

router.get("/", function (req, res, next) {
  _packages.map((p) => {
    p.installed = packages.dependencies[p.package] ? true : false;
  });

  res.render("index", { title: "Packages", packages: _packages });
});

router.get("/install/:package", async (req, res) => {
  let _p = _packages.filter((p) => p.package === req.params.package)[0];

  if (_p) {
    let c = await exec(_p.install, (error, stdout, stderr) => {
      console.log("stdout: " + stdout);
      console.log("stderr: " + stderr);
      if (error !== null) {
        console.log("exec error: " + error);
      }
    });
  }
  res.redirect("/");
});

router.get("/uninstall/:package", async (req, res) => {
  let _p = _packages.filter((p) => p.package === req.params.package)[0];

  if (_p) {
    let c = await exec(_p.uninstall, (error, stdout, stderr) => {
      console.log("stdout: " + stdout);
      console.log("stderr: " + stderr);
      if (error !== null) {
        console.log("exec error: " + error);
      }
    });
  }
  res.redirect("/");
});

module.exports = router;
