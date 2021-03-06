//adding  new chate documents
//seting up a real-time listener to get new chats
//updating the username
//updating the room

class Chatroom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
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
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
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

    updateName(username){
        this.username = username;
    }

    updateRoom(room){
        this.room = room;
        console.log('room updated');
        //unsubcribe from the chatroom
        if(this.unsub){
            this.unsub();
        }
       
    }
}



