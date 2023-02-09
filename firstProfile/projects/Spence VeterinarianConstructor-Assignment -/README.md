In this assignment, you will be creating a basic animal patient entry page for a veterinarian clinic. This page will have multiple input fields where the user can enter information about an animal and add that to a table to be displayed.

In your JavaScript, you will be using ES6's "class" constructor function to make an object from the values you receive on your page. You will then push that new object into a patient's array.



* Review Example Images while going through the requirements. 

REQUIREMENTS

1.0 UI
    1.1 The User Interface will have a minimum of four(4) input fields. 
        - Input field for the Animal's name
        - Input field for the Animal's age
        - Input field for Animal Type
            - You may use radio buttons or a dropdown for animal type.
            - You must have a minimum of three(3) animal types. (Ex. Canine, Feline, Bird).
        - Input field for "Reason for visit".
            - Use a textarea element for the "Reason for Visit. 
        1.1.1 All input fields must be required and must have a placeholder or text above the
              input section to specify what it is for. 
    1.2 Below the inputs will be a button element to add the patient.
    1.3 Your page must have a title at the top. 
    1.4 Your page must have a table that will display animals as they are added after clicking
        the "add" button. 
        1.4.1 The table will display each animal's name, age, animal type, and reason for vist. 
        1.4.2 Your table must have table header elements. 

    UI Challenge 
    * Have more than 4 inputs for the patient. (ex. Medications, Current Patient, Color Description, Owner's name)
    *Have input fields required.
    *Have input fields return to default values after patient has been added. 
    
2.0 App
    2.1 DOM manipulation.
        2.1.1 Grab the values from the input when the "Add" button is clicked.
        2.1.2 Create a table row element (<tr></tr>);
        2.1.3 Create a <td> element for each value received from the input filds.
              (name,age,reson for visit, animal type, etc.)
            2.1.3.1 Append each <td> element to the <tr> element. Then append the 
                    <tr> element to the <table> element in your html page.
    2.2 Class Constructor
        2.1 Create an array called "patients"
        2.2 Create an ES6 class constructor for "Patient".
            2.2.1 This class constructor must have the properties for name, age, reasonForVisit 
                  and animal type.
            2.2.2 The class constructor will use the values received from the input fields to
                  create a new Patient object when the "Add" button is clicked.
        2.3 After the class constructor function makes a new object, push that object into
            the "patients" array. Then, console.log() the "patients" array so it displays in 
            the console every time a new animal patient is added. 

    App Challenge 
    * 

3.0 Coding
    3.1 Use DRY code.
    3.2 Use external styling and scripting pages




