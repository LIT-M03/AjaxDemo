$(function() {
    $("#people-button").on('click', function() {
        var amount = $("#personAmount").val();
        $.post("/home/generatepeople", { amountToGenerate: amount }, function(people) {
            people.forEach(function(person) {
                var row = $("<tr><td>" + person.FirstName + "</td><td>" + person.LastName + "</td><td>" + person.Age + "</td><td><button class='mybutton btn btn-success'>Click me</button></td></tr>");
                $("table").append(row);
            });
        });
    });

    $("#clear-button").on('click', function() {
        $("table tr:gt(0)").remove();
    });

    $("table").on('click', '.mybutton', function () {
        var row = $(this).parent().parent();
        alert(row.find('td:eq(0)').text());
    });
});
