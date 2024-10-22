// Define the time to execute
const targetTime = new Date();
targetTime.setHours(11, 43, 0, 0); // Set to 11:43 AM

// Calculate the delay until the target time
const delay = targetTime - new Date();

if (delay > 0) {
    setTimeout(() => {
        const button = document.evaluate(
            "/html/body/div/div[1]/div[2]/section/div/div[2]/div[2]/div[2]/div[6]/div[3]/div[2]/span/button/div", // full-x-path
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;

        if (button) {
            button.click();
        } else {
            console.log("Button not found.");
        }
    }, delay);
} else {
    console.log("The specified time has already passed.");
}
