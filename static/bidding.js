let time = 110;
const timerEl = document.getElementById("timer");
const interval = setInterval(() => {
  if (time <= 0) {
    clearInterval(interval);
    timerEl.innerText = "TIME'S UP!";
    return;
  }
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerEl.innerText = `TIME REMAINING: ${minutes}:${seconds.toString().padStart(2, '0')}`;
  time--;
}, 1000);

function submitBid() {
  const bidInput = document.getElementById("bidInput");
  const highestBidEl = document.getElementById("highestBid");
  const newBid = parseFloat(bidInput.value);
  const currentHighest = parseFloat(highestBidEl.innerText.replace(/[^\d.]/g, ''));

  if (!newBid || newBid <= currentHighest) {
    alert("Please enter a bid higher than the current highest.");
    return;
  }

  highestBidEl.innerText = `Highest Bid: ${newBid}/-`;
  bidInput.value = '';
}
