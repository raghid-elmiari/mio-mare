$(document).ready(function () {

    // =================================================
    //  YOUR 10 VALENTINE IMAGES & DESCRIPTIONS
    // =================================================
    // 1. Place your photos in the SAME FOLDER as balloons.html
    // 2. Name them mio1.jpeg, mio2.jpeg, ... mio10.jpeg
    // 3. Or change the "img" paths below to match your file names
    // =================================================
    const balloonData = [
        { img: "./mio1.jpeg",  desc: "i love you more than words will ever be able to explain" },
        { img: "./mio2.jpeg",  desc: "with you,even ordinary moments feel magical" },
        { img: "./mio3.jpeg",  desc: "No matter where life takes us,my heart will always choose you" },
        { img: "./mio4.jpeg",  desc: "121" },
        { img: "./mio5.jpeg",  desc: "you are my today,my tomorrow ,and my always" },
        { img: "./mio6.jpeg",  desc: "your smile is my daily dose of happiness" },
        { img: "./mio7.jpeg",  desc: " i will be always behind you " },
        { img: "./mio8.jpeg",  desc: "my heart feels safest when its with you" },
        { img: "./mio9.jpeg",  desc: "my sweety" },
        { img: "./mio10.jpeg", desc: " you are not just my valentine, you are always and forever"}
    ];

    // ----- DOM elements -----
    const $balloonItems = $(".balloon-item");
    const $popup = $("#photoPopup");
    const $popupImage = $("#popupImage");
    const $popupDesc = $("#popupDesc");
    const $backBtn = $("#backToMainBtn");

    // ----- assign data-index to each balloon (0–9) -----
    $balloonItems.each(function (idx) {
        $(this).attr("data-index", idx);
    });

    // ----- BALLOON CLICK: show pop-up with YOUR photo + description -----
    $balloonItems.on("click", function () {
        const idx = $(this).attr("data-index");
        if (idx !== undefined && balloonData[idx]) {
            const data = balloonData[idx];
            $popupImage.attr("src", data.img);
            $popupDesc.text(data.desc);
            $popup.fadeIn(300);   // appear
        }
    });

    // ----- CLICK ANYWHERE ON SCREEN: pop-up disappears -----
    $popup.on("click", function () {
        $popup.fadeOut(200);
    });

    // ----- BACK BUTTON: return to main page -----
    $backBtn.on("click", function () {
        window.location.href = "index.html";
    });

});