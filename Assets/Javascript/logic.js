
// hero array
var hero = ["Captain America", "Hulk", "Iron Man", "Thor", "Black Widow", "Hawkeye"]

function gifDisplay() {

    var hero = $(this).attr("data-name");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + Hero + "&api_key=PzWVIo3ocW3i5iJKFy7ceDRxGL2hMfxd";


    //Ajax Call
    $.ajax({ url: queryUrl, method: "Get"}).done(function(response) {

        //Empty div holdign previos Gifs
        $('gifStorage').empty();

        for (let i = 0; i < response.data.length; i++){

            // Variables to add images by using the button created in index.HTML
            var gifDiv    = $('<div class="gifDiv">');
            var rating    = response.data[i].rating;
            var ratingDiv = $('<p>').html("Rating: " + rating);
            var amimated  = response.data[i].images.fixed_height.url;
            var still     = respomse.data[i].images.fixes_height_still.url;
            var gifImg    = $('<img calss="gImage">');

            // Default gifs still
            gifImg.attr('src', still);
            gifImg.attr('data'-still, still);
            gifImg.attr('data-animate', animated);
            gifImg.attr('data-state', 'still')

            // Securing ratings appear after their respective gifs
            gifDiv.append(ratingDiv);
            gifDiv.prepend(gifImg);
            $('.gifStorage').prepend(gifDiv);

        } 

    });

};