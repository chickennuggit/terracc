let s = '';

let fName = ['Ethan','Glenn','Jesse'];
let lName = ['Moody','Davis','Milliken'];

let atn = ['Fire', 'Ice', 'Cheese'];

let mainCont = gbi('mainCont');
let rollTimes = gbi('rollTimes');
let sides = gbi('sides');
let rollSeq = gbi('rollSeq');
let rollTot = gbi('rollTot');

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function gbi(id) {
	return document.getElementById(id);
}

function gbn(name, idx) {
	return document.getElementsByName(name)[idx];
}

function ih(obj, dat, override) {
	if(override) {
		obj.innerHTML = dat;
	} else {
		obj.innerHTML += dat;
	}
}

function newEl(tag, id, dat) {
	return '<' + tag + ' id="' + id + '">' + dat + '</' + tag + '>';
}

function giveName() {
	fName = shuffle(fName);
	lName = shuffle(lName);
	let result = fName[0] + ' ' + lName[0];
	let nameBox = gbn('name', 0);
	nameBox.value = result;
}

function giveAtn() {
	atn = shuffle(atn);
	let atnBox = gbn('attunement', 0);
	atnBox.value = atn[0];
}

function roll() {
	let times = parseInt(rollTimes.value);
	let dSides = parseInt(sides.value);
	let x = [];
	let t = 0;
	rollSeq.value = '';
	for(i=1; i!=dSides+1; i++) {
		x.push(i);
	}
	for(i=1; i!=times+1; i++) {
		x = shuffle(x);
		t += x[0];
		rollSeq.value += x[0]
		rollSeq.value += ', '
	}
	rollTot.value = t;
}

function createRollTimes() {
	let result;
	for(i=1; i!=100; i++) {
		result += '<option value="' + i + '">' + i + '</option>';
	}
	return result;
}

window.onload = function() {
	ih(rollTimes, createRollTimes());
}