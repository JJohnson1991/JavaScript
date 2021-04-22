
const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');
const addRecipe = (recipe, id) =>{
    let time = recipe.created_at.toDate();
    let html = `
    <li data-id="${id}">
        <div>${recipe.title}</div>
        <div>${time}</div>
        <button class="btn btn-danger btn-sm my-2">Delete</button>
    </li>
    `;
    list.innerHTML += html;
    
}
//gets the documents 
// db.collection('recipes').get().then((snapshot)=>{
//     //when we have the data
//    snapshot.docs.forEach(doc =>{
//        //console.log(doc.data(),doc.id);
//        addRecipe(doc.data(), doc.id);
//    })
// }).catch(error => {
//     console.log(error)
// });

const deleteRecipeFromHTML =(id) =>{
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe =>{
        if(recipe.getAttribute('data-id') === id){
            recipe.remove();
        }
    })
}

//active/retime listener 
const unSub = db.collection('recipes').onSnapshot(snapshot => {
    //console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change =>{
        const doc = change.doc;
        console.log(doc);
        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id);
        }else if(change.type === 'removed'){
            deleteRecipeFromHTML(doc.id);
        }
    })
});




//add documents 
form.addEventListener('submit', e =>{
    e.preventDefault();

    const now = new Date();
    //create an object that represents an object of data
    const recipe = {
        //recipe is the id of the input field
        title: form.recipe.value,
        //creates a firebase timeStamp object (FB is should be loaded in HTML)
        created_at: firebase.firestore.Timestamp.fromDate(now),
         
    };
    db.collection('recipes').add(recipe).then(() =>{
        console.log('recipe added');
    }).catch((error) =>{
        console.log(error)
    });
    form.reset();
});


//Deleting Data
list.addEventListener('click', e =>{
    //target property
    //console.log(e);
    if(e.target.tagName === 'BUTTON'){
        const id = e.target.parentElement.getAttribute('data-id');
        //console.log(id);
        db.collection('recipes').doc(id).delete().then(()=>{
            console.log('Deleted')
        });
    }
});


//unsub from database

button.addEventListener('click', ()=>{
    unSub();
    console.log('Unsubcribed from collection changes');
})