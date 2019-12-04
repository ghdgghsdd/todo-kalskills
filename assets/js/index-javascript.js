document.getElementById("addBtn").addEventListener("click",addToList);
document.getElementById("clearBtn").addEventListener("click",function(){
	var myList = document.getElementById("myList");
	myList.innerHTML = "";
});
document.getElementById("input").addEventListener("keydown",function(event){
	if(event.keyCode == 13){
		addToList();
	}
});
function addToList(){
	var input = document.getElementById("input");
	if (input.value.trim().length <= 0) return;
	var myList = document.getElementById("myList");
	var inputVal = input.value;
	var textNode = document.createTextNode(inputVal);
	var newListItem = document.createElement("li");
	var editBtn = document.createElement("button");
	editBtn.appendChild(document.createTextNode("Edit"));
	editBtn.addEventListener("click",function(){
		textNode.data = prompt("Edit Item");
	});
	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("Delete"));
	deleteBtn.addEventListener("click",function(){
		newListItem.remove();
	});
	var doneBtn = document.createElement("button");
	var doneTextNode = document.createTextNode("Mark as Done");
	doneBtn.appendChild(doneTextNode);
	doneBtn.addEventListener("click",function(){
		if(newListItem.classList.toggle("done")){
			doneTextNode.data = "Mark as Undone";
		}else{
			doneTextNode.data = "Mark as Done";
		}
	});
	newListItem.appendChild(textNode);
	newListItem.appendChild(editBtn);
	newListItem.appendChild(deleteBtn);
	newListItem.appendChild(doneBtn);
	myList.appendChild(newListItem);
	input.value = "";
}