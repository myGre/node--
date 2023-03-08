// eventproxy控制并发
// 引入依赖
var express = require('express');
var utility = require('utility');
var superagent = require('superagent')
var cheerio = require('cheerio')
var eventproxy = require('eventproxy')
var url = require('url')
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
				console.log('element', $element);
				let href = url.resolve(webUrl, $element.attr('href'))
				topicUrls.push(href);
			});
			console.log('title', topicUrls);
			let ep = new eventproxy()
			ep.after('topic_html', topicUrls.length, function (topics) {
				topics = topics.map(topicPair => {
					// 接下来都是 jquery 的用法了
					var topicUrl = topicPair[0];
					var topicHtml = topicPair[1];
					var $ = cheerio.load(topicHtml);
					return ({
						title: $('.topic_full_title').text().trim(),
						href: topicUrl,
						comment1: $('.reply_content').eq(0).text().trim(),
					});
				})
				console.log('final:');
				console.log(topics);
				res.send(topics);

			})
			topicUrls.forEach(topicUrl => {
				superagent.get(topicUrl)
					.end((err, res) => {
						if (err) return
						ep.emit('topic_html', [topicUrl, res.text])
					})
			})
		})
});

app.listen(3000, function (req, res) {
	console.log('app is running at port 3000');
})