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
insert into weekday (weekday_name) value('Monday'); 
insert into weekday (weekday_name) value('Tuesday'); 
insert into weekday (weekday_name) value('Wednesday'); 
insert into weekday (weekday_name) value('Thursday'); 
insert into weekday (weekday_name) value('Friday'); 
insert into weekday (weekday_name) value('Saturday'); 
insert into weekday (weekday_name) value('Sunday'); 

-- program
insert into program (program_name, program_description, routine_id, weekday_id) value('Lower', 'Lower body workout', 1, 1); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Upper', 'upper body workout', 1, 2); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Lower', 'Lower body workout', 1, 4); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Upper', 'upper body workout', 1, 5); 

insert into program (program_name, program_description, routine_id, weekday_id) value('Lower', 'Lower body workout', 2, 1); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Upper', 'upper body workout', 2, 2); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Lower', 'Lower body workout', 2, 4); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Upper', 'upper body workout', 2, 5); 

insert into program (program_name, program_description, routine_id, weekday_id) value('Lower', 'Lower body workout', 3, 1); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Upper', 'upper body workout', 3, 2); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Lower', 'Lower body workout', 3, 4); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Upper', 'upper body workout', 3, 5); 

insert into program (program_name, program_description, routine_id, weekday_id) value('Lower', 'Lower body workout', 4, 1); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Upper', 'upper body workout', 4, 2); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Lower', 'Lower body workout', 4, 4); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Upper', 'upper body workout', 4, 5); 


insert into program (program_name, program_description, routine_id, weekday_id) value('Full Body', 'Full Body workout', 5, 6);
insert into program (program_name, program_description, routine_id, weekday_id) value('Full Body', 'Full Body workout', 5, 7);

insert into program (program_name, program_description, routine_id, weekday_id) value('Full Body', 'Full Body workout', 6, 6);
insert into program (program_name, program_description, routine_id, weekday_id) value('Full Body', 'Full Body workout', 6, 7);

insert into program (program_name, program_description, routine_id, weekday_id) value('Full Body', 'Full Body workout', 7, 6);
insert into program (program_name, program_description, routine_id, weekday_id) value('Full Body', 'Full Body workout', 7, 7);

insert into program (program_name, program_description, routine_id, weekday_id) value('Full Body', 'Full Body workout', 8, 6);
insert into program (program_name, program_description, routine_id, weekday_id) value('Full Body', 'Full Body workout', 8, 7);

insert into program (program_name, program_description, routine_id, weekday_id) value('Push', 'Push workout', 9, 1);
insert into program (program_name, program_description, routine_id, weekday_id) value('Pull', 'Pull workout', 9, 2);
insert into program (program_name, program_description, routine_id, weekday_id) value('Legs', 'Legs workout', 9, 3);
insert into program (program_name, program_description, routine_id, weekday_id) value('Push', 'Push workout', 9, 4);
insert into program (program_name, program_description, routine_id, weekday_id) value('Pull', 'Pull workout', 9, 5);
insert into program (program_name, program_description, routine_id, weekday_id) value('Legs', 'Legs workout', 9, 6);

insert into program (program_name, program_description, routine_id, weekday_id) value('Push', 'Push workout', 10, 1);
insert into program (program_name, program_description, routine_id, weekday_id) value('Pull', 'Pull workout', 10, 2);
insert into program (program_name, program_description, routine_id, weekday_id) value('Legs', 'Legs workout', 10, 3);
insert into program (program_name, program_description, routine_id, weekday_id) value('Push', 'Push workout', 10, 4);
insert into program (program_name, program_description, routine_id, weekday_id) value('Pull', 'Pull workout', 10, 5);
insert into program (program_name, program_description, routine_id, weekday_id) value('Legs', 'Legs workout', 10, 6);

insert into program (program_name, program_description, routine_id, weekday_id) value('Push', 'Push workout', 11, 1);
insert into program (program_name, program_description, routine_id, weekday_id) value('Pull', 'Pull workout', 11, 2);
insert into program (program_name, program_description, routine_id, weekday_id) value('Legs', 'Legs workout', 11, 3);
insert into program (program_name, program_description, routine_id, weekday_id) value('Push', 'Push workout', 11, 4);
insert into program (program_name, program_description, routine_id, weekday_id) value('Pull', 'Pull workout', 11, 5);
insert into program (program_name, program_description, routine_id, weekday_id) value('Legs', 'Legs workout', 11, 6);

insert into program (program_name, program_description, routine_id, weekday_id) value('Push', 'Push workout', 12, 1);
insert into program (program_name, program_description, routine_id, weekday_id) value('Pull', 'Pull workout', 12, 2);
insert into program (program_name, program_description, routine_id, weekday_id) value('Legs', 'Legs workout', 12, 3);
insert into program (program_name, program_description, routine_id, weekday_id) value('Push', 'Push workout', 12, 4);
insert into program (program_name, program_description, routine_id, weekday_id) value('Pull', 'Pull workout', 12, 5);
insert into program (program_name, program_description, routine_id, weekday_id) value('Legs', 'Legs workout', 12, 6);


insert into program (program_name, program_description, routine_id, weekday_id) value('Full Body', 'Full Body workout', 13, 1);
insert into program (program_name, program_description, routine_id, weekday_id) value('Full Body', 'Full Body workout', 13, 5);

insert into program (program_name, program_description, routine_id, weekday_id) value('Full Body', 'Full Body workout', 14, 1);
insert into program (program_name, program_description, routine_id, weekday_id) value('Full Body', 'Full Body workout', 14, 5);

insert into program (program_name, program_description, routine_id, weekday_id) value('Full Body', 'Full Body workout', 15, 1);
insert into program (program_name, program_description, routine_id, weekday_id) value('Full Body', 'Full Body workout', 15, 5);

insert into program (program_name, program_description, routine_id, weekday_id) value('Full Body', 'Full Body workout', 16, 1);
insert into program (program_name, program_description, routine_id, weekday_id) value('Full Body', 'Full Body workout', 16, 5);

insert into program (program_name, program_description, routine_id, weekday_id) value('Lower', 'Lower body workout', 17, 1); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Upper', 'upper body workout', 17, 2); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Lower', 'Lower body workout', 17, 4); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Upper', 'upper body workout', 17, 5); 

insert into program (program_name, program_description, routine_id, weekday_id) value('Lower', 'Lower body workout', 18, 1); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Upper', 'upper body workout', 18, 2); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Lower', 'Lower body workout', 18, 4); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Upper', 'upper body workout', 18, 5); 

insert into program (program_name, program_description, routine_id, weekday_id) value('Lower', 'Lower body workout', 19, 1); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Upper', 'upper body workout', 19, 2); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Lower', 'Lower body workout', 19, 4); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Upper', 'upper body workout', 19, 5); 

insert into program (program_name, program_description, routine_id, weekday_id) value('Lower', 'Lower body workout', 20, 1); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Upper', 'upper body workout', 20, 2); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Lower', 'Lower body workout', 20, 4); 
insert into program (program_name, program_description, routine_id, weekday_id) value('Upper', 'upper body workout', 20, 5); 
