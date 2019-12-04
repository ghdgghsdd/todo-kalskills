$(document).ready(function() {
	var input = $("#input");
	var myList = $("#myList");
	function addToList(){
		if(input.val().trim() == "") return;
		var inputVal = $("<span>"+input.val()+"</span>");
		var listItem = $("<li></li>");
		var editBtn = $("<button>Edit</button>");
		var deleteBtn = $("<button>Delete</button>");
		var doneBtn = $("<button>Mark As Done</button>");
		deleteBtn.on('click',function(){
			$(this).parent().remove();
		});
		doneBtn.on('click',function(){
			$(this).parent().toggleClass("done");
			if($(this).parent().hasClass('done')){
				$(this).text("Mark As Undone");
			}else{
				$(this).text("Mark As Done");
			}
		});
		editBtn.on('click', function() {
			inputVal.text("asd");
			$(this).siblings().first().text(prompt("Change to:"));
		});
		listItem.append([inputVal,editBtn,deleteBtn,doneBtn]);
		myList.append(listItem);
		input.val("");
	}
	$("#addBtn").on('click', function(){
		addToList();
	});
	input.on('keydown', function(event) {
		if(event.keyCode == 13){
			addToList();
		}
	});	
	$("#clearBtn").on('click', function(){
		myList.empty();
	});
});