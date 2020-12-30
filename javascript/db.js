var db = new restdb("5fec198a823229477922c59b")

// var obj = new db.nameid({name:"Yash", id:1506});

// obj.save((err,res) => {
//     if(!err) {
//         console.log(res);
//     }
// })

var query = {};
var hints = {};

db.nameid.find(query, hints, (err, res) => {
    if(!err)
    {
        console.log(res);
    }
})