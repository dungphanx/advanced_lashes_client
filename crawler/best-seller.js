var Crawler = require("js-crawler");

new Crawler().configure({depth: 3})
  .crawl("https://www.advancelashes.com/", function onSuccess(page) {
    console.log(page.url);
  });
