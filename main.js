function set()
{
    if (localStorage.getItem("score") == null)
    {
        localStorage.setItem("score", "0")
    }
    else
    {
        x = localStorage.getItem("score");
        document.getElementById("scores").innerHTML = "Score: " + x;
    }
}
function done()
{
    x = localStorage.getItem("score");
    y = parseFloat(x) + parseFloat(1);
    localStorage.setItem("score", y);
    z = localStorage.getItem("score");
    document.getElementById("scores").innerHTML = "Score: " + z;
}