// async控制并发
var express = require('express');
var utility = require('utility');
var superagent = require('superagent')
var cheerio = require('cheerio')
var url = require('url')
var async = require('async')

// 建立 express 实例
var app = express();
var webUrl = 'https://cnodejs.org'
app.get('/', function (req, res, next) {
	// 去抓取网页内容
	superagent.get(webUrl)
		.end((err, srcs) => {
			// console.log(res);
			if (err) return
			var $ = cheerio.load(srcs.text)
			var topicUrls = []; // 返回数据集合
			$('#topic_list .topic_title').each(function (idx, element) {
				var $element = $(element);
				let href = url.resolve(webUrl, $element.attr('href'))
				topicUrls.push(href);
			});
			var fetchUrl = function (url, callback) {
				superagent.get(url)
					.end((err, res) => {
						if (err) return
						var topicHtml = res.text;
						var $ = cheerio.load(topicHtml);
						callback(null, {
							title: $('.topic_full_title').text().trim(),
							href: url,
							comment1: $('.reply_content').eq(0).text().trim(),
						})
					})
			}

			async.mapLimit(topicUrls, 5, (url, callback) => {
				fetchUrl(url, callback)
			}, (err, result) => {
				console.log('final:');
				res.send(result);
			})
		})
});

app.listen(3000, function (req, res) {
	console.log('app is running at port 3000');
})