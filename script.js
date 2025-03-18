document.addEventListener("DOMContentLoaded", function() {
    const reviews = [
        { name: "John", rating: 5, comment: "Amazing coffee!" },
        { name: "Emily", rating: 4, comment: "Great atmosphere!" },
        { name: "Chris", rating: 5, comment: "Best café in Tokyo!" }
    ];

    const reviewList = document.getElementById("review-list");

    reviews.forEach(review => {
        let reviewItem = document.createElement("div");
        reviewItem.innerHTML = `<strong>${review.name}</strong> ⭐${review.rating}<p>${review.comment}</p>`;
        reviewList.appendChild(reviewItem);
    });
});
