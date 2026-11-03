import { User } from "./users.ts";

const adminUser = new User("admin", "123456", 30, "admin@tredgate.cz");

console.log("Uživatelské jméno admina: " + adminUser.getUsername());
adminUser.logUser();
adminUser.setAge(31);
adminUser.logUser();

console.log("Email admina: " + adminUser.getEmail());

// adminUser.logDivider(); // ! Nelze volat private metodu mimo třídu. Chyba: Property 'logDivider' is private and only accessible within class 'User'.ts(2341)

//adminUser.role = "superadmin"; // ! Nelze, dostaneme chybu: Cannot assign to 'role' because it is a read-only property.ts(2540)
