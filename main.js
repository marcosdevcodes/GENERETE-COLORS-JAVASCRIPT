const btn = document.getElementById("btn-button");

const genereteColor = () => {
    const chars = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return color;
};

const applyCor = (i) => {
    const vColor = genereteColor();
    const div = document.getElementById(`color-${i + 1}`);
    const txt = document.getElementById(`txt-color-${i + 1}`);

    div.style.backgroundColor = vColor;
    txt.textContent = vColor;
}

btn.addEventListener("click", () => {
    for(let i = 0; i < 5; i++){
        setTimeout(() => {
            applyCor(i);
        }, i * 500);
    }
});