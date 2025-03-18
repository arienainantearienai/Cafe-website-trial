document.addEventListener("DOMContentLoaded", function() {
    // 🔹 レビューを動的に追加する処理
    const reviews = [
        { name: "John", rating: 5, comment: "Amazing coffee!" },
        { name: "Emily", rating: 4, comment: "Great atmosphere!" },
        { name: "Chris", rating: 5, comment: "Best café in Tokyo!" }
    ];

    const reviewList = document.getElementById("review-list");

    reviews.forEach(review => {
        let reviewItem = document.createElement("div");
        reviewItem.innerHTML = `<strong>${review.name}</strong> ⭐${review.rating}<p>${review.comment}</p>`;
        reviewItem.classList.add("fade-in"); // 🔥 フェードイン用のクラスを追加
        reviewList.appendChild(reviewItem);
    });

    // 🔹 スクロール時のフェードイン効果を追加
    const fadeElements = document.querySelectorAll(".fade-in");

    function checkFade() {
        fadeElements.forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight - 100) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkFade);
    checkFade(); // ページ読み込み時も実行
});
