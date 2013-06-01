
/*
 * GET home page.
 */
var lang = require('../lang')

exports.index = function(req, res){
  res.render('index', { title: lang.pageIndex.pageTitle,
    headline: lang.pageIndex.headline,
    paragraphs: lang.pageIndex.paragraphs
  });
};

exports.solution = function(req, res){
  res.render('solution', { title: lang.pageSolution.pageTitle,
    headline: lang.pageSolution.headline,
    paragraphs: lang.pageSolution.paragraphs
  });
};

exports.support = function(req, res){
  res.render('support', { title: lang.pageSupport.pageTitle,
    headline: lang.pageSupport.headline,
    paragraphs: lang.pageSupport.paragraphs
  });
};

exports.contact = function(req, res){
  res.render('contact', { title: lang.pageContact.pageTitle,
    headline: lang.pageContact.headline,
    sites: lang.pageContact.sites,
    labels: lang.pageContact.labels
  });
};

exports.service = function(req, res){
  var pageView, pageVar;
  switch(req.params.sub) {
    case "iphone":
      pageView = 'service-iphone';
      pageVar = lang.pageService.iphone;
      break;
    case "mobile":
      pageView = 'service-other';
      pageVar = lang.pageService.mobile;
      break;
    case "web":
      pageView = 'service-other';
      pageVar = lang.pageService.web;
      break;
    default:
      pageView = 'service-other';
      pageVar = lang.pageService.web;
  }
  res.render(pageView, { title: pageVar.pageTitle,
    pageContent: pageVar
  });
};
