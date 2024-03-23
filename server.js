const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
const app = express();

mongoose.connect('mongodb://localhost/blog');

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
  const articles = [
    {
      title: 'test articles',
      createdAt: new Date(),
      description: 'Test descriptioin',
    },
    {
      title: 'second test',
      createdAt: new Date(),
      description: 'ljdslfjdsl;al lfsadj;fklj',
    },
  ];
  res.render('articles/index.ejs', { articles: articles });
});

app.listen(5000);
