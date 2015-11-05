
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

exports.about = function(req, res){
  checkLocale(req);
  res.render('about', { title: lang.pageAbout.pageTitle,
    navMenus : lang.navMenus,
    pageContent: lang.pageAbout
  });
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
  res.render('career', { title: lang.pageCareer.pageTitle,
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
    case "ecom":
      pageView = 'product-ecom';
      pageVar = lang.pageProduct.ecom;
      break;
    case "eedu":
      pageView = 'product-eedu';
      pageVar = lang.pageProduct.eedu;
      break;
    case "oa":
      pageView = 'product-oa';
      pageVar = lang.pageProduct.oa;
      break;
    case "crm":
      pageView = 'product-crm';
      pageVar = lang.pageProduct.crm;
      break;
    default:
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
    case "customize":
      pageView = 'view1';
      pageVar = lang.pageService.customize;
      break;
    case "sitebuild":
      pageView = 'view1';
      pageVar = lang.pageService.sitebuild;
      break;
    case "appdev":
      pageView = 'service-appdev';
      pageVar = lang.pageService.appdev;
      break;
    case "wechatsale":
      pageView = 'service-wechatsale';
      pageVar = lang.pageService.wechatsale;
      break;
    default:
  }
  checkLocale(req);
  res.render(pageView, { title: pageVar.pageTitle,
    navMenus : lang.navMenus,
    pageContent: pageVar
  });
};
