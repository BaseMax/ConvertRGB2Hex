// Elements
const elm_rgb = document.getElementById('rgb');
const elm_hex = document.getElementById('hex');

// Function
const convert = (rgb) => {
    const rep = (match, r, g, b) => {
        return '#' + ('0' + parseInt(r).toString(16)).slice(-2) + ('0' + parseInt(g).toString(16)).slice(-2) + ('0' + parseInt(b).toString(16)).slice(-2);
    };

    rgb = rgb.replace(/RGB\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/gi, rep);
    rgb = rgb.replace(/\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/gi, rep);
    return rgb;
};

// Events
window.onload = () => {
    elm_hex.value = convert(elm_rgb.value);
};

elm_rgb.addEventListener('input', () => {
    elm_hex.value = convert(elm_rgb.value);
});

elm_hex.addEventListener('change', () => {
    elm_rgb.value = convert(elm_hex.value);
});
