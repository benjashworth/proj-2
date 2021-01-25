document.addEventListener('DOMContentLoaded', () => {

   const studentsList = document.getElementsByClassName("student-item cf");
    const header = document.getElementsByClassName("pageHeader cf");
    const pageElements = document.getElementsByClassName("page");
    var page = pageElements[0];
    var linkList = '';
    
    hideAll();
    appendPageLinks(studentsList);
    showPage(1);
    
    
    function hideAll() {
      for (i = 0; i < studentsList.length; i++)
      {
        studentsList[i].style.display = "none" ;
      }
    }
    
    function appendPageLinks(studentsList) {

            const paginationDiv = document.createElement('div');
            const ul = document.createElement('ul');
            const ulChildren = ul.children

            paginationDiv.className = "pagination";
            paginationDiv.appendChild(ul);
            page.appendChild(paginationDiv);

            for (i = 1; i <= (Math.ceil(studentsList.length / 10)); i++){
              var li = document.createElement('li');
              var a = document.createElement('a');
              a.text = i;
              li.appendChild(a);
              ul.appendChild(li);
            }

            ul.children[0].querySelector('a').classList.add('active');
            
            for (j = 0; j < ulChildren.length; j++){
              ulChildren[j].addEventListener('click', (event) => {
              
              showPage(event.target.text);
              
               for (k = 0; k < ul.children.length; k++)
                {
                    if (k+1 != event.target.text)
                    {
                      ulChildren[k].querySelector('a').classList.remove('active');
                   } else {
                      ulChildren[k].querySelector('a').classList.add('active');
                  }
                }
              });
            }
        }
              
     function showPage(page) {
        
        hideAll();
       
        var starting = (page - 1) * 10;
        var ending = starting + 10;
        
        for(i = starting; i < ending && i < studentsList.length; i++){
          studentsList[i].style.display = "block" ;
        }
      }
});           
              
              
              2
