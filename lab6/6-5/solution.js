function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
       var searchField = document.getElementById('searchField').value.toUpperCase();
       var tableRows = document.querySelectorAll('.container tbody tr');

       tableRows.forEach(function(row) {
           var cells = row.getElementsByTagName('td');
           var matchFound = false;

           for (var i = 0; i < cells.length; i++) {
               var cellText = cells[i].textContent || cells[i].innerText;
               if (cellText.toUpperCase().indexOf(searchField) > -1) {
                   matchFound = true;
                   break;
               }
           }

           if (matchFound) {
               row.classList.add('select');
           } else {
               row.classList.remove('select');
           }
       });
   }
}
