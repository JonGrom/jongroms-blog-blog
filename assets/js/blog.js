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
        $('#posts').append($('<div>').append($('<div>').attr('class', 'inner-div').append($('<h3>').text(allPosts[i].title).attr('class', 'title',)).append($('<p>').text(allPosts[i].content).attr('class', 'content'))).append($('<h3>').text(`-posted by ${allPosts[i].username}`).attr('class', 'username')))
    }
    
}
    
buildBody()

//Theme switcher function: toggles between light mode and dark mode
function themeSwitch(){
    if ($('#themeSwitcher').text() == "Light Mode"){
        $('#themeSwitcher').text("Dark Mode").attr('class', 'dark-mode-button');
        $('#back-btn').attr('class', 'dark-mode-button');
        $("body").css('background-color', 'black');
        $("h1").css('color', '#C5CBE3')
        $(".username").css('color', '#C5CBE3')
        $("a").css('color', '#C5CBE3')
    } else if ($('#themeSwitcher').text() == "Dark Mode") {
        $('#themeSwitcher').text("Light Mode").removeClass('dark-mode-button');
        $('#back-btn').removeClass('dark-mode-button');
        $("body").css('background-color', '#eed9c4');
        $("h1").css('color', '#6a5e46')
        $(".username").css('color', '#6a5e46')
        $("a").css('color', '#6a5e46')
    }
    
}
