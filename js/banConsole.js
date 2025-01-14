document.addEventListener("contextmenu", (event) => {
    event.preventDefault()
})

document.addEventListener("keydown", (event) => {
    if (event.key === "F12") {
        event.preventDefault()
    }
    if (event.ctrlKey && event.shiftKey && event.key === "I") {
        event.preventDefault()
    }
    if (event.ctrlKey && event.shiftKey && event.key === "J") {
        event.preventDefault()
    }
    if (event.ctrlKey && event.shiftKey && event.key === "C") {
        event.preventDefault()
    }
    if (event.ctrlKey && event.key === "u") {
        event.preventDefault()
    }
})
    ; (function () {
        const devtools = new Function("debugger")
        const checkDevTools = () => {
            devtools()
            setTimeout(checkDevTools, 1000)
        }
        checkDevTools()
    })()
