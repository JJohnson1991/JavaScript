//This file will join everything

//Class instances
const chatroom = new Chatroom('general', 'Jordan'); 
//console.log(chatroom);

//get chats and render
chatroom.getChats((data) =>{
    console.log(data);
})