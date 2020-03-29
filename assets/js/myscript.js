console.log("JS Started");
var total_case = 0;
var total_recovered = 0;
var total_death =0;

$(document).ready(function () {
    $('path').hover(function () {
        console.log("I Am clicked");
        console.log($(this).attr('id'));
        $('#state').text($(this).attr('title'));
        $('#total').text("0");
//        var arr = JSON.parse(text);
//        var rec_arr = JSON.parse(recovered);
//        var death_arr = JSON.parse(death);
        console.log("DATA: "+arr[$(this).attr('title')]);
        $('#total').text(arr[$(this).attr('title')]);
        $('#recovered').text(rec_arr[$(this).attr('title')]);
        $('#death').text(death_arr[$(this).attr('title')]);
        
        
    });
});

//$(document).on({
//    mouseenter: function () {
//        //change color on mouse enter
//        $('#heading').text("HELLO"+$('id').value);
//        console.log("Mouse Enter");
//    },
//    mouseleave: function () {
//        //change color on mouse leave
//        console.log("Mouse Leave");
//    }
//});

// FOR ALL CASES
$(document).ready(function(){
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=w2R19KPGifjm_G7_PryH0B9LvvYRGFX3MDbt91E46aUw8W4lVuMdckUyXf9fNF8YhbKvNGl_Hn1egcqK5izTSUUNqyvwk3Oim5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOSn2qq3tIQu_cZ30CRrk2nQMyE-C-0yK9EUE7hAU4GSaWVU7YzNJeCluyOhnFMFPQZeeUM_QTzE&lib=M6u84tkoeNjDyoFZHGcGudZydTGUuaopA')
            .then(response => {
                return response.json()
            })
            .then(data => {
                // Work with JSON data here
                
                text = JSON.stringify(data);
                arr = JSON.parse(text);
              
                var obj = JSON.parse(text, function (key, value) {
                    total_case = total_case + value;
                    console.log("Total: "+total_case);
                });
                $('#total').text(parseInt(total_case));
                

            })
            .catch(err => {
                console.log("Error Occured");
            })
});

// FOR ALL RECOVERED
$(document).ready(function(){
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=N9KW-SFZbBlnG_MVfUakROTTfTB0n3K-qORzViaeZQ_j9Km6C7hwAnkFMU6AIu9exm1XdTvS8GqAYEqSXUxg4WYiX8FHALl8m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFhFOLl_ALu2RqZ9A0ZGwCLQVi6DoweAa5McigCVxISM7fzFSVxTmuwwIPiXWdPRRkWY2nZ7HPw5&lib=MqMCQsxfQ7f4IByiLio3qRl8-k_s04r_S')
            .then(response => {
                return response.json()
            })
            .then(data => {
                // Work with JSON data here
                
                recovered = JSON.stringify(data);
                rec_arr = JSON.parse(recovered);
              
                var obj = JSON.parse(recovered, function (key, value) {
                    total_recovered = total_recovered + value;
                    console.log("Total Recovered: "+total_recovered);
                });
                $('#recovered').text(parseInt(total_recovered));
                

            })
            .catch(err => {
                console.log("Error Occured");
            })
});

// FOR ALL DEATH
$(document).ready(function(){
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=wzRktJO7Ke3ZSJKq1C8-4MvI7e7FWh35MpbkzzF_3KduFPLZh4f1M7Xt0cr892o62G8WGI55bAqo3Etc_CFheDWovqhBIFEkm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnE-cZVz8Ku-tz2Z_IaUTsidSXqkFm6Q6Ybl_518kqH9o4DMx9oejlIyC5qbo_P4xxmLslupA9sGc&lib=MeP96nEBGVgla966FWXoX_5ydTGUuaopA')
            .then(response => {
                return response.json()
            })
            .then(data => {
                // Work with JSON data here
                
                death = JSON.stringify(data);
                death_arr = JSON.parse(death);
              
                var obj = JSON.parse(death, function (key, value) {
                    total_death = total_death + value;
                    console.log("Total Recovered: "+total_death);
                });
                $('#death').text(parseInt(total_death));
                

            })
            .catch(err => {
                console.log("Error Occured");
            })
});

