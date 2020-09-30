var employeePromise = d3.csv("employee.csv");

var drawTable = function(employees)
			 
{
	console.log("hi")
	var rows = d3.select("#myTable tbody") 
	.selectAll("tr")
	.data(employees)
	.enter()
	.append("tr")
	
	rows.append("td")
	.text(function(employees)
	{
		return employees.Name
	})
	rows.append("td")
	.text(function(employees)
	{
		return employees.Title
	})
	rows.append("td")
	.text(function(employees)
	{
		return employees.Email
	})

}










var successFcn = function(employees)
{
	console.log("employees",employees)
	drawTable(employees)
	
}
var failureFcn = function(error)
{
	console.log("error", error)
}
employeePromise.then(successFcn, failureFcn)