function populateBookmarks(){
	debugger;
	chrome.bookmarks.getTree(		
			function(bookmarkNodes){
				$('#bookmarks').append(dumpNodes(bookmarkNodes));			
			});
}

function dumpNodes(bookmarkNodes){
	var list = $('<ul>');
	var i;
	for (i = 0; i < bookmarkNodes.length; i++){
		list.append(dumpNode(bookmarkNodes[i]));
	}
	return list;	
}

function dumpNode(bookmarkNode){
	var li = $('<li>');

	var anchor = $('<a>');
	anchor.attr('href', bookmarkNode.url);
	anchor.text(bookmarkNode.title);

	//TODO: use storage api to store this locally
	var img = $('<img>');
	img.attr('src', 'chrome://favicon/' + bookmarkNode.url);

	li.append(img);
	li.append(anchor);
	if (bookmarkNode.children && bookmarkNode.children.length >0)
		li.append(dumpNodes(bookmarkNode.children));
	
	return li;
}

populateBookmarks();

