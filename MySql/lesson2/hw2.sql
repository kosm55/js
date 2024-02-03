use likos;

select * from client
                  join application a on client.idClient = a.Client_idClient
                  join department d on d.idDepartment = client.Department_idDepartment;
-- # 1 Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
select * from client
                  join application a on client.idClient = a.Client_idClient
                  join department d on d.idDepartment = client.Department_idDepartment
where length(FirstName)<6;
# 2.Вибрати львівські відділення банку.
select * from client
                  join application a on client.idClient = a.Client_idClient
                  join department d on d.idDepartment = client.Department_idDepartment
where DepartmentCity='lviv';

# 3.Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
select * from client
                  join application a on client.idClient = a.Client_idClient
                  join department d on d.idDepartment = client.Department_idDepartment
where Education='high' order by LastName ;

# 4.Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
select * from client
                  join application a on client.idClient = a.Client_idClient
                  join department d on d.idDepartment = client.Department_idDepartment
order by idApplication desc limit 5;

# 5.Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
select * from client
                  join application a on client.idClient = a.Client_idClient
                  join department d on d.idDepartment = client.Department_idDepartment
where LastName like  '%iva' or LastName like  '%iv';

# 6.Вивести клієнтів банку, які обслуговуються київськими відділеннями.
select * from client
                  join application a on client.idClient = a.Client_idClient
                  join department d on d.idDepartment = client.Department_idDepartment
where DepartmentCity='kyiv';

# 7.Знайти унікальні імена клієнтів.
select distinct FirstName from client
                  join application a on client.idClient = a.Client_idClient
                  join department d on d.idDepartment = client.Department_idDepartment;

# 8.Вивести дані про клієнтів, які мають кредит більше ніж на 5000 гривень.
select * from client
                  join application a on client.idClient = a.Client_idClient
                  join department d on d.idDepartment = client.Department_idDepartment
where Sum>5000;

# 9.Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
select count(idClient)  from client
      join department d on d.idDepartment = client.Department_idDepartment
union
select count(idClient)  from client
      join department d on d.idDepartment = client.Department_idDepartment
where DepartmentCity='lviv';

# 10.Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
select max(Sum) , idClient from client
    join application a on client.idClient = a.Client_idClient
    join department d on d.idDepartment = client.Department_idDepartment
group by idClient order by idClient;

# 11. Визначити кількість заявок на крдеит для кожного клієнта.
select count(Client_idClient), idClient from client
    join application a on client.idClient = a.Client_idClient
    join department d on d.idDepartment = client.Department_idDepartment
group by idClient order by idClient;

# 12. Визначити найбільший та найменший кредити.
select max(Sum) from client
    join application a on client.idClient = a.Client_idClient
    join department d on d.idDepartment = client.Department_idDepartment
union
select min(Sum) from client
    join application a on client.idClient = a.Client_idClient
    join department d on d.idDepartment = client.Department_idDepartment;

# 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
select count(Client_idClient) from client
    join application a on client.idClient = a.Client_idClient
    join department d on d.idDepartment = client.Department_idDepartment
where Education='high';

# 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
select avg(Sum), client.* from client
    join likos.department d on d.idDepartment = client.Department_idDepartment
    join likos.application a on client.idClient = a.Client_idClient
group by idClient order by avg(Sum) desc limit 1;

# 15. Вивести відділення, яке видало в кредити найбільше грошей
select sum(Sum) from client
    join likos.department d on d.idDepartment = client.Department_idDepartment
    join likos.application a on client.idClient = a.Client_idClient
group by idDepartment order by sum(Sum) desc limit 1;

# 16. Вивести відділення, яке видало найбільший кредит.
select idDepartment, DepartmentCity from client
    join likos.department d on d.idDepartment = client.Department_idDepartment
    join likos.application a on client.idClient = a.Client_idClient
where sum= (select max(a.Sum) from client
    join likos.department d on d.idDepartment = client.Department_idDepartment
    join likos.application a on client.idClient = a.Client_idClient);

# 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
update client
    join likos.department d on d.idDepartment = client.Department_idDepartment
    join likos.application a on client.idClient = a.Client_idClient
set Sum=6000 where Education='high';

# 18. Усіх клієнтів київських відділень пересилити до Києва.
update client
    join likos.department d on d.idDepartment = client.Department_idDepartment
    join likos.application a on client.idClient = a.Client_idClient
set City='Kyiv' where DepartmentCity='Kyiv';

# 19. Видалити усі кредити, які є повернені.
delete  from application where CreditState='Returned' ;

# 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
delete  from application where Client_idClient in (select idClient from client
where LastName like '_a%' or LastName like '_e%' or LastName like '_o%' or LastName like '_i%');

# 21.Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
select avg(Sum), DepartmentCity, idDepartment from client
    join likos.application a on client.idClient = a.Client_idClient
    join likos.department d on d.idDepartment = client.Department_idDepartment
where DepartmentCity='Lviv'  group by DepartmentCity, idDepartment having avg(Sum)>5000;

# 22.Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
select * from client
join likos.department d on d.idDepartment = client.Department_idDepartment
join likos.application a on client.idClient = a.Client_idClient
where CreditState='returned' having Sum>5000;
#
# 23.Знайти максимальний неповернений кредит.
select max(Sum) from client
   join likos.department d on d.idDepartment = client.Department_idDepartment
   join likos.application a on client.idClient = a.Client_idClient
where CreditState='not returned';

# 24.Знайти клієнта, сума кредиту якого найменша
select min(Sum),client.*  from client
   join likos.department d on d.idDepartment = client.Department_idDepartment
   join likos.application a on client.idClient = a.Client_idClient
group by idClient order by min(Sum) limit 1;

# 25.Знайти кредити, сума яких більша за середнє значення усіх кредитів
select Sum from client
    join likos.department d on d.idDepartment = client.Department_idDepartment
    join likos.application a on client.idClient = a.Client_idClient
where Sum>(select avg(Sum) from client
    join likos.department d on d.idDepartment = client.Department_idDepartment
    join likos.application a on client.idClient = a.Client_idClient);

# 26. Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів
# зміна міста для перевірки
update client set City='Kyiv' where City='Krasne';
# щоб було унікальне - dictinct idClient,  виведе тільки айді але без повторень
select * from client
join likos.application a on client.idClient = a.Client_idClient
join likos.department d on d.idDepartment = client.Department_idDepartment
where City=(select City from client
     join likos.department d on d.idDepartment = client.Department_idDepartment
     join likos.application a on client.idClient = a.Client_idClient
 group by idClient order by count(idApplication) desc limit 1);


# 27. Місто клієнта з найбільшою кількістю кредитів
select City from client
   join likos.department d on d.idDepartment = client.Department_idDepartment
   join likos.application a on client.idClient = a.Client_idClient
group by idClient order by count(idApplication) desc limit 1;