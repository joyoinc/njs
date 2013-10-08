var mongoskin = require('mongoskin');
var connStr = 'mongodb://xxd:xxd@ds049538.mongolab.com:49538/tinygroup'

var Mdbc = function() {
  this.db = mongoskin.db(connStr, {safe:true})
}

Mdbc.prototype.allWorkItems= function(callback) {
  this.db.collection('workitem').find().toArray(function(err, results){
    if(err) callback(err)
    else callback(null, results)
  })

}

exports.Mdbc = Mdbc
