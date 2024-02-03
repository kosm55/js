use likos;
show tables;
select * from users;
select id, name, age, gender from users;
select * from users where name='oleg';
select * from users where age=25 or gender='female';

select * from users where name like 'o%';
select * from users where name like  '%o%';
select * from users where name like '__e%';

select * from users where age=30;
select * from users where age!=30 ;
select * from users where age between 20 and 30 ;
select * from users where age not between 20 and 30 ;
select * from users where age >=18;

select * from users where age in (20, 16,45, 25,50);
select * from users where length(name)>4;

select * from users order by age desc;

select * from users where age>20 order by age desc;
select * from users where age>20 order by age desc limit 3;
select * from users where age>20 order by age desc limit 3 offset 6;

select min(age) as minAge from users;
select max(age) as maxAge from users;
select sum(age) as sumAge from users;
select avg(age) as avgAge from users;

select min(age) as minAge, avg(age) as avgAge, gender from users group by gender;
select count(*) as count, gender from users group by gender;

select * from cars;

select count(*) as countModel, model from cars where year>2020 group by model having countModel>=2 order by countModel desc;
