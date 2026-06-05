INSERT INTO allergens (name) VALUES
('Gluten'),
('Dairy'),
('Eggs'),
('Peanuts'),
('Tree Nuts'),
('Soy'),
('Fish'),
('Shellfish'),
('Sesame'),
('Mustard'),
('Celery'),
('Lupin'),
('Sulphites'),
('Molluscs')
ON CONFLICT (name) DO NOTHING;
