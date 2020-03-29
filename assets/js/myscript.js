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
        var arr = JSON.parse(text);
        var rec_arr = JSON.parse(recovered);
        var death_arr = JSON.parse(death);
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
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=mF_vnYC5aerRdN8t3jbMVa_LttafxFBk_GlAiRcOdZnMvUNA3qLUvAvaGVFmWmshYrPNKxmpMBns7YqNx_noTyVWDtXG8jhTm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKXFvsR88vL4WiBr168omFadgngDnj25DLpEvLRaiIpzZr1NvbW-Bo38vshdDBv10tpytj_A4aoE&lib=Mm1FD1HVuydJN5yAB3dc_e8h00DPSBbB3')
            .then(response => {
                return response.json()
            })
            .then(data => {
                // Work with JSON data here
                
                text = JSON.stringify(data);
              
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
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=-Iv_lynZNY-I6ly92aUfjHUjWVqFlchptzMtPlba8pVOqqprww4LCWCQFik-4jIvIvR2MpFLbKAZOnAKNe3LeCI2RGE27jgKm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKu-tewsEhB95rFiMjS2iZeGzXZjLGlRtby6uRBE-_AD8mQw1mCR8VU1XZita4E94fYIZDdlYyLs&lib=M3HJC6ZIata2fqmphc248BZydTGUuaopA')
            .then(response => {
                return response.json()
            })
            .then(data => {
                // Work with JSON data here
                
                recovered = JSON.stringify(data);
              
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
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=KOMc6gRxczG9Ltu_2RpOXVPlj7vufsytj_64xxDQ7sD-GQa-mtGlEtqnI_Ou079hbyL2dl9HDisFFkaY-CmEG9e-ksfYUtXUm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBzSir58wwTfae2g-FxLAmBmN3cGrxmsQWq7iQZyZYI1T0Dt9YO4Fhcgv6cZCDRTfCvom--NyM7Y&lib=MzN3adbdSZXzDyXCwJAdtGpydTGUuaopA')
            .then(response => {
                return response.json()
            })
            .then(data => {
                // Work with JSON data here
                
                death = JSON.stringify(data);
              
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

