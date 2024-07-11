//Redirect to form when back button is pressed
function redirect(){
    location.href = "index.html"
}
console.log(localStorage)

//build a card for each blog post
function buildBody(){
    //iterate through posts
    for(i = 0; i < allPosts.length; i++){
        //build card with jquery
        $('#posts').append($('<div>').append($('<h3>').text(allPosts[i].title).attr('class', 'title')).append($('<p>').text(allPosts[i].content).attr('class', 'content')).append($('<h3>').text(`posted by ${allPosts[i].username}`).attr('class', 'username')))
    }
    
}
    
buildBody()
