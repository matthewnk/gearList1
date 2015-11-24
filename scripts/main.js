$(document).ready( function(){
        displayDictionary();
        $("#addButton").click(addWord);
        $("#addButton").click(clearEntry);
        $("#clearButton").click(function(){
          localStorage.removeItem('theDictionary');
          $('#wordList').html(" ");
        });
      });

      function addWord(e) {
        var entry = {};
        entry.word = $("#word").val();

        var dictionary = getDictionary();
        dictionary.push(entry);
        saveDictionary(dictionary);
        displayDictionary(getDictionary());
        e.preventDefault();
      }

      function clearEntry () {
      	this.form.elements["addButton"].value = 'add item'
      }

      function displayDictionary(){
        var d = getDictionary();
        $wordList = $('#wordList');
        $wordList.html(" ");
        $.each(d, function(index, entry){
          $wordList.append("<li>" + '<a href="">' + entry.word + '</a>' + "</label></li><dd>" + "</dd>");
          	$("li").addClass("addMenu")
        });
      }

      function getDictionary(){
        if (localStorage.getItem('theDictionary') === null){
          return([]);
        } else {
          return(JSON.parse(localStorage.getItem('theDictionary')));
        }
      }

      function saveDictionary(d) {
        localStorage.setItem('theDictionary', JSON.stringify(d));
      }