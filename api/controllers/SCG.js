var request = require('sync-request')
var keyApiGoogle = "AIzaSyBpmGDg3fsULdzYodTFEfIZ-AL60d4oBjE"


exports.get_all = (req, res, next) =>{
    res.status(200).json({
        message : 'Get rootdd /'
    })
}

exports.getXYZ = (req,res,next) =>{
    console.log(req.body)
    let str = ['X',5,15,23,'Y','Z']
    let ans = [];
    str.forEach(data => {
       //console.log(data) 
       if(data.toString() == 'X' || data.toString() == 'Y' || data.toString() == 'Z' )
       {
           ans.push(data.toString())
       }
       
    });
    //console.log("XYZ")
    res.status(200).json(ans)

}

exports.getFindPlace = (req,res,next) =>{
    let place = "Bangsue"
    let url ="https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+"+place+"&key="+keyApiGoogle
    let dataPlace = request('GET',url)
    dataPlace = JSON.parse(dataPlace.getBody('utf8'))
    res.status(200).json(dataPlace)

}