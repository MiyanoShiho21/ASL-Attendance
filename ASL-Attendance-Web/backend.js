// backend.js

// Simulated employee database
const employees = [
    { name: "John Doe", passcode: "1234", hasTimeInToday: false },
    { name: "Jane Smith", passcode: "5678", hasTimeInToday: true },
  ];
  
  // Simulated backend function to check login credentials
  function checkLogin(name, passcode) {
    return employees.find(emp => emp.name === name && emp.passcode === passcode);
  }
  
  // Simulated backend function to record time-in
  function recordTimeIn(name, timeIn) {
    const employee = employees.find(emp => emp.name === name);
    if (employee) {
      employee.hasTimeInToday = true;
      console.log(`${name} timed in at ${timeIn}`);
    }
  }
  
  // Simulated backend function to record time-out
  function recordTimeOut(name, timeOut) {
    const employee = employees.find(emp => emp.name === name);
    if (employee) {
      employee.hasTimeInToday = false;
      console.log(`${name} timed out at ${timeOut}`);
    }
  }
  