document.addEventListener("DOMContentLoaded", () => {
    Swal.fire({
        title: "Halo Sayangg💗",
        text: "Di simak ya websitenya, ada yang spesial buat kamu",
        imageUrl: "welcome.gif",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "gif",
    }).then(() => {
        // Tampilkan isi konten
        document.querySelector(".content").style.display = "block";

        // Mulai efek hati jatuh
        setInterval(createHeart, 300);

        // Isi surat cinta
        const surat =
            "Aku nggak tahu sejak kapan tepatnya, tapi setiap kali kita ngobrol, ketemu, atau bahkan cuma saling sapa lewat chat, " +
            "ada rasa nyaman yang nggak bisa aku jelasin. Kamu beda. Bukan cuma cantik, tapi juga punya cara sendiri bikin hari-hariku jadi lebih ringan. " +
            "Setiap senyummu itu kayak obat paling ampuh buat stres dan capekku. " +
            "Jadi hari ini aku cuma mau jujur… aku suka kamu. Lebih dari sekadar teman ngobrol, lebih dari sekadar biasa. " +
            "Aku pengen lebih dekat, lebih sering ada buat kamu, dan lebih dari itu—aku pengen jadi seseorang yang bisa kamu andalkan. " +
            "Bolehkah aku jadi orang yang kamu pilih untuk saling jaga dan saling tumbuh bersama?";

        // Efek mengetik
        new Typed("#typed-output", {
            strings: [surat],
            typeSpeed: 50,
        });
    });
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.innerText = "💗";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
