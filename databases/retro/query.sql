SELECT brand, model, color, price FROM cars
    WHERE color LIKE '%red%'
    AND sold IS FALSE
    ORDER BY price
    LIMIT 5;