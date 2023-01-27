
$(function(){

    $("#numGuests").on("input", function(){
        $("#numGuestDisplay").html('About ' + $("#numGuests").val());
        if($("#numGuests").val() > 99){
            $("#numGuestDisplay").html('About ' + $("#numGuests").val() + '+');
        }
    })

    $("#numArches").on("input", function(){
        $("#numArchDisplay").html($("#numArches").val());
    })

    function price(){
        let total = 250;
        total += (Number($("#hours").val()) - 1) * 160;
        switch ($("#otherServices").val()){
            case "12ftarch" : total += 200;
                break;
            case "12ftarchdeco" : total += 280;
                break;
            case "40ftarch" : total += 500;
                break;
            case "1col" : total += 100;
                break;
            case "1gar" : total += 30;
                break;
            case "6gar" : total += 150;
                break;
            case "20ftarch" :
            case "12gar" : 
            case "3cols" : total += 300;
                    break;
            default: total;
        }
        return total
    }

    $("#hours").on("input", function(){
        $("#priceEstimate").html(price())
    })

    $("#otherServices").on("input", function(){
        $("#priceEstimate").html(price())
    })


    let name = $("#firstName").val();
    let lastName = $("#lastName").val(); 
    let email = $("#email").val(); 
    let phone = $("#phone").val();
    let numGuests = $("#numGuests").val();
    let ageGuests = $("#ageGuests").val();
    let hours = $("#hours").val();
    let otherServices = $("#otherServices").val();
    let servOther = $("#servOther").val();
    let evDate = $("#eventDate").val();
    let evTime = $("#eventTime").val();
    let evAddress = $("#eventAddress").val();
    let evCity = $("#eventCity").val();
    let evState = $("#eventState").val();
    let evCountry = $("#eventCountry").val();
    let occasion = $("#occasion").val();
    let occaOther = $("#occaOther").val();
    let setting = $("#setting").val();
    let setOther = $("#setOther").val();
    let parking = $("#parking").val();
    let referal = $("#referal").val();
    let notes = $("#notes").val();


    
    class Client{
        constructor(clientName, clientLastName, clientEmail, clientPhone ){
            this.name = clientName;
            this.lastName = clientLastName;
            this.email = clientEmail;
            this.phone = clientPhone;
        }
    }
    
    const client = new Client(name, lastName, email, phone);
    
    
    
    class Event{
        constructor(numGuests, ages, hours, otherServices, servOther, date, time, address, city, state, country, occasion, occaOther, setting, setOther, parking, referal, notes){
            this.nGuests = numGuests;
            this.ages = ages;
            this.hours = hours;
            this.otherServices = otherServices;
            this.servOther = servOther;
            this.date = date;
            this.time = time;
            this.address = address;
            this.city = city;
            this.state = state;
            this.country = country;
            this.occasion = occasion;
            this.occaOther = occaOther;
            this.setting = setting;
            this.setOther =setOther;
            this.parking = parking;
            this.referal = referal;
            this.notes = notes;
        }
    }
    
    const event = new Event(
        numGuests, 
        ageGuests, 
        hours,
        otherServices, 
        servOther, 
        evDate, 
        evTime, 
        evAddress,
        evCity,
        evState,
        evCountry,
        occasion,
        occaOther,
        setting,
        setOther,
        parking,
        referal,
        notes
        );
        
        function clientID(){
            let idNum = Math.ceil(Math.random()*10000);
            return idNum;
        }
        
        $("#bookingFormSubmit").on('click', function(){
         let id = clientID();
         console.log(id)
         console.log(client);
         console.log(event);
        });


        // Arches
        
        $(".colorPicker").hide();
        $("#pickerTitle").hide();
        $("#colorPickerTextInput").hide();
        $("#numColors").on("input", function(){
            $("#pickerTitle").show();
            $("#colorPickerTextInput").show();
            let num = $("#numColors").val();
            for(i=0 ; i<num ; i++){
                $(`#colorPicker${i}`).show();
            }
            for(i=num; i<6; i++){
                $(`#colorPicker${i}`).hide();
            }
        })

        function archPrice(){
            let total = 0;
            total += (Number($("#archSize").val())) * 20;
            switch ($("#archOtherServices").val()){
                case "1" : total += 250;
                    break;
                case "2" : total += 410;
                    break;
                case "3" : total += 570;
                    break;
                case "4" : total += 730;
                    break;
                case "1col" : total += 100;
                    break;
                case "1gar" : total += 30;
                    break;
                case "6gar" : total += 150;
                    break;
                case "12gar" : 
                case "3cols" : total += 300;
                        break;
                default: total;
            }
            return total
        }
    
        $("#archSize").on("input", function(){
            $("#archPriceEstimate").html(archPrice())
        })
    
        $("#archOtherServices").on("input", function(){
            $("#archPriceEstimate").html(archPrice())
        })


});


