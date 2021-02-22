
function GetSelected() {

    var selected = new Array();
    var div1 = document.getElementById("div1");
    var chks = div1.getElementsByTagName("INPUT");

    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            selected.push(chks[i].value);
        }
    }

    //Display the selected CheckBox values.
    if (selected.length > 0) {
        document.write("Selected values: " + selected.join(","));
       
    }
};