function populateBookmarks(){
	debugger;
	chrome.bookmarks.getTree(		
			function(bookmarkTreeNodes){
				$('#bookmarks').append(dumpTreeNodes(bookmarkTreeNodes));			
			});
}

function dumpTreeNodes(bookmarkNodes){
	var list = $('<ul>');
	var i;
	for (i = 0; i < bookmarkNodes.length; i++){
		list.append(dumpNode(bookmarkNodes[i]));
	}
	return list;	
}

function dumpNode(bookmarkNode){
	//make a li
	//if this node has children, li.append(dumpTreeNodes)
	//return li
	
	var li = $('<li>');
	li.append(bookmarkNode.title);
	if (bookmarkNode.children && bookmarkNode.children.length >0)
		li.append(dumpTreeNodes(bookmarkNode.children));
	
	return li;
}

populateBookmarks();

