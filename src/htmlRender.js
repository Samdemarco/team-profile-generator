const fs = require('fs');

//GENERATE MANAGER CARD
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div style="background:#ED8EDC;" class="card-header">
            <h3>${manager.name}</h3>
            <h4><img src="clipboard.png" alt="clipboard" width="24" height="24">Manager</h4>  
            
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>

    `;
}
//GENERATE ENGINEER CARD
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div style="background:#ED8EDC;" class="card-header">
                <h3>${engineer.name}</h3>
                <h4><img src="software-engineer.png" alt="engineer" width="24" height="24" > Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}
//GENERATE INTERN CARD
const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div style="background:#ED8EDC;" class="card-header">
                <h3>${intern.name}</h3>
                <h4><img src="graduated.png" alt="graduated" width="24" height="24">Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

//GENERATE FINAL TEAM PAGE
const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
  </head>
  <body>
      <header>
      <h1 style="background:#33FFF9;text-align:center;padding:30px">My Team</h1></header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}
//htmlRender ACCEPTS TEAM ARRAY CREATED IN INDEX.JS AND GENERATES LIST OF CARDS FOR TEAM PAGE 
htmlRender = (arr) => {

    //STORE NEW CARDS IN cardArray
    cardArray = []; 

    for (let i = 0; i < arr.length; i++) {
        const employee = arr[i];
        const role = employee.getRole(); 
        //CHECK IF MANAGER
        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            cardArray.push(managerCard);
        }
        //CHECK IF ENGINEER
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            cardArray.push(engineerCard);
        }
        //CHECK IF INTERN 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            cardArray.push(internCard);
        }        
    }
    //JOIN HTML STRINGS TO FORM CONTINUOUS FORMATION OF CARDS ON HTML TEAM PAGE 
    const employeeCards = cardArray.join('')
    //GENERATE FINAL TEAM BASED ON employeeCards
    const generateTeam = generateTeamPage(employeeCards); 
    //FS WRITE FINAL INDEX.HTML TO DIST FOLDER
    fs.writeFile('./dist/index.html', generateTeam, err => {
                //CHECK FOR ERROR 
                if (err) {
                    console.log(err);
                    return;
                //UPON SUCCESSFUL COMPLETION OF TEAM PAGE 
                } else {
                    console.log("Your team profile has been successfully created and can be accessed via index.html")
                }
            })

}
exports.htmlRender = htmlRender;


