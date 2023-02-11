
$(function () {

    $(".first").click(function(){
        window.location.href = 'arches.html'
    })
    $(".second").click(function(){
        window.location.href = 'garlands.html'
    })
    $(".third").click(function(){
        window.location.href = 'clusters.html'
    })
    $(".fourth").click(function(){
        window.location.href = 'book.html'
    })

    $("#numGuests").on("input", function () {
        $("#numGuestDisplay").html('About ' + $("#numGuests").val());
        if ($("#numGuests").val() > 99) {
            $("#numGuestDisplay").html('About ' + $("#numGuests").val() + '+');
        }
    })

    $("#numArches").on("input", function () {
        $("#numArchDisplay").html($("#numArches").val());
    })

    function price() {
        let total = 250;
        total += (Number($("#hours").val()) - 1) * 160;
        switch ($("#otherServices").val()) {
            case "12ftarch": total += 200;
                break;
            case "12ftarchdeco": total += 280;
                break;
            case "40ftarch": total += 500;
                break;
            case "1col": total += 100;
                break;
            case "1gar": total += 30;
                break;
            case "6gar": total += 150;
                break;
            case "20ftarch":
            case "12gar":
            case "3cols": total += 300;
                break;
            default: total;
        }
        return total
    }

    $("#hours").on("input", function () {
        $("#priceEstimate").html(price())
    })

    $("#otherServices").on("input", function () {
        $("#priceEstimate").html(price())
    })






    class Client {
        constructor(clientName, clientLastName, clientEmail, clientPhone) {
            this.name = clientName;
            this.lastName = clientLastName;
            this.email = clientEmail;
            this.phone = clientPhone;
        }
    }




    class Event {
        constructor(numGuests, ages, hours, otherServices, serviceNotes, date, time, address, city, state, country, occasion, occasionNotes, setting, settingNotes, parking, referal, additionalNotes, estPrice) {
            this.nGuests = numGuests;
            this.ages = ages;
            this.hours = hours;
            this.otherServices = otherServices;
            this.serviceNotes = serviceNotes;
            this.date = date;
            this.time = time;
            this.address = address;
            this.city = city;
            this.state = state;
            this.country = country;
            this.occasion = occasion;
            this.occasionNotes = occasionNotes;
            this.setting = setting;
            this.settingNotes = settingNotes;
            this.parking = parking;
            this.referal = referal;
            this.additionalNotes = additionalNotes;
            this.estPrice = estPrice;
        }
    }



    function clientID() {
        let idNum = Math.ceil(Math.random() * 10000);
        return idNum;
    }

    $("#bookingFormSubmit").on('click', function () {
        let name = $("#firstName").val();
        let lastName = $("#lastName").val();
        let email = $("#email").val();
        let phone = $("#telephone").val();
        let numGuests = $("#numGuests").val();
        let ageGuests = $("#ageGuests").val();
        let hours = $("#hours").val();
        let otherServices = $("#otherServices").val();
        let servOther = $("#serviceNotes").val();
        let evDate = $("#eventDate").val();
        let evTime = $("#eventTime").val();
        let evAddress = $("#eventAddress").val();
        let evCity = $("#eventCity").val();
        let evState = $("#eventState").val();
        let evCountry = $("#eventCountry").val();
        let occasion = $("#occasion").val();
        let occaOther = $("#occasionNotes").val();
        let setting = $("#setting").val();
        let setOther = $("#settingNotes").val();
        let parking = $("#parking").val();
        let referal = $("#referal").val();
        let notes = $("#additionalNotes").val();
        let estPrice = price();
        let idNumber = clientID();

        const client = new Client(
            name,
            lastName,
            email,
            phone
        );

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
            notes,
            estPrice
        );

        console.log("Client " + id + ":");
        console.log(client);
        console.log("Event " + id + ":");
        console.log(event);

        // function clientInfo(){
        //     return (
        //         <>
        //             {clientList.map(() => {
        //                 <Client key={idNumber} {...client} {...event}/>
        //             })};
        //         </>
        //     )
        // }

        // const Client = (props) => {
        //     const {
        //         name = "no name",
        //         lastName = "no last name",
        //         email = "no email",
        //         phone = "no phone",
        //         numGuests = "didn't input guest number",
        //         ageGuests = "didn't input guest ages",
        //         hours,
        //         otherServices = "No extra services",
        //         servOther = "definitely none",
        //         evDate,
        //         evTime,
        //         evAddress,
        //         evCity,
        //         evState = "prolly Cali",
        //         evCountry = "prolly US and A",
        //         occasion = "",
        //         occaOther = "",
        //         setting = "didn't specify setting",
        //         setOther = "",
        //         parking = "didn't specify parking situation",
        //         referal = "",
        //         notes = "",
        //         estPrice
        //     } = props;
        // return (
        //     <p>
        //         `${name} ${lastName} (${email} ${phone}) wants a ${hours}-long ${occasion} (${occaOther}) event with ${numGuests} guests from ${ageGuests}`
        //         <br/>
        //         `The event will be on ${evDate} at ${evTime} at ${evAddress}, ${evCity}, ${evState}, ${evCountry} in a ${setting} (${setOther})`
        //         <br/>
        //         `They want ${otherServices} (${servOther}).`
        //         <br/>
        //         `Parking info: ${parking}`
        //         <br/>
        //         `Other notes: ${notes}`
        //         <br/>
        //         `They heard about you from ${referal}`
        //         <br/>
        //         `Estimated price: ${estPrice}`
        //     </p>
        // );
        // };

    });


    // Arches

    $(".colorPicker").hide();
    $("#pickerTitle").hide();
    $("#colorPickerTextInput").hide();
    $("#numColors").on("input", function () {
        $("#pickerTitle").show();
        $("#colorPickerTextInput").show();
        let num = $("#numColors").val();
        for (i = 0; i < num; i++) {
            $(`#colorPicker${i}`).show();
        }
        for (i = num; i < 6; i++) {
            $(`#colorPicker${i}`).hide();
        }
    })

    function archPrice() {
        let total = 0;
        total += (Number($("#archSize").val())) * 20;
        switch ($("#archOtherServices").val()) {
            case "1": total += 250;
                break;
            case "2": total += 410;
                break;
            case "3": total += 570;
                break;
            case "4": total += 730;
                break;
            case "1col": total += 100;
                break;
            case "1gar": total += 30;
                break;
            case "6gar": total += 150;
                break;
            case "12gar":
            case "3cols": total += 300;
                break;
            default: total;
        }
        return total
    }

    $("#archSize").on("input", function () {
        $("#archPriceEstimate").html(archPrice())
    })

    $("#archOtherServices").on("input", function () {
        $("#archPriceEstimate").html(archPrice())
    })

    class Arch {
        constructor(numArches, numColors, color1, color2, color3, color4, color5, color6, archSize, otherServices, serviceNotes, date, time, address, city, state, country, occasion, occasionNotes, setting, settingNotes, parking, referal, additionalNotes, estPrice) {
            this.numArches = numArches;
            this.numColors = numColors;
            this.color1 = color1;
            this.color2 = color2;
            this.color3 = color3;
            this.color4 = color4;
            this.color5 = color5;
            this.color6 = color6;
            this.archSize = archSize;
            this.otherServices = otherServices;
            this.serviceNotes = serviceNotes;
            this.date = date;
            this.time = time;
            this.address = address;
            this.city = city;
            this.state = state;
            this.country = country;
            this.occasion = occasion;
            this.occasionNotes = occasionNotes;
            this.setting = setting;
            this.settingNotes = settingNotes;
            this.parking = parking;
            this.referal = referal;
            this.additionalNotes = additionalNotes;
            this.estPrice = estPrice;
        }
    }

    $("#archFormSubmit").on('click', function () {
        let name = $("#firstName").val();
        let lastName = $("#lastName").val();
        let email = $("#email").val();
        let phone = $("#telephone").val();
        let numArches = $("#numArches").val();
        let numColors = $("#numColors").val();
        let color1 = $("#colorPicker0").val();
        let color2 = $("#colorPicker1").val();
        let color3 = $("#colorPicker2").val();
        let color4 = $("#colorPicker3").val();
        let color5 = $("#colorPicker4").val();
        let color6 = $("#colorPicker5").val();
        let archSize = $("#archSize").val();
        let otherServices = $("#archOtherServices").val();
        let servOther = $("#archOtherServ").val();
        let deliveryDate = $("#deliveryDate").val();
        let deliveryTime = $("#deliveryTime").val();
        let deliveryAddress = $("#deliveryAddress").val();
        let deliveryCity = $("#deliveryCity").val();
        let deliveryState = $("#deliveryState").val();
        let deliveryCountry = $("#deliveryCountry").val();
        let occasion = $("#occasionArch").val();
        let occaOther = $("#occaOtherArch").val();
        let setting = $("#archSetting").val();
        let setOther = $("#setOtherArch").val();
        let parking = $("#parkingArch").val();
        let referal = $("#referal").val();
        let notes = $("#additionalNotesArch").val();
        let estPrice = archPrice();
        let id = clientID();

        const client = new Client(
            name,
            lastName,
            email,
            phone
        );

        const archOrder = new Arch(
            numArches,
            numColors,
            color1,
            color2,
            color3,
            color4,
            color5,
            color6,
            archSize,
            otherServices,
            servOther,
            deliveryDate,
            deliveryTime,
            deliveryAddress,
            deliveryCity,
            deliveryState,
            deliveryCountry,
            occasion,
            occaOther,
            setting,
            setOther,
            parking,
            referal,
            notes,
            estPrice
        );

        console.log("Client " + id + ":");
        console.log(client);
        console.log("Arch " + id + ":");
        console.log(archOrder);


    });

});


