-- 1. Meal queries:
-- Get all meals
-- Add a new meal
-- Get a meal with any id, fx 1
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
-- Delete a meal with any id, fx 1

SELECT * FROM meal;
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('Tuna Sandwich', 'Tuna sandwich with fries', 'Ljubljana, Slovenia', '2022-10-10 12:00:00', 10, 10.00, '2022-10-10');
SELECT * FROM meal WHERE id = 1;
UPDATE meal
SET title = 'Flæskesteg', description = 'Flæskesteg with potato chips', location = 'Copenhagen', `when` = '2022-12-15 15:00:00', max_reservations = 2, price = 15.00, created_date = '2022-12-14'
WHERE id = 1;
DELETE FROM meal WHERE id = 1;

-- 2. Reservation queries:
-- Get all reservations
-- Add a new reservation
-- Get a reservation with any id, fx 1
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
-- Delete a reservation with any id, fx 1

SELECT * FROM reservation;
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (2, 1, '2024-12-31', '50123456', 'Aleksandr Buniatov', 'abuniatov@gmail.com'), (3, 3, '2024-12-30', '50123457', 'Ben Affleck', 'baffleck@gmail.com'), (3, 3, '2024-12-29', '50123458', 'Mila Jovovich', 'milajovovich@gmail.com');
SELECT * FROM reservation WHERE id = 1;
UPDATE reservation
SET number_of_guests = 3, meal_id = 1, created_date = '2024-9-15', contact_phonenumber = '50123457', contact_name = 'John Malkovich', contact_email = 'jmalkovich@gmail.com'
WHERE id = 1;
DELETE FROM reservation WHERE id = 1;

-- 3. Review queries:
-- Get all reviews
-- Add a new review
-- Get a review with any id, fx 1
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
-- Delete a review with any id, fx 1

SELECT * FROM review;
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Tuna Sandwich review', 'The sandwich was so so...', 1, 3, '2024-9-12');
SELECT * FROM review WHERE id = 1;
UPDATE review
SET title = 'Tuna Sandwich updated review', description = 'I actually reconsidered and decided that the sandwich was really good', meal_id = 1, stars = 5, created_date = '2024-9-13'
WHERE id = 1;
DELETE FROM review WHERE id = 1

-- 4. Additional queries:
-- Now add a couple of different meal, reservations and reviews with different attributes. With those meals create the following queries

INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('Salmon Sandwich', 'Salmon sandwich with salad', 'Prague, Czechia', '2023-12-12 10:30:00', 10, 6.00, '2023-12-10'), ('Ceasar salad', 'Ceasar salad with cheese', 'Athens, Greece', '2023-12-14 11:30:00', 5, 9.30, '2023-12-13'), ('Fish and Chips', 'Fish and Chips with fries', 'London, United Kingdom', '2023-11-15 12:00:00', 8, 9.00, '2023-11-10');

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (2, 3, '2023-12-18', '50123456', 'Alex Honnold', 'alexhonnold@gmail.com'), (1, 3, '2023-12-20', '50123457', 'Mila Jovovich', 'milajovovich@gmail.com'), (3, 1, '2023-12-21', '50123458', 'Lukas Graham', 'lgraham@gmail.com');

INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Salmon Sandwich review', 'The sandwich was really good', 3, 4, '2023-12-15'), ('Tuna Sandwich review', 'The sandwich was so so...', 1, 3, '2023-12-12'), ('Fish and Chips review', 'The fish and chips were really good', 3, 5, '2023-12-17');

-- Functionality queries:

-- Get meals that has a price smaller than a specific price fx 7
SELECT * FROM meal WHERE price < 7;

-- Get meals that still has available reservations
SELECT meal.id, meal.max_reservations, meal.title, COALESCE(
        SUM(reservation.number_of_guests), 0
    ) AS sum_of_guests
FROM `meal`
    LEFT JOIN `reservation` ON meal.id = `reservation`.meal_id
GROUP BY
    meal.id,
    meal.max_reservations,
    meal.title
HAVING
    sum_of_guests < meal.max_reservations;

-- Get meals that partially match a title. Salmon will match the meal with the title Salmon sandwich
SELECT * FROM meal WHERE title LIKE '%Salmon%';

-- Get meals that has been created between two dates
SELECT * FROM meal WHERE created_date BETWEEN '2023-12-10' AND '2023-12-20';

-- Get only specific number of meals fx return only 2 meals
SELECT * FROM meal LIMIT 2;

-- Get the meals that have good reviews
SELECT meal.title, meal.id, ROUND(AVG(review.stars), 2) AS avg_stars
FROM `meal`
    JOIN review ON Meal.id = `review`.meal_id
GROUP BY
    meal.id
HAVING
    avg_stars >= 3;

-- Get reservations for a specific meal sorted by created_date
SELECT * FROM reservation WHERE meal_id = 1 ORDER BY created_date;

-- Sort all meals by average number of stars in the reviews
SELECT meal.id, meal.title,  ROUND(AVG(review.stars), 2) AS avg_stars
FROM meal
    LEFT JOIN review ON meal.id = review.meal_id
GROUP BY
    meal.id
ORDER BY avg_stars DESC;