use likos;
create table cities(
                       id int auto_increment primary key ,
                       city varchar(20) not null
);

create table usrs (
                      id int auto_increment primary key ,
                      name varchar(20) not null ,
                      age int not null ,
                      city_id int null ,
                      foreign key (city_id) references cities(id)
);

select * from usrs;
select * from cities;

select * from usrs join cities  on cities.id = usrs.city_id;
select usrs.name,city from usrs join cities  on cities.id = usrs.city_id;
select usrs.id, name, city from usrs join cities  on cities.id = usrs.city_id;
select * from cities left join usrs u on cities.id = u.city_id;

select * from usrs join cities  on cities.id = usrs.city_id where city='lviv';

