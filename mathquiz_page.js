player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");
player1_score = 0;
player2_score = 0;

document.getElementById("player1").innerHTML = player1_name + " : ";
document.getElementById("player2").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn: " +  player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn: " +  player2_name;

function send()
{
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    realanswer = parseInt(number1) * parseInt(number2);

    question = "<h4>" + number1 + " x " + number2 + "</h4>";
    input = "<br>Answer : <input type= 'text' id= 'inputcheckbox'>";
    checkbutton = "<br><br><button class= 'btn btn-info' onclick= 'check();'>Check</button>";
    row = question + input + checkbutton;

    document.getElementById("output").innerHTML= row;
    document.getElementById("num1").value= " ";
    document.getElementById("num2").value= " ";
}

question_turn = "player1";
answer_turn = "player2";

function check() 
{
    getanswer = document.getElementById("inputcheckbox").value;

    if(getanswer == realanswer)
    {

        if(answer_turn == "player1")
        {
            update_score_p1 = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_score_p1;
        }
        else
        {
            update_score_p2 = player2_score + 1;
            document.getElementById("player2_score").innerHTML = update_score_p2;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player2_name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
    }
    if(answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}