// Elements
const elm_rgb = document.getElementById('rgb');
const elm_hex = document.getElementById('hex');

// Function
const convert = (rgb) => {
    rgb = rgb.replace(/RGB\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/g, function(match, r, g, b) {
        return '#' + ('0' + parseInt(r, 10).toString(16)).slice(-2) + ('0' + parseInt(g, 10).toString(16)).slice(-2) + ('0' + parseInt(b, 10).toString(16)).slice(-2);
    });
    return rgb;
};

// Events
window.onload = function() {
    elm_hex.value = convert(elm_rgb.value);
};

elm_rgb.addEventListener('input', function() {
    elm_hex.value = convert(elm_rgb.value);
});

elm_hex.addEventListener('change', function() {
    elm_rgb.value = convert(elm_hex.value);
});
