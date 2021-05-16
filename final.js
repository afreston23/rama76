let header = document.getElementById("myHeader");
let footer = document.getElementById("myFooter");
let sticky = header.offsetTop;


$(document).ready(function(){
    // Append all paragraphs
  
  $('#content').append('<div></div>');  
 
});


let commentId = 1;

function addComment()
{

  displayName = document.getElementById("displayname").value;
  userComment = document.getElementById("comment").value;
  
 let theComment='<div class="commentbox" id="'+commentId+'">';
 theComment+='<div class="textComment">';
 theComment+='<div class="userStuff">';
 theComment+='<div class="displayNameSize">';
 theComment+= " " +displayName+' ';
 theComment+='</div>';
 theComment+='<text id="AC'+commentId+'">' + userComment +'</text>';
 theComment+='</div>';
 theComment+='<div class="editDelete">';
 theComment+="<text onclick='editComment("+commentId+")'> Edit </text>";
 theComment+="<text onclick='deleteComment("+commentId+")'> Delete </text>";
 theComment+='</div>';
 theComment+='</div>';
 theComment+='</div>';
  
  $('#content').prepend(theComment);
  commentId = commentId + 1;
}

function deleteComment(idToDelete)
{
  toDelete="#"+idToDelete;
  $(toDelete).remove(); 
}

function editComment(idToEdit)
{
  toEdit="#"+idToEdit;
  currentComment=$("#AC"+idToEdit).text();
  editForm='<br><input type="text" id="editField'+idToEdit+'" value="'+currentComment+'">';
  editForm+=`<text onclick='updateComment(${idToEdit})'>submit</text>`;
  $(toEdit).append(editForm);
}

function updateComment(idToChange)
{
  let id = "#AC" + idToChange
  let textFieldId = "#editField" + idToChange
  let newValue = $(textFieldId).val()

  $(id).text(newValue)
}


