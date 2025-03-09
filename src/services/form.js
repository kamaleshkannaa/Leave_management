function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode == 13)
        return false;
    return true;
}

function isDecimal(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode < 31 || (charCode >= 48 && charCode <= 57) || charCode == 46)
        return true;
    return false;
}

function dtpicker_validate(dt_date) {
    txt_date = dt_date.value;
    var iDateArray = txt_date.split('/');
    var day = iDateArray[0];
    var month = iDateArray[1];
    var year = iDateArray[2];
    cur_date = new Date();
    cur_day = cur_date.getDate();
    cur_month = cur_date.getMonth() + 1;
    cur_year = cur_date.getFullYear();

    if (year > cur_year) {
        alert('You should not select a future date');
        dt_date.value = "";
    } else if (year == cur_year && month > cur_month) {
        alert('You should not select a future date');
        dt_date.value = "";
    } else if (year == cur_year && month == cur_month && day > cur_day) {
        alert('You should not select a future date');
        dt_date.value = "";
    }
}

function isAlphaNumeric(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode < 33 || (charCode >= 65 && charCode < 91) || (charCode >= 97 && charCode < 123) || (charCode >= 46 && charCode <= 57))
        return true;
    return false;
}

function isAddress(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode < 33 || charCode == 38 || (charCode >= 65 && charCode <= 91) || (charCode >= 97 && charCode < 123) || (charCode >= 40 && charCode <= 57))
        return true;
    return false;
}

function isNameplus(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode < 31 || (charCode >= 65 && charCode < 91) || (charCode >= 97 && charCode < 123) || charCode == 64 || charCode == 32 || charCode == 45 || charCode == 44)
        return true;
    return false;
}

function isName(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode < 31 || (charCode >= 65 && charCode < 91) || (charCode >= 97 && charCode < 123) || charCode == 64 || charCode == 32)
        return true;
    return false;
}

function attempts(txt) {
    if (txt.value >= 5) {
        alert('You are trying to give ' + txt.value + ' attempts');
    }
}

function parseDate(str) {
    var mdy = str.split('-');
    return new Date(mdy[2], mdy[1], mdy[0] - 1);
}

function daydiff(first, second) {
    return (second - first) / (1000 * 60 * 60 * 24);
}


// export default form;