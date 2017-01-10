var obj1 = { custId : 1,
		name : "jayesh"
		}

var obj2 = { custId :3 ,
			 name : "nayana"
		}
var obj3 = { custId : 3,
			 name : "sanjana"
		}
var customerArray = [];
customerArray.push(obj1);
customerArray.push(obj2);
customerArray.push(obj3);

for(var obj of customerArray)
	console.log(obj);

for (var customer of customerArray)
	console.log(customer.name + customer.custId);

for (var cust of customerArray)

	console.log(cust.name);
if (cust.name === "sanjana"){
	console.log("bingo sanjana");
}


