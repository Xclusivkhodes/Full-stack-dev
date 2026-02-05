import { PGlite } from "@electric-sql/pglite";
import fs from "fs";

(async () => {
  const db = new PGlite();
  await db.exec(`
        CREATE TABLE IF NOT EXISTS cars (
            id SERIAL PRIMARY KEY,
            brand TEXT,
            model TEXT,
            year INTEGER,
            price INTEGER,
            color TEXT,
            condition INTEGER,
            sold BOOLEAN
        );
        INSERT INTO cars (brand, model, year, price, color, condition, sold
        ) VALUES 
          ('Ford', 'Mustang', 1965, 45000, 'white', 4, false),
          ('Chevrolet', 'Camaro', 1970, 48000, 'red', 2, false),
          ('Dodge', 'Charger', 1969, 58000, 'black', 4, true),
          ('Porsche', '911', 1985, 85000, 'silver', 5, false),
          ('Jaguar', 'E-Type', 1967, 56000, 'green', 2, true),
          ('Jaguar', 'S-Type', 1963, 100000, 'dark green', 3, true),
          ('Jaguar', 'X-Type', 2001, 10000, 'black', 3, true),
          ('Mercedes-Benz', '300SLR', 1955, 142000000, 'silver', 5, false),
          ('BMW', 'M3', 1990, 35000, 'green-yellow', 1, true),
          ('Ferrari', 'F355', 1997, 150000, 'red', 5, false),
          ('Ford', 'Mustang', 1967, 15000, 'dark blue', 0, false),
          ('Aston Martin', 'DB5', 1964, 595000, 'silver', 5, false),
          ('Aston Martin', 'DB4', 1960, 465000, 'light green', 5, false),
          ('Aston Martin', 'DBS', 1969, 99000, 'red', 2, false),
          ('Aston Martin', 'DB4', 1960, 425000, 'green', 3, false),
          ('Aston Martin', 'DB5', 1965, 649000, 'dark red', 5, false),
          ('Toyota', 'Supra', 1994, 68000, 'black', 4, true),
          ('Nissan', 'Skyline GT-R', 1999, 95000, 'blue', 5, false),
          ('Volkswagen', 'Beetle', 1963, 25000, 'yellow', 3, true),
          ('Lamborghini', 'Countach', 1989, 320000, 'red', 5, false),
          ('Rolls-Royce', 'Silver Shadow', 1975, 55000, 'white', 2, true),
          ('Bentley', 'Continental GT', 2005, 85000, 'black', 5, false),
          ('Maserati', 'GranTurismo', 2010, 75000, 'blue', 4, true),
          ('Alfa Romeo', 'Spider', 1986, 28000, 'red', 3, true),
          ('Ford', 'Mustang', 1965, 20000, 'dark red', 1, true),
          ('Lotus', 'Esprit', 1993, 62000, 'light yellow', 4, false),
          ('Triumph', 'Herald', 1965, 12500, 'cream', 3, true),
          ('Ford', 'Capri', 1983, 22000, 'blue', 2, false),
          ('Ford', 'Granada', 1977, 18000, 'black', 1, false),
          ('Volkswagen', 'Golf GTI', 1991, 12500, 'light green', 1, true),
          ('Chevrolet', 'Camaro', 1969, 54000, 'mint green', 5, true),
          ('Chevrolet', 'Corvette Stingray', 1967, 88000, 'red', 5, true),
          ('Chevrolet', 'Corvette C5', 2001, 32000, 'yellow', 4, true),
          ('Ferrari', 'Testarossa', 1988, 195000, 'red', 5, true),
          ('Ferrari', '360 Modena', 2003, 125000, 'silver', 5, true),
          ('Bentley', 'Arnage', 2001, 45000, 'black', 4, false),
          ('Bentley', 'Continental R', 1999, 68000, 'blue', 5, false),
          ('Jaguar', 'XJ220', 1994, 450000, 'silver', 5, false),
          ('Porsche', '911 Carrera', 1985, 85000, 'red', 5, false),
          ('Porsche', '911 Turbo', 1995, 12000, 'black', 1, false),
          ('Porsche', '944 Turbo', 1986, 48000, 'white', 4, true),
          ('Porsche', '356B', 1960, 265000, 'silver', 4, false),
          ('Bentley', 'T2', 1978, 52000, 'silver', 4, false),
          ('Ford', 'Capri', 1978, 19000, 'silver', 4, false),
          ('Ford', 'Granada', 1982, 17000, 'blue', 3, true),
          ('Ford', 'Escort RS2000', 1976, 23000, 'white', 4, false),
          ('Ford', 'Cortina', 1969, 16000, 'green', 3, false),
          ('Dodge', 'Dart', 1968, 22000, 'red', 3, true),
          ('Dodge', 'Coronet', 1967, 28000, 'black', 4, false),
          ('Dodge', 'Polara', 1965, 25000, 'beige', 3, false),
          ('Dodge', 'Monaco', 1977, 21000, 'brown', 2, true),
          ('Mercedes-Benz', '280SL Pagoda', 1969, 75000, 'cream', 5, false),
          ('Mercedes-Benz', '300D', 1985, 32000, 'blue', 4, false),
          ('Mercedes-Benz', '450SEL', 1979, 29000, 'black', 3, true),
          ('Mercedes-Benz', '200D', 1968, 24000, 'white', 3, false),
          ('Triumph', 'TR6', 1973, 27000, 'yellow', 4, false),
          ('Triumph', 'Spitfire', 1972, 19000, 'green', 3, true),
          ('Triumph', 'Stag', 1975, 25000, 'red', 4, false),
          ('Triumph', 'Dolomite Sprint', 1974, 21000, 'orange', 3, false);

`);

  // Load the SQL file
  const query = fs.readFileSync("query.sql", "utf8");

  // Executing simple queries for sections 1 - 3
  const response = await db.query(query);

  console.clear();
  console.table(response.rows);
})();
