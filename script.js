var w = d3.select('.tab').node().clientWidth,
	h = d3.select('.tab').node().clientHeight;


d3.csv('data.csv',parse,function(err,d){
   

  d3.select('.tab')
    .attr('width',w-100)
    .attr('height',h-100);

  d3.select('.nav')
    .selectAll('li')
    .data(d)
    .enter()
    .append('li')
    .attr('role','presentation')
       .append('a')
       .html(function(d){return d.type})
       .attr('href',function(d){return '#'+d.type})
       .attr('role','tab')
       .attr('data-toggle','tab')
       .attr('aria-controls',function(d){return d.type});

  d3.select('.tab-content')
    .selectAll('div')
    .data(d)
    .enter()
    .append('div')
    .attr('role','tabpanel')
    .attr('class','tab-pane')
    .attr('id',function(d){return d.type})
    .html(function(d){return d.content});


  //select and click
  $('.nav-tabs a:first').tab('show') 
  
  $('.nav-tabs a').click(function(){
      $(this).tab('show');
     });


});
  
 

function parse(d){
	return {
		type:d.type,
        content:d.content
	};
}


