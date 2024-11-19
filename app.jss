const listenBtn = document.getElementById("listenBtn");
const resultDiv = document.getElementById("result");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const songBestPart = document.getElementById("songBestPart");

const backendURL = "https://b6596ed2-7c84-404c-9bfb-2bda5cefba3f-00-1o0ul2u1cxruk.pike.replit.dev/"; // Replace with your Replit backend URL

listenBtn.addEventListener("click", async () => {
  listenBtn.textContent = "🎙️ Listening...";
  listenBtn.disabled = true;

  // Simulate audio recording with a dummy file
  const dummyAudioBlob = new Blob(["dummy audio data"], { type: "audio/wav" });
  const formData = new FormData();
  formData.append("audio", dummyAudioBlob, "recording.wav");

  try {
    const response = await fetch(backendURL, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      songTitle.textContent = data.song.title;
      songArtist.textContent = data.song.artist;
      songBestPart.textContent = data.song.bestPart;
      resultDiv.classList.remove("hidden");
    } else {
      alert("Sorry, could not recognize the song.");
    }
  } catch (error) {
    alert("An error occurred while recognizing the song.");
    console.error(error);
  } finally {
    listenBtn.textContent = "🎙️ Listen";
    listenBtn.disabled = false;
  }
});
