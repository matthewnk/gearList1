
$(document).ready( function(){
		displayUserGearList();
		$("#addButton").click(addItem);
		$("#addButton").click(clearEntry);
		$("#clearButton").click(function(){
		  localStorage.removeItem('theList');
		  $('#userGearList').html(" ");
		});
	});

function addItem(e) {
  var entry = {};
  entry.item = $("#item").val();

  var dictionary = getDictionary();
  dictionary.push(entry);
  saveDictionary(dictionary);
  displayUserGearList(getDictionary());
  e.preventDefault();
}

function clearEntry (input, val) {
	if (input.value == val)
		input.value="";
}

function displayUserGearList(){
  var d = getDictionary();
  $userGearList = $('#userGearList');
  $userGearList.html(" ");
  $.each(d, function(index, entry){
    $userGearList.append("<li>" + "<input type='checkbox'/>" + entry.item + "</li><dd>" + "</dd>");
    	$("li").addClass("userGearList")
  });
}

function getDictionary(){
  if (localStorage.getItem('userGearList') === null){
    return([]);
  } else {
    return(JSON.parse(localStorage.getItem('userGearList')));
  }
}

function saveDictionary(d) {
  localStorage.setItem('userGearList', JSON.stringify(d));
}