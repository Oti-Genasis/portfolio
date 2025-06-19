import createGlobe from 'https://cdn.skypack.dev/cobe'

let phi = 0
let startX = 0
let startPhi = 0
let isDragging = false
let canvas = document.getElementById("cobe")

const globe = createGlobe(canvas, {
    devicePixelRatio: 2,
    width: 1000,
    height: 1000,
    phi: 0,
    theta: 0,
    dark: 1,
    diffuse: 1.2,
    scale: 1,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [1, 1, 1],
    markerColor: [255, 0, 0],
    glowColor: [1, 1, 1],
    offset: [0, 0],
    opacity: 1,
    markers: [
        { location: [48.233334, -79.016669], size: 0.2 },
    ],
    onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi
        phi += 0.01

    },
})


canvas.addEventListener('pointerdown', (e) => {
    isDragging = true
    startX = e.clientX
    startPhi = phi
})

window.addEventListener('pointermove', (e) => {
    if (!isDragging) return
    const deltaX = e.clientX - startX
    phi = startPhi + deltaX * 0.01
})

window.addEventListener('pointerup', () => {
    isDragging = false
})


