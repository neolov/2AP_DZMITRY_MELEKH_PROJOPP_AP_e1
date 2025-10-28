ALTER TABLE employees ADD COLUMN middle_name VARCHAR(50);
UPDATE employees SET middle_name = 'N/A' WHERE middle_name IS NULL;