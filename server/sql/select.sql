select * from user;
select * from routine;
select * from weekday;
select * from program;
select * from exercise;
select * from program_exercise;

-- all programs
select routine.user_id, program.* from routine 
INNER JOIN program
ON routine.routine_id = program.routine_id where routine.user_id = 1;
-- 
select routine.* 
from currentUser 
INNER JOIN routine
ON routine.user_id = currentUser.user_id 
where currentUser.sessionKey = "abcd"
