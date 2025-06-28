let lis = document.querySelectorAll("li");

if (window.localStorage.getItem("color")) {
        // Change body Background Color
        document.body.style.backgroundColor = window.localStorage.getItem("color");

        // Remove Active Class From all Lis
        lis.forEach (li => {
            li.classList.remove("active");
        })

        // Add Active Class To Current Color
        document.querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach (li => {
    li.addEventListener("click", e => {
        // Remove Active Class From all Lis
        lis.forEach (li => {
            li.classList.remove("active");
        })
        // Add Active Class To Current Element
        e.currentTarget.classList.add("active")

        // Add Current Color To Local Storage
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
        // Change body Background Color
        document.body.style.backgroundColor =  e.currentTarget.dataset.color;
    });

});
