var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

for(let i=0;i<library.length;i++){
    var book=library[i].title +" "+library[i].author
    if(library[i].readingStatus){
        console.log("already done"+ book)
    }
    else{
        console.log("need to read"+ book)
    }
}