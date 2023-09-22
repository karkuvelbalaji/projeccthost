document.addEventListener("DOMContentLoaded", function() {
    // Get references to the radio buttons and related field containers
    var governmentYes = document.getElementById("governmentYes");
    var governmentNo = document.getElementById("governmentNo");
    var governmentFields = document.getElementById("governmentFields");
    var nonGovernmentFields = document.getElementById("nonGovernmentFields");

    // Initially hide both containers
    governmentFields.style.display = "none";
    nonGovernmentFields.style.display = "none";

    // Add event listeners to the radio buttons
    governmentYes.addEventListener("change", function() {
        if (governmentYes.checked) {
            governmentFields.style.display = "block";
            nonGovernmentFields.style.display = "none";
        }
    });

    governmentNo.addEventListener("change", function() {
        if (governmentNo.checked) {
            governmentFields.style.display = "none";
            nonGovernmentFields.style.display = "block";
        }
    });
});
