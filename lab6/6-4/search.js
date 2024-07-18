function search() {
   var input, filter, ul, li, matches = 0;
   input = document.getElementById('searchText');
   filter = input.value.toUpperCase();
   ul = document.getElementById('towns');
   li = ul.getElementsByTagName('li');

   for (var i = 0; i < li.length; i++) {
       var txtValue = li[i].textContent || li[i].innerText;
       if (txtValue.toUpperCase().indexOf(filter) > -1) {
           li[i].style.fontWeight = 'bold';
           li[i].style.textDecoration = 'underline';
           matches++;
       } else {
           li[i].style.fontWeight = 'normal';
           li[i].style.textDecoration = 'none';
       }
   }

   document.getElementById('result').textContent = matches + ' matches found';
}
