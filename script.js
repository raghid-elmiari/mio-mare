$(document).ready(function () {

    // ---------- LOVE MESSAGES ----------
    const loveLanguages = [
        "Mio mare ti amo", "I love you", "Je t’aime", "Te amo",
        "Ich liebe dich", "Ti amo", "Eu te amo", "أحبك",
        "Я тебя люблю", "Σ’ αγαπώ", "אני אוהב אותך",
        "我爱你", "愛してる", "사랑해", "Seni seviyorum",
        "Ik hou van jou", "Jag älskar dig", "Volim te",
        "Te iubesc", "Kocham cię", "Saya cinta kamu",
        "Mahal kita", "Nakupenda", "Mo nifẹ rẹ",
        "Anh yêu em", "Is breá liom tú", "Mi amas vin",
        "Habibi ana bahebak", "Ana behibek",
        "Mio mare ti amo 💖"
    ];

    // ---------- PASSWORD UNLOCK ----------
    const SECRET_PASSWORD = "monstersuniversity25";
    $("#unlockBtn").click(function () {
        const entered = $("#passwordInput").val();
        if (entered === SECRET_PASSWORD) {
            $("#lockScreen").fadeOut(800);
            $("#mainContent").fadeIn(800);
            document.getElementById("bgMusic").play();
        } else {
            $("#errorMsg").fadeIn().delay(1200).fadeOut();
        }
    });

    // ---------- CYCLING LOVE TEXT ----------
    let index = 0;
    setInterval(() => {
        $("#loveText").fadeOut(400, function () {
            $(this).text(loveLanguages[index]).fadeIn(400);
        });
        index = (index + 1) % loveLanguages.length;
    }, 2000);

    // ---------- FLOATING HEARTS ----------
    setInterval(() => {
        const heart = $("<span>❤</span>");
        heart.css({
            left: Math.random() * 100 + "vw",
            fontSize: Math.random() * 20 + 15 + "px",
            animationDuration: Math.random() * 4 + 6 + "s"
        });
        $(".hearts").append(heart);
        setTimeout(() => heart.remove(), 8000);
    }, 300);

    // ---------- VALENTINE MODAL & MOVING NO BUTTON ----------
    const $modal = $("#valentineModal");
    const $askBtn = $("#askValentineBtn");
    const $closeModal = $("#closeModalBtn");
    const $noBtn = $("#noBtn");
    const $yesBtn = $("#yesBtn");
    const $btnContainer = $("#buttonContainer");

    // open modal
    $askBtn.on("click", function () {
        $modal.fadeIn(300);
        resetNoButton();
    });

    // close modal (X)
    $closeModal.on("click", function () {
        $modal.fadeOut(200);
    });

    // close modal if click outside the card
    $modal.on("click", function (e) {
        if ($(e.target).is(".modal-overlay")) {
            $modal.fadeOut(200);
        }
    });

    // move "No" button randomly
    function moveNoButtonRandomly() {
        if ($noBtn.css("position") !== "absolute") {
            $noBtn.css("position", "absolute");
        }
        const containerWidth = $btnContainer.width();
        const containerHeight = $btnContainer.height();
        const btnWidth = $noBtn.outerWidth();
        const btnHeight = $noBtn.outerHeight();

        let maxLeft = containerWidth - btnWidth - 10;
        let maxTop = containerHeight - btnHeight - 10;
        maxLeft = Math.max(maxLeft, 5);
        maxTop = Math.max(maxTop, 5);

        $noBtn.css({
            left: Math.floor(Math.random() * maxLeft) + "px",
            top: Math.floor(Math.random() * maxTop) + "px"
        });
    }

    function resetNoButton() {
        $noBtn.css({ position: "", left: "", top: "" });
    }

    $noBtn.on("click", function (e) {
        e.preventDefault();
        moveNoButtonRandomly();
    });

    // YES button – redirect to balloons.html
    $yesBtn.on("click", function (e) {
        e.preventDefault();
        window.location.href = "balloons.html";
    });

    // resize handler
    $(window).on("resize", function () {
        if ($modal.is(":visible") && $noBtn.css("position") === "absolute") {
            moveNoButtonRandomly();
        }
    });

    resetNoButton();
});