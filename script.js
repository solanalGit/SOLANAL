function show_Answer_xrpl() {
    var question = document.getElementById("q_xrpl");
    var answer = document.getElementById("answer_x");
    var arrow = question.querySelector(".arrow");

    // Toggle active class on question
    question.classList.toggle("active");

    // Check if the screen size is small (mobile)
    var isMobile = window.innerWidth <= 600;

    // Toggle display and opacity of answer based on active class
    if (question.classList.contains("active")) {
        // Show the answer
        if (isMobile) {
            answer.style.display = "flex"; // Use block for small screens (mobile)
        } else {
            answer.style.display = "flex"; // Use flex for larger screens (desktop)
        }

        setTimeout(function() {
            answer.style.opacity = "1";
        }, 10);
        arrow.style.transform = "rotate(90deg)";
    } else {
        // Hide the answer
        answer.style.opacity = "0";
        setTimeout(function() {
            answer.style.display = "none";
        }, 300);
        arrow.style.transform = "rotate(0deg)";
    }
}



function show_Answer_1() {
    var question = document.getElementById("q_1");
    var answer = document.getElementById("answer_1");
    var arrow = question.querySelector(".arrow");

    // Toggle active class on question
    question.classList.toggle("active");

    // Check if the screen size is small (mobile)
    var isMobile = window.innerWidth <= 600;

    // Toggle display and opacity of answer based on active class
    if (question.classList.contains("active")) {
        // Show the answer
        if (isMobile) {
            answer.style.display = "flex"; // Use block for small screens (mobile)
        } else {
            answer.style.display = "flex"; // Use flex for larger screens (desktop)
        }

        setTimeout(function() {
            answer.style.opacity = "1";
        }, 10);
        arrow.style.transform = "rotate(90deg)";
    } else {
        // Hide the answer
        answer.style.opacity = "0";
        setTimeout(function() {
            answer.style.display = "none";
        }, 300);
        arrow.style.transform = "rotate(0deg)";
    }
}


function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Address copied to clipboard');
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
}


function addCopyButton(addressId, buttonId) {
    var addressElement = document.getElementById(addressId);
    if (!document.getElementById(buttonId)) {
        // Create the copy button
        var copyButton = document.createElement("button");
        copyButton.id = buttonId;
        copyButton.className = "copy-btn";
        copyButton.innerHTML = '<img src="pics/copy_icon.png" alt="Copy">';

        // Insert the copy button after the address element
        addressElement.parentNode.insertBefore(copyButton, addressElement.nextSibling);

        // Add event listener for copy functionality
        copyButton.addEventListener("click", function() {
            copyToClipboard(addressElement.textContent);
        });
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert("Address copied to clipboard");
    }).catch(function(err) {
        console.error("Could not copy text: ", err);
    });
}


function show_Answer_0() {
    var toggleText = document.getElementById("toggle-text");
    var answer_0 = document.getElementById("answer_0");

    // Check if the text is in its initial state
    if (toggleText.innerHTML === "Why do people love SOLANAL so much?<span id=\"dots\">...</span>") {
        // Update the text to the answer with line breaks for multi-line
        toggleText.innerHTML = "Because it’s decentralized, deflationary, and definitely delivers… <br /><span class='highlight'>deep gains!</span> 📈🚀";

        // Show the answer block and fade it in
        answer_0.style.display = "block";
        setTimeout(function() {
            answer_0.style.opacity = "1"; // Fade in answer
        }, 10);
    } else {
        // Switch back to the question with "SOLANAL" and "..."
        toggleText.innerHTML = "Why do people love SOLANAL so much?<span id=\"dots\">...</span>";

        // Fade out the answer and hide it
        answer_0.style.opacity = "0";
        setTimeout(function() {
            answer_0.style.display = "none";
        }, 300);
    }
}


document.getElementById("copyButton_SUI").addEventListener("click", function() {
    copyToClipboard("address_SUI");
});

document.getElementById("copyButton_TRON").addEventListener("click", function() {
    copyToClipboard("address_TRON");
});

document.getElementById("copyButton_AVAX").addEventListener("click", function() {
    copyToClipboard("address_AVAX");
});

document.getElementById("copyButton_XRPL").addEventListener("click", function() {
    copyToClipboard("address_XRPL");
});

function copyToClipboard(elementId) {
    const textToCopy = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Copied: " + textToCopy);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}



// Add copy functionality
document.getElementById("copyButton").addEventListener("click", function() {
    const addressText = document.getElementById("address").textContent; // Get the text content
    navigator.clipboard.writeText(addressText).then(
        () => {
            alert("Copied to clipboard!"); // Success feedback
        },
        () => {
            alert("Failed to copy!"); // Error feedback
        }
    );
});