-- 1. Meal queries:
-- Get all meals
-- Add a new meal
-- Get a meal with any id, fx 1
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
-- Delete a meal with any id, fx 1

SELECT * FROM meal;
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('Tuna Sandwich', 'Tuna sandwich with fries', 'Ljubljana', '2022-10-10 12:00:00', 10, 10.00, '2022-10-10');
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
VALUES (2, 1, '2024-12-31', '50123456', 'Aleksandr Buniatov', 'abuniatov@gmail.com');
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