


$(function (){
  console.log(dataSet)
  var templateScript = $('#facility-rows').html();
  console.log(templateScript)
  var inspections = { "inspections": dataSet.slice(0,10)}

  console.log(inspections)

  var template = Handlebars.compile(templateScript);



  //console.log(template(dataSet));

  $('#tb').html(template(inspections));

})

Handlebars.registerHelper("first10", function(){

})
