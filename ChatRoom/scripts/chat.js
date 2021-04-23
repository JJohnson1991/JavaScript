//adding  new chate documents
//seting up a real-time listener to get new chats
//updating the username
//updating the room

class Chatroom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }
    async addChat(message){
        //format a chat object
        const now = new Date();
        const chat = {
            message: message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };

        //save chat document 
        const respone = await this.chats.add(chat);
        return respone;
    }
    getChats(callback){
        this.chats
            .onSnapshot(snapshot => {
                //console.log("Get Chats snapshot", snapshot);
                snapshot.docChanges().forEach(change =>{
                    if(change.type === 'added'){
                        //update the ui
                        callback(change.doc.data());
                    }
                })
            });
    }
}

const chatroom = new Chatroom('gaming', 'Jordan');
//console.log(chatroom);
chatroom.getChats((data) =>{
    //console.log(data);
})