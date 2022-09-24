let today = moment().format('LLLL'); // variable of today which equals now in a format with day of the week and name of month with the date, year and time.
$("#currentDay").text(today);// attaching the variable today as text to the id element of current day to add text to the webpage.

$("textarea").each(function () { // creating an each function for "each" child element of textarea on the html. 
    var selectedInput = parseInt(($(this)).attr("id")); //creates a variable that can be used throughout the function, this variable has parseInt that changes a string to a number. used jQuery to select all text area elements with the "id" attribute.

    console.log($(this)) //I am console logging the jQuery $(this) to verify that all elements are selected from the html doc.

    if (selectedInput > moment().hour()) { // this if statement is saying that if the text area id values are greater than the current time by the current hour then the "future" (green) class will be will be applied.

        $(this).addClass("future"); // the Jquery this is making sure that this is applied to all text area "id's" on the html

    } else if (selectedInput == moment().hour()) { // this else if statement is stating if the current time by current hour is equal to the text area id then the class of "present" (red) will be applied. 

        $(this).addClass("present");// the Jquery this is making sure that this is applied to all text area "id's" on the html
    }
    else {
        $(this).addClass("past"); //this else statement says that anything else that is not greater to or equal to will have the class "past" (grey) applied to each text area that has an id attached.

    };    
    $("#" + selectedInput).val(localStorage.getItem(selectedInput)) // the #+selected input is taking the text area id and adding a # to the front of it then returning the value of the selected inputs in local storage.
    console.log("#" + selectedInput); // console logging to make sure that the number turns into a number object. 
});


$(".saveBtn").on("click", function (event) { //this is the click event function for the saveBtn class for the html
    event.preventDefault(); //this is to prevent the event from happening if the event isn't handled.

    const userInfo = $(this).prevAll().val(); // this is using jQuery to create a variable that is attached to all elements that have a saveBtn class on the html selecting all items that come before the last with the value of the first element.
    
    localStorage.setItem($(this).prev().attr("id"), userInfo) // this is setting to the local value the name that was typed in and associating it with the id class to the field that the input was entered.
});


