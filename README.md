# new-project
Репозиторий Шестак Михаила
ТАБЛИЦА HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>таблица</title>
  <style>
table, th, td{border: 1px solid black;} 
table {border-collapse: collapse;width: 50%;}
  </style>
</head>
<body>
  
<!-- Универсальные атрибуты тегов -->
<p contenteditable="true" >Далеко-далеко за словесными горами в стране</p> <!-- разрешение редактирование текста в браузере --> 

<p style="text-align: center;" >Далеко-далеко за словесными горами в стране</p> <!-- выравнивание по центру --> 

<p title="подсказка для пользователя" >Далеко-далеко за словесными горами в стране</p> <!-- всплывающая подсказка при наведении курсора --> 

<!-- специальные атрибуты тегов -->

<a href="#"></a>

<img src="" alt="">
<script src=""></script>

<!-- создание таблицы -->

<table>
<tr>
  <th>№ п/п</th>
  <th>наименование товара</th>
<th>ед.изм.</th>
<th>Количество</th>
<th>Цена за ед. изм., руб.</th>
<th>Стоимость в руб.</th>
</tr>

<tr>
<td>1.</td>
<td>Помидоры</td><td>кг</td><td>15,20</td><td>69,00</td><td>1048,80</td>
</tr>

<tr>
<td>2.</td><td>Огурцы</td><td>кг</td><td>2,50</td><td>48,00</td><td>120,00</td>
</tr>

<tr> <!-- "colspan - 5" количество объединенных ячеек по горизонтале, rowspan - по вертикале -->
<td colspan="5" style="text-align: right">Итого:</td><td>1168,80</td>
</tr>

</table>

</body>
</html>
