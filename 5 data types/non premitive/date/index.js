// WHY IT IS USED: To create a live clock object that captures the exact current date and time from your computer's clock.
let a = new Date()
console.log(a); // Prints the complete timestamp (e.g., "Mon Aug 17 2026 20:40:00...")

// WHY IT IS USED: To extract just the current day number of the month (useful for daily schedules or calendars).
let b = a.getDate()
console.log(b); // Prints the current day number (e.g., 17)

// WHY IT IS USED: To get the current month. WARNING: JavaScript starts counting months from 0 (January is 0, August is 7).
let c = a.getMonth()
console.log(c); // Prints the month index number (e.g., 7 for August)

// WHY IT IS USED: To get the full 4-digit current year (crucial for things like copyright text at the bottom of websites).
let d = a.getFullYear()
console.log(d); // Prints the current year (e.g., 2026)
