//functions to create new cards with info
function addToIdea(){
    //creating the new list and creating the first list element for that list
    var cardList=document.createElement("ul"); //creates a new list
    var cardName=document.getElementById("cardNameIdea").value;
    var cardListElement=document.createElement("li");
    
    //addind id, and dragable attributes to the card, and changing the font size to 30
    cardList.setAttribute("id", cardName); //sets the id of the card equal to the name of the card
    cardList.setAttribute("draggable",true);
    cardList.setAttribute("ondragstart","drag(event)");
    cardList.ondragstart=function(){drag(event)};
    cardList.style.fontSize="30"; 

    //Creating and editing the name of the task at the top of the card
    var textNode =document.createTextNode("Name: "+cardName);
    cardListElement.appendChild(textNode);
    document.getElementById("ideaList").appendChild(cardList);
    cardList.appendChild(cardListElement);
    var cardNameAtt=document.createAttribute("id");
    cardNameAtt.value=cardName;
    cardListElement.setAttributeNode(cardNameAtt);

    //Creating a textarea to serve as a description for the task
    var description = document.createElement("textarea");
    description.setAttribute("type","text");
    description.setAttribute("placeholder", "add a description");
    var descriptionItem=document.createElement("li");
    descriptionItem.appendChild(description);
    description.style.height="100px";
    description.style.fontSize="20";
    description.style.width="180px";
    cardList.appendChild(descriptionItem);
    
    //using prompt to get the user to enter a due date for the task.
    var dueDate = prompt("Add a due date (YYYY-MM-DD)");
    var dueDateItem = document.createElement("li");
    var dueDateNode = document.createTextNode("Must be done by: ");
    var dueInputItem=document.createElement("li");
    dueInputItem.innerHTML=dueDate;
    dueInputItem.setAttribute("id", dueDate);
    dueDateItem.appendChild(dueDateNode);
    cardList.appendChild(dueDateItem);
    cardList.appendChild(dueInputItem);
    dueDateItem.style.fontSize="20";
    dueInputItem.style.fontSize="20";
    
    //adding users to the task
    var userItem=document.createElement("li");
    var userNode=document.createTextNode("Assigned to:" );
    userItem.appendChild(userNode);
    cardList.appendChild(userItem);
    userItem.style.fontSize="20";
    //loop to add new users to the list until the user decides not to anymore
    do{
        var i = 0;
        var users = prompt("Choose a user: 1=John Frederik, 2=Jaspreet Singh, 3=Marit Sivertsen, 4=Tor Arne");
        if(users==="1"){
            var userItem1=document.createElement("li");
            var userNode1=document.createTextNode("John Frederik");
            userItem1.appendChild(userNode1);
            cardList.appendChild(userItem1);
            userItem1.style.fontSize="20";
            userItem1.setAttribute("id", Math.random+cardName);
        }else if(users==="2"){
            var userItem2=document.createElement("li");
            var userNode2=document.createTextNode("Jaspreet Singh");
            userItem2.appendChild(userNode2);
            userItem2.style.fontSize="20";
            cardList.appendChild(userItem2);
            userItem2.setAttribute("id", Math.random+cardName+1);
        }else if(users==="3"){
            var userItem3=document.createElement("li");
            var userNode3=document.createTextNode("Marit Sivertsen");
            userItem3.appendChild(userNode3);
            cardList.appendChild(userItem3);
            userItem3.style.fontSize="20";
            userItem3.setAttribute("id", Math.random+cardName+2);
        }else if(users==="4"){
            var userItem4=document.createElement("li");
            var userNode4=document.createTextNode("Tor Arne");
            userItem4.appendChild(userNode4);
            cardList.appendChild(userItem4);
            userItem4.style.fontSize="20";
            userItem4.setAttribute("id", Math.random+cardName+3);
        }else{
            users=null;
        }
    }while(users!==null)
    
 
    //adding style to the card
    cardList.style.border="1px solid black";
    cardList.style.width="270px";
    cardList.style.backgroundColor="white";
    cardList.style.borderRadius="25px";
    cardList.style.margin="2px";
}
//the next three functions is similar to the previous one, only attaches to a different card
function addToDoList(){
    var cardList=document.createElement("ul");
    var cardName=document.getElementById("cardNameTodo").value;
   
    var cardListElement=document.createElement("li");
    cardList.setAttribute("id", cardName);
    cardList.setAttribute("draggable",true);
    cardList.setAttribute("ondragstart","drag(event)");
    cardList.ondragstart=function(){drag(event)};
    cardList.style.fontSize="30"; 
    
    var textNode =document.createTextNode(cardName);
    cardListElement.appendChild(textNode);
    document.getElementById("todoList").appendChild(cardList);
    cardList.appendChild(cardListElement);
    var cardNameAtt=document.createAttribute("id");
    cardNameAtt.value=Math.random;
    cardListElement.setAttributeNode(cardNameAtt);
    var description = document.createElement("textarea");
    description.setAttribute("type","text");
    description.setAttribute("placeholder", "add a description");
    var descriptionItem=document.createElement("li");
    descriptionItem.appendChild(description);
    description.style.height="100px";
    cardList.appendChild(descriptionItem);
    description.style.fontSize="20";
    description.style.width="180px";

    var desNameAtt = document.createAttribute("id");
    desNameAtt.value=Math.random;
    descriptionItem.setAttributeNode(desNameAtt);
    
    var dueDate = prompt("Add a due date (YYYY-MM-DD)");
    var dueDateItem = document.createElement("li");
    var dueDateNode = document.createTextNode("Must be done by: ");
    var dueInputItem=document.createElement("li");
    dueInputItem.innerHTML=dueDate;
    dueInputItem.setAttribute("id", dueDate);
    dueDateItem.appendChild(dueDateNode);
    cardList.appendChild(dueDateItem);
    cardList.appendChild(dueInputItem);
    dueDateItem.style.fontSize="20";
    dueInputItem.style.fontSize="20";
    
    var userItem=document.createElement("li");
    var userNode=document.createTextNode("Assigned to:" );
    userItem.appendChild(userNode);
    cardList.appendChild(userItem);
    userItem.style.fontSize="20";
    var usrNameAtt = document.createAttribute("id");
     do{
        var i = 0;
        var users = prompt("Choose a user: 1=John Frederik, 2=Jaspreet Singh, 3=Marit Sivertsen, 4=Tor Arne");
        if(users==="1"){
            var userItem1=document.createElement("li");
            var userNode1=document.createTextNode("John Frederik");
            userItem1.appendChild(userNode1);
            cardList.appendChild(userItem1);
            userItem1.style.fontSize="20";
            userItem1.setAttribute("id", Math.random+cardName);
        }else if(users==="2"){
            var userItem2=document.createElement("li");
            var userNode2=document.createTextNode("Jaspreet Singh");
            userItem2.appendChild(userNode2);
            userItem2.style.fontSize="20";
            cardList.appendChild(userItem2);
            userItem2.setAttribute("id", Math.random+cardName+1);
        }else if(users==="3"){
            var userItem3=document.createElement("li");
            var userNode3=document.createTextNode("Marit Sivertsen");
            userItem3.appendChild(userNode3);
            cardList.appendChild(userItem3);
            userItem3.style.fontSize="20";
            userItem3.setAttribute("id", Math.random+cardName+2);
        }else if(users==="4"){
            var userItem4=document.createElement("li");
            var userNode4=document.createTextNode("Tor Arne");
            userItem4.appendChild(userNode4);
            cardList.appendChild(userItem4);
            userItem4.style.fontSize="20";
            userItem4.setAttribute("id", Math.random+cardName+3);
        }else{
            users=null;
        }
    }while(users!==null)
    
    cardList.style.border="1px solid black";
    cardList.style.width="270px";
    cardList.style.backgroundColor="white";
    cardList.style.borderRadius="25px";
    cardList.style.margin="2px";
     
}

function addToProgress(){
    var cardList=document.createElement("ul");
    var cardName=document.getElementById("cardNameprogress").value;
   
    var cardListElement=document.createElement("li");
    cardList.setAttribute("id", cardName);
    cardList.setAttribute("draggable",true);
    cardList.setAttribute("ondragstart","drag(event)");
    cardList.ondragstart=function(){drag(event)};
    cardList.style.fontSize="30"; 
    
    var textNode =document.createTextNode(cardName);
    cardListElement.appendChild(textNode);
    document.getElementById("progressList").appendChild(cardList);
    cardList.appendChild(cardListElement);
    var cardNameAtt=document.createAttribute("id");
    cardNameAtt.value=cardName;
    cardListElement.setAttributeNode(cardNameAtt);
    var description = document.createElement("textarea");
    description.setAttribute("type","text");
    description.setAttribute("placeholder", "add a description");
    var descriptionItem=document.createElement("li");
    descriptionItem.appendChild(description);
    description.style.height="100px";
    cardList.appendChild(descriptionItem);
    description.style.fontSize="20";
    description.style.width="180px";

    var desNameAtt = document.createAttribute("id");
    desNameAtt.value=Math.random;
    descriptionItem.setAttributeNode(desNameAtt);
    
    var dueDate = prompt("Add a due date (YYYY-MM-DD)");
    var dueDateItem = document.createElement("li");
    var dueDateNode = document.createTextNode("Must be done by: ");
    var dueInputItem=document.createElement("li");
    dueInputItem.innerHTML=dueDate;
    dueInputItem.setAttribute("id", dueDate);
    dueDateItem.appendChild(dueDateNode);
    cardList.appendChild(dueDateItem);
    cardList.appendChild(dueInputItem);
    dueDateItem.style.fontSize="20";
    dueInputItem.style.fontSize="20";
    
    var userItem=document.createElement("li");
    var userNode=document.createTextNode("Assigned to:" );
    userItem.appendChild(userNode);
    cardList.appendChild(userItem);
    userItem.style.fontSize="20";
    var usrNameAtt = document.createAttribute("id");
    do{
        var i = 0;
        var users = prompt("Choose a user: 1=John Frederik, 2=Jaspreet Singh, 3=Marit Sivertsen, 4=Tor Arne");
        if(users==="1"){
            var userItem1=document.createElement("li");
            var userNode1=document.createTextNode("John Frederik");
            userItem1.appendChild(userNode1);
            cardList.appendChild(userItem1);
            userItem1.style.fontSize="20";
            userItem1.setAttribute("id", Math.random+cardName);
        }else if(users==="2"){
            var userItem2=document.createElement("li");
            var userNode2=document.createTextNode("Jaspreet Singh");
            userItem2.appendChild(userNode2);
            userItem2.style.fontSize="20";
            cardList.appendChild(userItem2);
            userItem2.setAttribute("id", Math.random+cardName+1);
        }else if(users==="3"){
            var userItem3=document.createElement("li");
            var userNode3=document.createTextNode("Marit Sivertsen");
            userItem3.appendChild(userNode3);
            cardList.appendChild(userItem3);
            userItem3.style.fontSize="20";
            userItem3.setAttribute("id", Math.random+cardName+2);
        }else if(users==="4"){
            var userItem4=document.createElement("li");
            var userNode4=document.createTextNode("Tor Arne");
            userItem4.appendChild(userNode4);
            cardList.appendChild(userItem4);
            userItem4.style.fontSize="20";
            userItem4.setAttribute("id", Math.random+cardName+3);
        }else{
            users=null;
        }
    }while(users!==null)
    
    cardList.style.border="1px solid black";
    cardList.style.width="270px";
    cardList.style.backgroundColor="white";
    cardList.style.borderRadius="25px";
    cardList.style.margin="2px";
    
}

function addToFinished(){
    var cardList=document.createElement("ul");
    var cardName=document.getElementById("cardNameFinished").value;
   
    var cardListElement=document.createElement("li");
    cardList.setAttribute("id", cardName);
    cardList.setAttribute("draggable",true);
    cardList.setAttribute("ondragstart","drag(event)");
    cardList.ondragstart=function(){drag(event)};
    cardName.style.fontSize="30"; 
    
    var textNode =document.createTextNode(cardName);
    cardListElement.appendChild(textNode);
    document.getElementById("finishedList").appendChild(cardList);
    cardList.appendChild(cardListElement);
    var cardNameAtt=document.createAttribute("id");
    cardNameAtt.value=Math.random;
    cardListElement.setAttributeNode(cardNameAtt);
    var description = document.createElement("textarea");
    description.setAttribute("type","text");
    description.setAttribute("placeholder", "add a description");
    var descriptionItem=document.createElement("li");
    descriptionItem.appendChild(description);
    description.style.height="100px";
    cardList.appendChild(descriptionItem);
    description.style.fontSize="20";
    description.style.width="180px";

    var desNameAtt = document.createAttribute("id");
    desNameAtt.value=Math.random;
    descriptionItem.setAttributeNode(desNameAtt);

    var dueDate = prompt("Add a due date (YYYY-MM-DD)");
    var dueDateItem = document.createElement("li");
    var dueDateNode = document.createTextNode("Must be done by: ");
    var dueInputItem=document.createElement("li");
    dueInputItem.innerHTML=dueDate;
    dueInputItem.setAttribute("id", dueDate);
    dueDateItem.appendChild(dueDateNode);
    cardList.appendChild(dueDateItem);
    cardList.appendChild(dueInputItem);
    dueDateItem.style.fontSize="20";
    dueInputItem.style.fontSize="20";
    
    var userItem=document.createElement("li");
    var userNode=document.createTextNode("Assigned to:" );
    userItem.appendChild(userNode);
    cardList.appendChild(userItem);
    var usrNameAtt = document.createAttribute("id");
    userItem.style.fontSize="20";
    do{
        var i = 0;
        var users = prompt("Choose a user: 1=John Frederik, 2=Jaspreet Singh, 3=Marit Sivertsen, 4=Tor Arne");
        if(users==="1"){
            var userItem1=document.createElement("li");
            var userNode1=document.createTextNode("John Frederik");
            userItem1.appendChild(userNode1);
            cardList.appendChild(userItem1);
            userItem1.style.fontSize="20";
            userItem1.setAttribute("id", Math.random+cardName);
        }else if(users==="2"){
            var userItem2=document.createElement("li");
            var userNode2=document.createTextNode("Jaspreet Singh");
            userItem2.appendChild(userNode2);
            userItem2.style.fontSize="20";
            cardList.appendChild(userItem2);
            userItem2.setAttribute("id", Math.random+cardName+1);
        }else if(users==="3"){
            var userItem3=document.createElement("li");
            var userNode3=document.createTextNode("Marit Sivertsen");
            userItem3.appendChild(userNode3);
            cardList.appendChild(userItem3);
            userItem3.style.fontSize="20";
            userItem3.setAttribute("id", Math.random+cardName+2);
        }else if(users==="4"){
            var userItem4=document.createElement("li");
            var userNode4=document.createTextNode("Tor Arne");
            userItem4.appendChild(userNode4);
            cardList.appendChild(userItem4);
            userItem4.style.fontSize="20";
            userItem4.setAttribute("id", Math.random+cardName+3);
        }else{
            users=null;
        }
    }while(users!==null)
    
    cardList.style.border="1px solid black";
    cardList.style.width="270px";
    cardList.style.backgroundColor="white";
    cardList.style.borderRadius="25px";
    cardList.style.margin="2px";
    
}