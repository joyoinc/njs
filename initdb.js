var mongoskin = require('mongoskin');
var connStr = 'mongodb://xxd:xxd@ds049538.mongolab.com:49538/tinygroup';

function initWorkItem(items) {
  try {
    var db= mongoskin.db(connStr, {safe:true})

    db.collection('workitem').insert(items,{},function(){
        console.log('insert ok')
    })
  }
  catch(err) {
    console.log('db conn error')
  }
};

var fix1 = [
  {title:'bababa', desc:'i am a banana'},
  {title:'pupupu', desc:'i am a potato'}
]

function showCollection() {
  try {
    var db= mongoskin.db(connStr, {safe:true})

    db.collection('system.users').find().toArray(function(err, items){
      console.dir(items)
    })
  }
  catch(err) {
    console.log('db conn error')
  }
};

initWorkItem(fix1)
//showCollection()
