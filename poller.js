async function updateNowPlaying() {
  const res = await fetch('https://onair-proxy.yourname.workers.dev');
  const data = await res.json();
  if (data.title !== lastTitle) {
    card.style.opacity = 0;
    setTimeout(() => {
      img.src = data.image;
      title.textContent = data.title;
      artist.textContent = data.artist;
      card.style.opacity = 1;
      lastTitle = data.title;
    }, 300);
  }
}
setInterval(updateNowPlaying, 60000);
updateNowPlaying();
