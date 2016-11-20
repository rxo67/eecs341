<html>

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="layout.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">

    <title>CWRUTix</title>
</head>

<body>

    <div id = "main">

        <fieldset>
        <legend>CWRUTix</legend>
        <div id = "login">
            <form action="">
                <br>
                <input type="text" name="caseid" maxLength="7" placeholder="Case ID"><br>
                <input type="password" maxLength="16" name="pword" placeholder="Password"><br>
                <input type="submit" value="Login">
                <br>
            </form>
        </div>

        <div id = "register">
            <form action="">
                <br>
                <input type="text" name="username" maxLength="16" placeholder="Username"><br>
                <input type="text" name="caseid" maxLength="7" placeholder="Case ID"><br>
                <input type="password" maxLength="16" name="pword" placeholder="Password"><br>
                <input type="submit" value="Register">
                <br>
            </form>
        </div>
        <button class = "login_register">New user?</button>
        <!--<a href="">New user?</a>-->
         </fieldset>

    </div>


    <script>
        $(".login_register").on("click", function () {
            $("#login, #register").toggle();
            $(this).text(function(i, text){
             return text === "Sign in" ? "New User?" : "Sign in";
         });
     });
    </script>

</body>
</html>
