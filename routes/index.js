
/*
 * GET home page.
 */
var lang = {}

function checkLocale(req) {
  var langPath = '../lang';
  if(req.cookies.locale && req.cookies.locale!='ch')
    langPath += req.cookies.locale;
  lang = require(langPath);
}

exports.index = function(req, res){
  checkLocale(req);
  res.render('index', { title: lang.pageIndex.pageTitle,
    navMenus : lang.navMenus,
    pageContent: lang.pageIndex
  });
};
exports.setLocale = function(req, res){
  res.cookie('locale', req.param('locale'), {maxAge:900000});
  res.send('ok');
};

exports.solution = function(req, res){
  checkLocale(req);
  res.render('view1', { title: lang.pageSolution.pageTitle,
    navMenus : lang.navMenus,
    pageContent: lang.pageSolution
  });
};

exports.support = function(req, res){
  checkLocale(req);
  res.render('view1', { title: lang.pageSupport.pageTitle,
    navMenus : lang.navMenus,
    pageContent: lang.pageSupport
  });
};

exports.career = function(req, res){
  checkLocale(req);
  var jobId = req.param('id');
  res.render('view2', { title: lang.pageCareer.pageTitle,
    navMenus : lang.navMenus,
    jobId: jobId,
    pageContent: lang.pageCareer
  });
};

exports.contact = function(req, res){
  checkLocale(req);
  res.render('contact', { title: lang.pageContact.pageTitle,
    navMenus : lang.navMenus,
    headline: lang.pageContact.headline,
    sites: lang.pageContact.sites,
    labels: lang.pageContact.labels
  });
};

exports.product = function(req, res){
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
  checkLocale(req);
  res.render(pageView, { title: pageVar.pageTitle,
    navMenus : lang.navMenus,
    pageContent: pageVar
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
  checkLocale(req);
  res.render(pageView, { title: pageVar.pageTitle,
    navMenus : lang.navMenus,
    pageContent: pageVar
  });
};
