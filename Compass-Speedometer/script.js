const needle = document.getElementById("needle");
const speedDisplay = document.getElementById("speed");

// Compass
if (window.DeviceOrientationEvent) {
  // Android
  window.addEventListener("deviceorientationabsolute", handleOrientation, true);
  // iOS fallback (will work if permission was granted via click)
  window.addEventListener("deviceorientation", handleOrientation, true);
} else {
  console.warn("DeviceOrientationEvent not supported");
}

function handleOrientation(event) {
  const alpha = event.alpha;
  if (typeof alpha === "number") {
    needle.style.transform = `rotate(${alpha}deg)`;
    console.log("Compass heading:", alpha);
  } else {
    console.warn("Alpha not available.");
  }
}

// Speedometer
if ("geolocation" in navigator) {
  navigator.geolocation.watchPosition(
    (position) => {
      const speedMps = position.coords.speed || 0;
      const speedKmph = (speedMps * 3.6).toFixed(1);
      speedDisplay.innerText = `${speedKmph} KM/H`;
      console.log("Speed:", speedKmph);
    },
    (err) => {
      console.error("Geolocation error:", err);
      speedDisplay.innerText = "0 KM/H";
    },
    { enableHighAccuracy: true, maximumAge: 1000 }
  );
} else {
  speedDisplay.innerText = "Geo not supported";
}
