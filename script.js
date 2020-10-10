

function submit() {
    let Quizes = parseInt(document.getElementById("Quizes").value) || 0;
    let Midterm = parseInt(document.getElementById("Midterm").value) || 0;
    let FinalTest = parseInt(document.getElementById("FinalTest").value) || 0;
    let Oral = parseInt(document.getElementById("Oral").value) || 0;
  
    let total = Quizes + Midterm + FinalTest + Oral;
  
    if (total >= 100 && total >= 90) {
      document.getElementById("final_grade").innerHTML = "A";
    } else if (total >= 80) {
      document.getElementById("final_grade").innerHTML = "B";
    } else if (total >= 70) {
      document.getElementById("final_grade").innerHTML = "C";
    } else if (total >= 60) {
      document.getElementById("final_grade").innerHTML = "D";
    } else if (total < 60) {
      document.getElementById("final_grade").innerHTML = "F";
    }
  
    
    document.getElementById("total_grades").innerHTML = total;
  }
  