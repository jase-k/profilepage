console.log("this script has loaded")

var numberOfConnectionRequests = document.getElementById("connectionRequest").firstElementChild.firstElementChild

var connectionList = document.getElementById("connections").firstElementChild.nextElementSibling

console.log(connectionList)


function removeConnection(element){
    element.parentElement.parentElement.remove()
    numberOfConnectionRequests.innerHTML -= 1
}

function addConnection(element){ 
    var name = element.parentElement.previousElementSibling
    console.log(name)
    
    //Removes the connection request and reduces count by one
    element.parentElement.parentElement.remove()
    numberOfConnectionRequests.innerHTML -= 1

    //Creates a div and correct html structure for connection box
    var block = document.createElement("DIV")
    block.className = "photoName"
    console.log(block)
    block.appendChild(name);

    //inserts the new div in the connections sidebar
    connectionList.insertBefore(block, connectionList.childNodes[0])

    //adds 1 to connections
    var connectionNumber = document.getElementById('connections').firstElementChild.firstElementChild
    var connectionCount =  connectionNumber.innerHTML
    console.log("number of connections", connectionNumber, connectionCount)
    connectionCount++

    connectionNumber.innerHTML = connectionCount
}

//Adds the Input Option under Username
function addInput(){
    if(document.getElementById("userNameInput")){
        console.log("REMOVED!")
        hideInput();
    }

    var username = document.getElementById('userCard').lastElementChild.firstElementChild

    var input = '<input type="text" placeholder="New Profile Name" value="" id="userNameInput"> <button onclick="changeUserName(this)" >submit</button>'

    username.insertAdjacentHTML("afterend", input)
}

function changeUserName(element){
    var input = element.previousElementSibling
    var newInput = input.value
    console.log(newInput)
    input.previousElementSibling.innerHTML = newInput 
    //Changes username

    hideInput();
}

function hideInput(){
    document.getElementById("userNameInput").nextElementSibling.remove()

    document.getElementById("userNameInput").remove()
}