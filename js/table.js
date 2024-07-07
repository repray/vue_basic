function addData() {
    var table = document.getElementById('table');
    // console.log(table);
    //获取插入的位置
    var length = table.rows.length;
    //  console.log(length);
    var newRow = table.insertRow(length);
    // console.log(newRow);
   var namecol = newRow.insertCell(0);
   var phonecol = newRow.insertCell(1);
   var actioncol = newRow.insertCell(2);

   namecol.innerHTML = '未命名';
   phonecol.innerHTML = '无联系方式';
   actioncol.innerHTML = ' <button>编辑</button><button>删除</button>';

}