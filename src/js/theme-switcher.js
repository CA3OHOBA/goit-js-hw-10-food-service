const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

 const input = document.querySelector('input');
 const body = document.querySelector('body');



function changeTheme(){
  if(input.checked){
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);

    localStorage.setItem('Theme is', Theme.DARK)
  } else 
    {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('Theme is', Theme.LIGHT)
  }; 
  };




function connectToLS(){
  if(localStorage.getItem('Theme is') === Theme.DARK){
    body.classList.add(Theme.DARK);
    input.checked = true;
  } 
};


connectToLS();



input.addEventListener('change', changeTheme)













