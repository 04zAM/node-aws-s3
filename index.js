const express = require("express"),
  app = express(),
  PORT = process.env.PORT || 5000,
  AWS = require("aws-sdk"),
  S3 = require("aws-sdk/clients/s3");

AWS.config.loadFromPath("./config.json");
// Create S3 service object
const s3 = new AWS.S3();
// Call S3 to list the buckets
s3.listBuckets(function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Buckets);
  }
});

app
  .get("/", (req, res) => {
    res.send("Hello World with AWS");
  })
  .listen(PORT, () => {
    console.log(`This server are running on http://localhost:${PORT}`);
  });
