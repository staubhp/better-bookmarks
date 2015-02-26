function populateBookmarks(){
	debugger;
	chrome.bookmarks.getTree(		
			function(bookmarkNodes){
				$('#bookmarks').append(dumpNodes(bookmarkNodes,0));			
				init();				
			});
}

function dumpNodes(bookmarkNodes, level){
	var list = $('<ul>');

	list.attr('class', 'level'+level);

	var i;
	for (i = 0; i < bookmarkNodes.length; i++){
		list.append(dumpNode(bookmarkNodes[i], level));
	}
	return list;	
}

function dumpNode(bookmarkNode, level){
	var hasChildren = bookmarkNode.children && bookmarkNode.children.length>0;
	var li = $('<li>');

	if (level > 0)
		li.attr('class',(hasChildren ? ('folder level'+level) : 'child'));

	var anchor = $('<a>');
	anchor.attr('href', bookmarkNode.url);
	anchor.text(bookmarkNode.title);

	var img = $('<img>');
	img.attr('src', 'chrome://favicon/' + bookmarkNode.url);

	li.append(img);
	li.append(anchor);
	if (hasChildren)
		li.append(dumpNodes(bookmarkNode.children,level+1));
	
	return li;
}

function collapseAll(){
		$('ul').hide();
}

function init(){
	collapseAll();
	$('.level0').show();
	$('.level1').show();		
	$('.folder').click(function(event){
		debugger;
		$(this).children('ul').show();
		$(this).children('ul').children('ul').show()
		event.stopPropagation();
	});
}



populateBookmarks();

//TODO: collapsible folders
//TODO: search
//TODO: context menu/editing 
//TODO: drag/drop
