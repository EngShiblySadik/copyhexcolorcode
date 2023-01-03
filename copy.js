/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 * - Add a button to copy the color code
 */

// Step 1 - create onload handler
window.onload = () => {
    main();
}
function main(){
    const root = document.getElementById("root")
    const output = document.getElementById("output")
    const cngbtn = document.getElementById("change-btn")
    const copybtn = document.getElementById("copy-btn")

    cngbtn.addEventListener('click', function(){
        const bgcolor = GenerateHexCode();
        root.style.backgroundColor = bgcolor;
        output.value = bgcolor;
    });
    copybtn.addEventListener('click', function(){
        navigator.clipboard.writeText(output.value)
    })
    
}
// step 2 - random color generator function
function GenerateHexCode(){
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
console.log(GenerateHexCode());




// step 3 - collect all necessary references

// step 4 - handle the change button click event

// step 5 - handle the copy button click event