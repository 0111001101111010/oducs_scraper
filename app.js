var request = require('request');
var cheerio = require('cheerio');
var _       = require('lodash');


var test = "https://secweb.cs.odu.edu/alumni/user/10118";

request(test, function (error, response, html) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var parsedResults;

        //console.log(html);
          var data = $('#alumni-real-data');
          //parsedResults=$(this).html();
        // Log our finished parse results in the terminal
          console.log(data.html());
          var child = data.children().last();

         //var child =  $('input[type=text][readonly]').html();
         console.log(child.html());
      }
    });
