let list = [];
const lastItem = list.length;
// Методы, изменяющие массив
list.push("task1"); // добавляет элемент в конец массива
list.pop(); // удаляет последний элемент
list.unshift("limon", "cucumber"); // добавляет элементы в начало массива
list.shift(); // удаляет элементы с начала массива
list.sort(); // cортировка в алфавитном порядке
list.sort((a, b) => a - b); // cортировка в порядке возрастания
list.sort((a, b) => b - a); // cортировка в порядке убывания
// Методы, не изменяющие массив
const array = ["banana", "limon"];
list.forEach((item, index, array)=>{
    console.log();
});

list.map((item, index, array)=>{ // сщздает новый массив на основании старого массива
    return `${item} - ${index}`;
});

list.reduce((acc, item) => // возвращает 1 значение
{
    return acc + item;
});

list.filter((item, indexedDB, array) =>  // возвращает отфильтрованный массив
{
    return item > 3;
});
list.filter((item, indexedDB, array) => item > 3);

list.indexOf("banana"); 
list.lastIndexOf("banana");
list.includes("tomatos"); // возвращает true, если есть
list.slice(1, 3); // обрезает и формирует новый массив
list.splice(1 , 2); // удаляет элементы и вставляет новые элементы
list.concat(array); // объединяет массивы
Array.isArray();
list.split(" , "); // 

const str = list.join(" , ");

