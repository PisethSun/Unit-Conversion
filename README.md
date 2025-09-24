## What I Learned
This project was a great opportunity to apply several key JavaScript and DOM manipulation concepts. Specifically, I focused on:

1. Stopping Default Behavior with event.preventDefault()
When an event occurs, like a button click, the browser often has a default action associated with it (for example, submitting a form). By using event.preventDefault(), I learned how to stop this default action. In this app, it ensures that clicking the "Convert" button doesn't refresh the page, allowing the conversion results to be displayed without interruption.

2. Live Input Validation with the beforeinput Event
Rather than waiting for the user to click the button to validate the input, I used the beforeinput event. This event fires just before data is inserted into an input field. By listening for this event, I was able to check each incoming character in real time and use event.preventDefault() to stop any non-numeric characters from being typed, providing a smoother and more immediate user experience.

3. Using Regular Expressions (RegExp)
To perform the input validation, I used a regular expression, new RegExp("^[0-9]*$"). This powerful tool allowed me to create a pattern that strictly checks if the user's input consists of only numerical digits. It is a highly efficient way to ensure data integrity and prevent errors from invalid input types.

## How to Use
Enter a number into the input field.

The application will instantly display the converted values.

## Technologies Used
HTML

CSS

JavaScript
