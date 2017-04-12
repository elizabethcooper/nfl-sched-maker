function exportTable() {
    var schedTlb = document.getElementById('exportTlb');
    var rowLength = schedTlb.rows.length;
    for (var i = 0; i < rowLength; i++){
        var cells = schedTlb.rows.item(i).cells;
        var cellLength = cells.length;
        for(var j = 0; j < cellLength-1; j++){
            var cellVal = cells.item(j).innerHTML;
            console.log(cellVal);
        }
    }
}