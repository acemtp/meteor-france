Template.CountMain.helpers({
	projects: function() {
		return Projects.find().fetch();
	}
});


Template.CountTest.rendered = function () {
  var url = window.location.href; //"http://localhost:2999/test"
  DDP.connect("http://localhost:3000/").call("addCount", url, function(err, res){
    console.log("[count] test => ", err || res);
    if (res)
      alert("this project was visited " + res.visits + " times");
    else
      alert("this project does not exist");
  });
};
