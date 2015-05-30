(function() {
    // TODO: Create an ajax GET request for /data/inventory.json
    var inventory = $.get("data/inventory.json");

    inventory.done(function(data) {
        console.log("AJAX call completed successfully!");
        console.log(data);

        var htmlString = "";

        $("#button").click(function(){
            for (var i = 0; i < data.length; i++) {
            htmlString += "<tr>";
                htmlString += "<td>" + data[i].title + "</td>";
                htmlString += "<td>" + data[i].quantity + "</td>";
                htmlString += "<td>" + data[i].price + "</td>";
                htmlString += "<td>" + data[i].categories + "</td>";
                htmlString += "</tr>";
            };

            $("#insertProducts").html(htmlString);
        });

    })


    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements
})();