function display_register_form() {
    var lfc = document.getElementById("login_form_content");
    var rfc = document.getElementById("register_form_content");
    lfc.style.display = "none";
    rfc.style.display = "block";
}
$(document).ready(function () {
    var rfc = document.getElementById("register_form_content");
    rfc.style.display = "none";
    lfc.style.display = "block";
});