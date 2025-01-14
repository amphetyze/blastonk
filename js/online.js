function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

document.addEventListener("DOMContentLoaded", () => {
    const onlineTextWrapper = document.querySelector(
        ".header__online-text-wrapper"
    )

    function getRandomNumber(min, max) {
        return (Math.random() * (max - min) + min).toFixed(0);
    }

    function updateOnlineCount() {
        let count = onlineTextWrapper.querySelector('span');

        return count.textContent = getRandomNumber(700, 2500);
    }

    setInterval(updateOnlineCount, 60000);
    updateOnlineCount();
});