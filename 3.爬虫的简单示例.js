// 爬虫简单使用
// 引入依赖
var express = require('express');
var utility = require('utility');
var superagent = require('superagent')
var cheerio = require('cheerio')

// 建立 express 实例
var app = express();

app.get('/', function (req, res, next) {
	// 去抓取网页内容
	superagent.get('https://cnodejs.org/')
		.end((err, srcs) => {
			// console.log(res);
			if (err) return
			var $ = cheerio.load(srcs.text)
			var items = []; // 返回数据集合
			var authorArr = []
			$('#topic_list .topic_title').each(function (idx, element) {
				var $element = $(element);
				console.log('element', $element);
				items.push({
					title: $element.attr('title'),
					href: $element.attr('href'),
				});
			});
			$('.user_avatar img').each(function (idx, element) {
				var author = $(element).attr('title');
				authorArr.push({
					author
				})
			});
			items.forEach((item, index) => {
				item = Object.assign(item, authorArr[index])
			})
			console.log('title', items);
			res.send(items);
		})
});

app.listen(3000, function (req, res) {
	console.log('app is running at port 3000');
})