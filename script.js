$(document).ready(function () {

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
// PASSWORD (change it here 💖)
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
    let index = 0;

    setInterval(() => {
        $("#loveText").fadeOut(400, function () {
            $(this).text(loveLanguages[index]).fadeIn(400);
        });
        index = (index + 1) % loveLanguages.length;
    }, 2000);

    // Floating hearts
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
 n


});