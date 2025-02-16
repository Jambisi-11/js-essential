let userRole = 'admin';
let accessLevel;

if (userRole === 'admin') {
    accessLevel = 'Full access granted';
    }
    else if (userRole === 'manager') {
    accessLevel = 'Limited access granted';
    }
    else {
    accessLevel = 'Access denied';
    }
    console.log("Access Level: " + accessLevel);

    let isLoggedIn = true;
    let userMessage;

    if (isLoggedIn) {
        if (userRole === 'admin') {
        userMessage = 'Welcome Admin';
        }
        else if (userRole === 'manager') {  
        userMessage = 'Welcome Manager';
        }
        else {
        userMessage = 'Please log in to access the system.';
        }
    };

    console.log("User Message: " + userMessage);


    let userType = 'subscriber';
    let userCatergory;

    switch (userType) {
        case 'admin':
        userCatergory = 'Administrator';
        break;
        case 'manager':
        userCatergory = 'Manager';
        break;
        case 'subscriber':
        userCatergory = 'Subscriber';
        break;
        default: 
        userCatergory = 'Unknown';
    }

    console.log("User Category: " + userCatergory); 
        
