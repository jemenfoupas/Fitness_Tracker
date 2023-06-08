-- user
insert into user (user_name, user_password) value ('root1', '123');
insert into user (user_name, user_password) value ('root2', '123');
insert into user (user_name, user_password) value ('root3', '123');
insert into user (user_name, user_password) value ('root4', '123');
insert into user (user_name, user_password) value ('root5', '123');

-- routine
insert into routine (routine_name, start_date, end_date, user_id) value('winter', '2022-12-21', '2023-03-20', 1);
insert into routine (routine_name, start_date, end_date, user_id) value('spring', '2023-03-21', '2023-06-21', 1); 
insert into routine (routine_name, start_date, end_date, user_id) value('summer', '2023-06-22', '2023-09-23', 1); 
insert into routine (routine_name, start_date, end_date, user_id) value('fall', '2023-09-24', '2023-12-20', 1); 

insert into routine (routine_name, start_date, end_date, user_id) value('winter', '2022-12-21', '2023-03-20', 2);
insert into routine (routine_name, start_date, end_date, user_id) value('spring', '2023-03-21', '2023-06-21', 2); 
insert into routine (routine_name, start_date, end_date, user_id) value('summer', '2023-06-22', '2023-09-23', 2); 
insert into routine (routine_name, start_date, end_date, user_id) value('fall', '2023-09-24', '2023-12-20', 2); 

insert into routine (routine_name, start_date, end_date, user_id) value('winter', '2022-12-21', '2023-03-20', 3);
insert into routine (routine_name, start_date, end_date, user_id) value('spring', '2023-03-21', '2023-06-21', 3); 
insert into routine (routine_name, start_date, end_date, user_id) value('summer', '2023-06-22', '2023-09-23', 3); 
insert into routine (routine_name, start_date, end_date, user_id) value('fall', '2023-09-24', '2023-12-20', 3); 

insert into routine (routine_name, start_date, end_date, user_id) value('winter', '2022-12-21', '2023-03-20', 4);
insert into routine (routine_name, start_date, end_date, user_id) value('spring', '2023-03-21', '2023-06-21', 4); 
insert into routine (routine_name, start_date, end_date, user_id) value('summer', '2023-06-22', '2023-09-23', 4); 
insert into routine (routine_name, start_date, end_date, user_id) value('fall', '2023-09-24', '2023-12-20', 4); 

insert into routine (routine_name, start_date, end_date, user_id) value('winter', '2022-12-21', '2023-03-20', 5);
insert into routine (routine_name, start_date, end_date, user_id) value('spring', '2023-03-21', '2023-06-21', 5); 
insert into routine (routine_name, start_date, end_date, user_id) value('summer', '2023-06-22', '2023-09-23', 5); 
insert into routine (routine_name, start_date, end_date, user_id) value('fall', '2023-09-24', '2023-12-20', 5); 

-- weekday
insert into weekday (weekday_name) value('Sunday'); -- 1 
insert into weekday (weekday_name) value('Monday'); -- 2
insert into weekday (weekday_name) value('Tuesday'); -- 3 
insert into weekday (weekday_name) value('Wednesday'); -- 4 
insert into weekday (weekday_name) value('Thursday'); -- 5 
insert into weekday (weekday_name) value('Friday'); -- 6 
insert into weekday (weekday_name) value('Saturday'); -- 7 


-- program
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Lower', 'Lower body workout', 1, 2, '2022-12-26'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Upper', 'upper body workout', 1, 3, '2022-12-27'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Lower', 'Lower body workout', 1, 5, '2022-12-29'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Upper', 'upper body workout', 1, 6, '2022-12-30'); 

insert into program (program_name, program_description, routine_id, weekday_id, day) value('Lower', 'Lower body workout', 2, 2, '2023-03-27'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Upper', 'upper body workout', 2, 3, '2023-03-28'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Lower', 'Lower body workout', 2, 5, '2023-03-30'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Upper', 'upper body workout', 2, 6, '2023-03-31');  

insert into program (program_name, program_description, routine_id, weekday_id, day) value('Lower', 'Lower body workout', 3, 2, '2023-06-26'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Upper', 'upper body workout', 3, 3, '2023-06-27'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Lower', 'Lower body workout', 3, 5, '2023-06-29'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Upper', 'upper body workout', 3, 6, '2023-06-30');  

insert into program (program_name, program_description, routine_id, weekday_id, day) value('Lower', 'Lower body workout', 4, 2, '2023-09-25'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Upper', 'upper body workout', 4, 3, '2023-09-26'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Lower', 'Lower body workout', 4, 5, '2023-09-28'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Upper', 'upper body workout', 4, 6, '2023-09-29');  


insert into program (program_name, program_description, routine_id, weekday_id, day) value('Full Body', 'Full Body workout', 5, 7, '2022-12-24');  
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Full Body', 'Full Body workout', 5, 1, '2022-12-25');

insert into program (program_name, program_description, routine_id, weekday_id, day) value('Full Body', 'Full Body workout', 6, 7, '2023-03-25');  
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Full Body', 'Full Body workout', 6, 1, '2023-03-26');  

insert into program (program_name, program_description, routine_id, weekday_id, day) value('Full Body', 'Full Body workout', 7, 7, '2023-06-24');  
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Full Body', 'Full Body workout', 7, 1, '2023-06-25');  

insert into program (program_name, program_description, routine_id, weekday_id, day) value('Full Body', 'Full Body workout', 8, 7, '2023-09-23');  
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Full Body', 'Full Body workout', 8, 1, '2023-09-24');


insert into program (program_name, program_description, routine_id, weekday_id, day) value('Push', 'Push workout', 9, 2, '2022-12-26');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Pull', 'Pull workout', 9, 3, '2022-12-27');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Legs', 'Legs workout', 9, 4, '2022-12-28');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Push', 'Push workout', 9, 5, '2022-12-29');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Pull', 'Pull workout', 9, 6, '2022-12-30');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Legs', 'Legs workout', 9, 7, '2022-12-31');

insert into program (program_name, program_description, routine_id, weekday_id, day) value('Push', 'Push workout', 10, 2, '2023-03-27');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Pull', 'Pull workout', 10, 3, '2023-03-28');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Legs', 'Legs workout', 10, 4, '2023-03-29');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Push', 'Push workout', 10, 5, '2023-03-30');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Pull', 'Pull workout', 10, 6, '2023-03-31');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Legs', 'Legs workout', 10, 7, '2023-04-01');

insert into program (program_name, program_description, routine_id, weekday_id, day) value('Push', 'Push workout', 11, 2, '2023-06-26');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Pull', 'Pull workout', 11, 3, '2023-06-27');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Legs', 'Legs workout', 11, 4, '2023-06-28');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Push', 'Push workout', 11, 5, '2023-06-29');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Pull', 'Pull workout', 11, 6, '2023-06-30');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Legs', 'Legs workout', 11, 7, '2023-07-01');

insert into program (program_name, program_description, routine_id, weekday_id, day) value('Push', 'Push workout', 12, 2, '2023-09-25');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Pull', 'Pull workout', 12, 3, '2023-09-26');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Legs', 'Legs workout', 12, 4, '2023-09-27');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Push', 'Push workout', 12, 5, '2023-09-28');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Pull', 'Pull workout', 12, 6, '2023-09-29');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Legs', 'Legs workout', 12, 7, '2023-09-30');


insert into program (program_name, program_description, routine_id, weekday_id, day) value('Full Body', 'Full Body workout', 13, 2, '2022-12-26');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Full Body', 'Full Body workout', 13, 6, '2022-12-30');

insert into program (program_name, program_description, routine_id, weekday_id, day) value('Full Body', 'Full Body workout', 14, 2, '2023-03-27');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Full Body', 'Full Body workout', 14, 6, '2023-03-31');

insert into program (program_name, program_description, routine_id, weekday_id, day) value('Full Body', 'Full Body workout', 15, 2, '2023-06-26');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Full Body', 'Full Body workout', 15, 6, '2023-06-30');

insert into program (program_name, program_description, routine_id, weekday_id, day) value('Full Body', 'Full Body workout', 16, 2, '2023-09-25');
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Full Body', 'Full Body workout', 16, 6, '2023-09-29');


insert into program (program_name, program_description, routine_id, weekday_id, day) value('Lower', 'Lower body workout', 17, 2, '2022-12-26'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Upper', 'upper body workout', 17, 3, '2022-12-27'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Lower', 'Lower body workout', 17, 5, '2022-12-29'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Upper', 'upper body workout', 17, 6, '2022-12-30'); 

insert into program (program_name, program_description, routine_id, weekday_id, day) value('Lower', 'Lower body workout', 18, 2, '2023-03-27'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Upper', 'upper body workout', 18, 3, '2023-03-28'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Lower', 'Lower body workout', 18, 5, '2023-03-30'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Upper', 'upper body workout', 18, 6, '2023-03-31');  

insert into program (program_name, program_description, routine_id, weekday_id, day) value('Lower', 'Lower body workout', 19, 2, '2023-06-26'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Upper', 'upper body workout', 19, 3, '2023-06-27'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Lower', 'Lower body workout', 19, 5, '2023-06-29'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Upper', 'upper body workout', 19, 6, '2023-06-30');  

insert into program (program_name, program_description, routine_id, weekday_id, day) value('Lower', 'Lower body workout', 20, 2, '2023-09-25'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Upper', 'upper body workout', 20, 3, '2023-09-26'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Lower', 'Lower body workout', 20, 5, '2023-09-28'); 
insert into program (program_name, program_description, routine_id, weekday_id, day) value('Upper', 'upper body workout', 20, 6, '2023-09-29');  

-- exercise
insert into exercise (exercise_name, weight, rep, numset, user_id) value('dip', 0, 4, 10, 1);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Pull-ups', 0, 4, 10, 1);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Bench press', 0, 4, 10, 1);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Biceps curl', 0, 4, 10, 1);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Lat pulldown', 0, 4, 10, 1);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Dumbbell bench pres', 0, 4, 10, 1);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Triceps cable pushdown ', 0, 4, 10, 1);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Dumbbell shoulder press', 0, 4, 10, 1);

insert into exercise (exercise_name, weight, rep, numset, user_id) value('Squat', 0, 4, 10, 1);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Leg Curl', 0, 4, 10, 1);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Leg Press', 0, 4, 10, 1);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Leg Extensions', 0, 4, 10, 1);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Seated Calf Raise', 0, 4, 10, 1);


insert into exercise (exercise_name, weight, rep, numset, user_id) value('dip', 0, 4, 10, 2);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Pull-ups', 0, 4, 10, 2);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Bench press', 0, 4, 10, 2);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Biceps curl', 0, 4, 10, 2);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Lat pulldown', 0, 4, 10, 2);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Dumbbell bench pres', 0, 4, 10, 2);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Triceps cable pushdown ', 0, 4, 10, 2);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Dumbbell shoulder press', 0, 4, 10, 2);

insert into exercise (exercise_name, weight, rep, numset, user_id) value('Squat', 0, 4, 10, 2);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Leg Curl', 0, 4, 10, 2);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Leg Press', 0, 4, 10, 2);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Leg Extensions', 0, 4, 10, 2);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Seated Calf Raise', 0, 4, 10, 2);


insert into exercise (exercise_name, weight, rep, numset, user_id) value('dip', 0, 4, 10, 3);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Pull-ups', 0, 4, 10, 3);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Bench press', 0, 4, 10, 3);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Biceps curl', 0, 4, 10, 3);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Lat pulldown', 0, 4, 10, 3);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Dumbbell bench pres', 0, 4, 10, 3);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Triceps cable pushdown ', 0, 4, 10, 3);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Dumbbell shoulder press', 0, 4, 10, 3);

insert into exercise (exercise_name, weight, rep, numset, user_id) value('Squat', 0, 4, 10, 3);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Leg Curl', 0, 4, 10, 3);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Leg Press', 0, 4, 10, 3);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Leg Extensions', 0, 4, 10, 3);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Seated Calf Raise', 0, 4, 10, 3);


insert into exercise (exercise_name, weight, rep, numset, user_id) value('dip', 0, 4, 10, 4);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Pull-ups', 0, 4, 10, 4);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Bench press', 0, 4, 10, 4);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Biceps curl', 0, 4, 10, 4);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Lat pulldown', 0, 4, 10, 4);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Dumbbell bench pres', 0, 4, 10, 4);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Triceps cable pushdown ', 0, 4, 10, 4);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Dumbbell shoulder press', 0, 4, 10, 4);

insert into exercise (exercise_name, weight, rep, numset, user_id) value('Squat', 0, 4, 10, 4);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Leg Curl', 0, 4, 10, 4);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Leg Press', 0, 4, 10, 4);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Leg Extensions', 0, 4, 10, 4);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Seated Calf Raise', 0, 4, 10, 4);


insert into exercise (exercise_name, weight, rep, numset, user_id) value('dip', 0, 4, 10, 5);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Pull-ups', 0, 4, 10, 5);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Bench press', 0, 4, 10, 5);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Biceps curl', 0, 4, 10, 5);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Lat pulldown', 0, 4, 10, 5);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Dumbbell bench pres', 0, 4, 10, 5);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Triceps cable pushdown ', 0, 4, 10, 5);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Dumbbell shoulder press', 0, 4, 10, 5);

insert into exercise (exercise_name, weight, rep, numset, user_id) value('Squat', 0, 4, 10, 5);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Leg Curl', 0, 4, 10, 5);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Leg Press', 0, 4, 10, 5);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Leg Extensions', 0, 4, 10, 5);
insert into exercise (exercise_name, weight, rep, numset, user_id) value('Seated Calf Raise', 0, 4, 10, 5);


-- program_exercise
insert into program_exercise(program_id, exercise_id) value(1, 9);
insert into program_exercise(program_id, exercise_id) value(2, 3);
insert into program_exercise(program_id, exercise_id) value(3, 9);
insert into program_exercise(program_id, exercise_id) value(4, 3);
insert into program_exercise(program_id, exercise_id) value(5, 9);
insert into program_exercise(program_id, exercise_id) value(6, 3);
insert into program_exercise(program_id, exercise_id) value(7, 9);
insert into program_exercise(program_id, exercise_id) value(8, 3);
insert into program_exercise(program_id, exercise_id) value(9, 9);
insert into program_exercise(program_id, exercise_id) value(10, 3);
insert into program_exercise(program_id, exercise_id) value(11, 9);
insert into program_exercise(program_id, exercise_id) value(12, 3);
insert into program_exercise(program_id, exercise_id) value(13, 9);
insert into program_exercise(program_id, exercise_id) value(14, 3);
insert into program_exercise(program_id, exercise_id) value(15, 9);
insert into program_exercise(program_id, exercise_id) value(16, 3);

--
insert into program_exercise(program_id, exercise_id) value(17, 16);
insert into program_exercise(program_id, exercise_id) value(17, 22);
insert into program_exercise(program_id, exercise_id) value(18, 16);
insert into program_exercise(program_id, exercise_id) value(18, 22);
insert into program_exercise(program_id, exercise_id) value(19, 16);
insert into program_exercise(program_id, exercise_id) value(19, 22);
insert into program_exercise(program_id, exercise_id) value(20, 16);
insert into program_exercise(program_id, exercise_id) value(20, 22);
insert into program_exercise(program_id, exercise_id) value(21, 16);
insert into program_exercise(program_id, exercise_id) value(21, 22);
insert into program_exercise(program_id, exercise_id) value(22, 16);
insert into program_exercise(program_id, exercise_id) value(22, 22);
insert into program_exercise(program_id, exercise_id) value(23, 16);
insert into program_exercise(program_id, exercise_id) value(23, 22);
insert into program_exercise(program_id, exercise_id) value(24, 16);
insert into program_exercise(program_id, exercise_id) value(24, 22);

--
insert into program_exercise(program_id, exercise_id) value(25, 29);
insert into program_exercise(program_id, exercise_id) value(26, 28);
insert into program_exercise(program_id, exercise_id) value(27, 35);
insert into program_exercise(program_id, exercise_id) value(28, 29);
insert into program_exercise(program_id, exercise_id) value(29, 28);
insert into program_exercise(program_id, exercise_id) value(30, 35);
insert into program_exercise(program_id, exercise_id) value(31, 29);
insert into program_exercise(program_id, exercise_id) value(32, 28);
insert into program_exercise(program_id, exercise_id) value(33, 35);
insert into program_exercise(program_id, exercise_id) value(34, 29);
insert into program_exercise(program_id, exercise_id) value(35, 28);
insert into program_exercise(program_id, exercise_id) value(36, 35);
insert into program_exercise(program_id, exercise_id) value(37, 29);
insert into program_exercise(program_id, exercise_id) value(38, 28);
insert into program_exercise(program_id, exercise_id) value(39, 35);
insert into program_exercise(program_id, exercise_id) value(40, 29);
insert into program_exercise(program_id, exercise_id) value(41, 28);
insert into program_exercise(program_id, exercise_id) value(42, 35);
insert into program_exercise(program_id, exercise_id) value(43, 29);
insert into program_exercise(program_id, exercise_id) value(44, 28);
insert into program_exercise(program_id, exercise_id) value(45, 35);
insert into program_exercise(program_id, exercise_id) value(46, 29);
insert into program_exercise(program_id, exercise_id) value(47, 28);
insert into program_exercise(program_id, exercise_id) value(48, 35);

--
insert into program_exercise(program_id, exercise_id) value(49, 40);
insert into program_exercise(program_id, exercise_id) value(49, 48);

insert into program_exercise(program_id, exercise_id) value(50, 40);
insert into program_exercise(program_id, exercise_id) value(50, 48);

insert into program_exercise(program_id, exercise_id) value(51, 40);
insert into program_exercise(program_id, exercise_id) value(51, 48);

insert into program_exercise(program_id, exercise_id) value(52, 40);
insert into program_exercise(program_id, exercise_id) value(52, 48);

insert into program_exercise(program_id, exercise_id) value(53, 40);
insert into program_exercise(program_id, exercise_id) value(53, 48);

insert into program_exercise(program_id, exercise_id) value(54, 40);
insert into program_exercise(program_id, exercise_id) value(54, 48);

insert into program_exercise(program_id, exercise_id) value(55, 40);
insert into program_exercise(program_id, exercise_id) value(55, 48);

insert into program_exercise(program_id, exercise_id) value(56, 40);
insert into program_exercise(program_id, exercise_id) value(56, 48);

--
insert into program_exercise(program_id, exercise_id) value(57, 53);
insert into program_exercise(program_id, exercise_id) value(58, 61);
insert into program_exercise(program_id, exercise_id) value(59, 53);
insert into program_exercise(program_id, exercise_id) value(60, 61);
insert into program_exercise(program_id, exercise_id) value(61, 53);
insert into program_exercise(program_id, exercise_id) value(62, 61);
insert into program_exercise(program_id, exercise_id) value(63, 53);
insert into program_exercise(program_id, exercise_id) value(64, 61);
insert into program_exercise(program_id, exercise_id) value(65, 53);
insert into program_exercise(program_id, exercise_id) value(66, 61);
insert into program_exercise(program_id, exercise_id) value(67, 53);
insert into program_exercise(program_id, exercise_id) value(68, 61);
insert into program_exercise(program_id, exercise_id) value(69, 53);
insert into program_exercise(program_id, exercise_id) value(70, 61);
insert into program_exercise(program_id, exercise_id) value(71, 53);
insert into program_exercise(program_id, exercise_id) value(72, 61);

--
insert into currentUser(sessionKey, user_id) values("abcd", 1);
insert into currentUser(sessionKey, user_id) values("efgh", 2);