console.log("JS Started");
var total_case = 0;


$(document).ready(function () {
    $('path').hover(function () {
        console.log("I Am clicked");
        console.log($(this).attr('id'));
        $('#state').text($(this).attr('title'));
        $('#total').text("0");
        var arr = JSON.parse(text);
        console.log("DATA: "+arr[$(this).attr('title')]);
        $('#total').text(arr[$(this).attr('title')]);
        
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

$(document).ready(function(){
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=mF_vnYC5aerRdN8t3jbMVa_LttafxFBk_GlAiRcOdZnMvUNA3qLUvAvaGVFmWmshYrPNKxmpMBns7YqNx_noTyVWDtXG8jhTm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKXFvsR88vL4WiBr168omFadgngDnj25DLpEvLRaiIpzZr1NvbW-Bo38vshdDBv10tpytj_A4aoE&lib=Mm1FD1HVuydJN5yAB3dc_e8h00DPSBbB3')
            .then(response => {
                return response.json()
            })
            .then(data => {
                // Work with JSON data here
                console.log(data)
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

