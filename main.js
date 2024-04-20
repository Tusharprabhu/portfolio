window.addEventListener('DOMContentLoaded', (e) => {
    VANTA.FOG({
        el: "#fogbag",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x4d88b5, // Light blue
        midtoneColor: 0x004e80,    // Deep blue
        lowlightColor: 0x002d4d,   // Darker blue
        baseColor: 0x0,
        blurFactor: 0.57,
        speed: 1.10,
        zoom: 3.0
    });
});
