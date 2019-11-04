document.getElementById("id_logic").innerHTML = "logic = 2019.11.04.1"
window.addEventListener("devicemotion", on_acc_data_uab);
window.addEventListener("deviceorientation", on_gyro_data_uab);

function on_gyro_data_uab(e)
{
	document.getElementById("id_alpha").innerHTML = Math.round(e.alpha*100)/100;
	document.getElementById("id_beta").innerHTML = Math.round(e.beta*100)/100;
	document.getElementById("id_gamma").innerHTML = Math.rond(e.gamma*100)/100;
}

function on_acc_data_uab(e)
{
	var acc = e.accelerationIncludingGravity;
	document.getElementById("id_acc_x").innerHTML = Math.round(e.acc.x*100)/100;
	document.getElementById("id_acc_y").innerHTML = Math.round(e.acc.y*100)/100;
	document.getElementById("id_acc_z").innerHTML = Math.round(e.acc.z*100)/100;
}