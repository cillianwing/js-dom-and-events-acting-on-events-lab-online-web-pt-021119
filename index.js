function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  let employee = document.querySelector('input').value;
  
  return employee;
}

function addNewElementAsLi() {
  let employee = retrieveEmployeeInformation();
  
  
}