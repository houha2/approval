const MINIMUM = 34;
const TECHELECT = 0.75;

const CORE = new Map([
	['CHEM102', 2],
	['CHEM103', 2],
	['CHEM104', 2],
	['CHEM105', 2],
	['CHEM202', 2],
	['CHEM203', 2], 
	['CHEM204', 2],
	['CHEM205', 2], 
	['CHEM232', 2], 
	['CHEM233', 2], 
	['CHEM236', 2], 
	['CHEM237', 2], 
	['CHEM436', 2], 
	['CHEM332', 2],
	['CS101', 2,], 
	['CS125', 2],
	['CS173', 2],
	['CS225', 2],
	['CS374', 2],
	['ECE110', 2], 
	['ECE205', 2], 
	['ECE206', 2],
	['IE300', 2,],
	['IB150', 2,],
	['MATH220', 2], 
	['MATH221', 2], 
	['MATH231', 2], 
	['MATH241', 2], 
	['MATH285', 2], 
	['MATH286', 2], 
	['MATH213', 2], 
	['MATH410', 2], 
	['MATH225', 2], 
	['MATH415', 2], 
	['MATH416', 2], 
	['MATH441', 2], 
	['MATH442', 2],
	['MCB150', 2], 
	['MCB250', 2], 
	['MCB251', 2], 
	['MCB252', 2], 
	['MCB253', 2], 
	['MCB354', 2], 
	['MCB450', 2],
	['PHYS211', 2], 
	['PHYS212', 2], 
	['PHYS213', 2], 
	['PHYS214', 2], 
	['PHYS225', 2],
	['TAM210', 2], 
	['TAM211', 2],
	['TAM212', 2],
	['TAM251', 2],
	['TAM335', 2],
	['STAT212', 2],
	['STAT400', 2],
]);

const SPECIFIC = new Map([
	['AE100', 1], 
	['AE202', 1], 
	['AE311', 1], 
	['AE312', 1], 
	['AE321', 1], 
	['AE323', 1], 
	['AE352', 1], 
	['AE353', 1], 
	['AE370', 1],
	['AE433', 1],
	['AE442', 1],
	['AE443', 1],
	['AE460', 1],
	['AE461', 1],
	['AE483', 1],
	['ABE100', 1], 
	['ABE141', 1], 
	['ABE223', 1], 
	['ABE224', 1], 
	['ABE225', 1], 
	['ABE226', 1], 
	['ABE430', 1], 
	['ABE469', 1],
	['ASRM210', 1], 
	['ASRM406', 1], 
	['ASRM471', 1], 
	['ASRM410', 1], 
	['ASRM472', 1], 
	['ASRM461', 1], 
	['ASRM469', 1],
	['ASTR210', 1], 
	['ASTR330', 1], 
	['ASTR350', 1], 
	['ASTR390', 1], 
	['ASTR404', 1], 
	['ASTR405', 1], 
	['ASTR406', 1], 
	['ASTR414', 1], 
	['ASTR496', 1],
	['ATMS201', 1], 
	['ATMS301', 1], 
	['ATMS302', 1], 
	['ATMS303', 1], 
	['ATMS304', 1], 
	['ATMS305', 1], 
	['ATMS306', 1], 
	['ATMS307', 1], 
	['ATMS313', 1], 
	['ATMS314', 1],
	['BIOC446', 1], 
	['BIOC455', 1], 
	['BIOC460', 1], 
	['BIOC406', 1], 
	['BIOC445', 1], 
	['BIOC455', 1],
	['BIOE100', 1], 
	['BIOE120', 1], 
	['BIOE201', 1], 
	['BIOE202', 1], 
	['BIOE205', 1], 
	['BIOE206', 1], 
	['BIOE220', 1], 
	['BIOE301', 1], 
	['BIOE302', 1], 
	['BIOE303', 1], 
	['BIOE310', 1], 
	['BIOE360', 1], 
	['BIOE414', 1], 
	['BIOE415', 1], 
	['BIOE420', 1], 
	['BIOE435', 1], 
	['BIOE436', 1], 
	['BIOE476', 1],
	['CEE195', 1], 
	['CEE201', 1], 
	['CEE202', 1], 
	['CEE300', 1], 
	['CEE310', 1], 
	['CEE320', 1], 
	['CEE330', 1], 
	['CEE340', 1], 
	['CEE350', 1], 
	['CEE360', 1], 
	['CEE380', 1],
	['CHBE121', 1], 
	['CHBE221', 1], 
	['CHBE321', 1], 
	['CHBE421', 1], 
	['CHBE422', 1], 
	['CHBE424', 1], 
	['CHBE430', 1], 
	['CHBE431', 1], 
	['CHBE440', 1],
	['CHEM312', 1], 
	['CHEM315', 1], 
	['CHEM317', 1], 
	['CHEM437', 1], 
	['CHEM447', 1], 
	['CHEM420', 1], 
	['CHEM442', 1], 
	['CHEM444', 1],
	['CHEM440', 1], 
	['CHEM445', 1], 
	['CHEM483', 1], 
	['CHEM397', 1], 
	['CHEM497', 1], 
	['CHEM499', 1],
	['CPSC112', 1], 
	['CPSC125', 1],
	['CPSC226', 1], 
	['CPSC270', 1], 
	['CPSC261', 1], 
	['CPSC265', 1], 
	['CPSC266', 1], 
	['CPSC352', 1], 
	['CPSC440', 1], 
	['CPSC418', 1], 
	['CPSC452', 1], 
	['CPSC453', 1], 
	['CPSC466', 1], 
	['CPSC498', 1],
	['CS100', 1], 
	['CS105', 1], 
	['CS210', 1], 
	['CS233', 1], 
	['CS241', 1], 
	['CS126', 1], 
	['CS361', 1], 
	['CS357', 1], 
	['CS421', 1], 
	['CS410', 1], 
	['CS411', 1], 
	['CS412', 1], 
	['CS446', 1], 
	['CS481', 1],
	['CS482', 1],
	['ECE120', 1], 
	['ECE210', 1], 
	['ECE220', 1], 
	['ECE313', 1], 
	['ECE374', 1], 
	['ECE385', 1], 
	['ECE391', 1], 
	['ECE411', 1], 
	['ECE329', 1], 
	['ECE340', 1], 
	['ECE333', 1], 
	['ECE445', 1], 
	['ECE385', 1], 
	['ECE342', 1], 
	['ECE350', 1],
	['ENVS431', 1],
	['GEOG371', 1],
	['GEOG379', 1], 
	['GEOG380', 1],
	['GEOL107', 1], 
	['GEOL143', 1], 
	['GEOL208', 1], 
	['GEOL380', 1], 
	['GEOL401', 1], 
	['GEOL411', 1], 
	['GEOL417', 1], 
	['GEOL432', 1], 
	['GEOL436', 1], 
	['GEOL440', 1], 
	['GEOL450', 1], 
	['GEOL452', 1], 
	['GEOL470', 1], 
	['GEOL477', 1], 
	['GEOL460', 1],
	['IB103', 1], 
	['IB104', 1], 
	['IB202', 1], 
	['IB203', 1], 
	['IB204', 1], 
	['IB302', 1], 
	['IB485', 1],
	['IE310', 1], 
	['IE360', 1], 
	['IE361', 1], 
	['IE370', 1], 
	['IE400', 1], 
	['IE413', 1],
	['MATH347', 1], 
	['MATH348', 1], 
	['MATH408', 1], 
	['MATH417', 1], 
	['MATH427', 1], 
	['MATH424', 1], 
	['MATH444', 1], 
	['MATH447', 1],
	['MATH461', 1], 
	['MATH409', 1], 
	['MATH469', 1],
	['MCB254', 1], 
	['ME170', 1], 
	['ME200', 1], 
	['ME270', 1],
	['ME310', 1], 
	['ME320', 1], 
	['ME330', 1], 
	['ME340', 1], 
	['ME360', 1], 
	['ME370', 1], 
	['ME371', 1], 
	['ME470', 1],
	['MSE182', 1], 
	['MSE183', 1], 
	['MSE201', 1], 
	['MSE206', 1],  
	['MSE280', 1], 
	['MSE304', 1], 
	['MSE307', 1], 
	['MSE308', 1], 
	['MSE395', 1], 
	['MSE401', 1], 
	['MSE402', 1], 
	['MSE404', 1], 
	['MSE405', 1], 
	['MSE406', 1],
	['MSE470', 1],
	['NPRE100', 1], 
	['NPRE247', 1], 
	['NPRE431', 1], 
	['NPRE441', 1], 
	['NPRE446', 1], 
	['NPRE447', 1], 
	['NPRE448', 1], 
	['NPRE451', 1], 
	['NPRE455', 1], 
	['NPRE458', 1],
	['PHYS101', 1], 
	['PHYS102', 1], 
	['PHYS325', 1], 
	['PHYS326', 1], 
	['PHYS401', 1], 
	['PHYS402', 1], 
	['PHYS403', 1], 
	['PHYS404', 1], 
	['PHYS406', 1],
	['PHYS427', 1], 
	['PHYS435', 1], 
	['PHYS486', 1], 
	['PHYS485', 1], 
	['PHYS487', 1],
	['PLPA204', 1],
	['SE100', 1], 
	['SE101', 1], 
	['SE261', 1], 
	['SE310', 1], 
	['SE311', 1], 
	['SE312', 1], 
	['SE320', 1], 
	['SE424', 1], 
	['SE494', 1], 
	['SE495', 1],
	['STAT200', 1], 
	['STAT410', 1], 
	['STAT420', 1], 
	['STAT425', 1], 
	['STAT424', 1], 
	['STAT426', 1], 
	['STAT427', 1], 
	['STAT428', 1], 
	['STAT429', 1], 
	['STAT430', 1], 
	['STAT440', 1], 
	['STAT443', 1], 
	['STAT448', 1], 
	['STAT480', 1],
	['TAM195', 1], 
	['TAM302', 1], 
	['TAM324', 1], 
	['TAM335', 1], 
	['TAM412', 1], 
	['TAM445', 1], 
	['TAM470', 1],
	['TRST415', 1]]);

const readline = require('readline')
var classes;
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('enter the classes please as comma seperated list: ', (answer)=>{
	classes = answer;
	let slector = toApprove(classes);
	if(slector){
		console.log('\x1b[32m',"This major has been approved",'\x1b[0m');
	}else {
		console.log('\x1b[31m','This major is not approved.','\x1b[0m');
	}
		rl.close();
});

/*
let slector = toApprove(classes);
if(slector){
	console.log("This major has been approved");
}else {
	console.log('This major is not approved.');
} */

function toApprove(classes) {
	let classArray = classes.split(',');
	let total = 0;
	for(let i = 0; i < classArray.length; i++){
		if(CORE.has(classArray[i])){
			total = total + CORE.get(classArray[i]);
		}
		else if (SPECIFIC.has(classArray[i])){
			total = total + SPECIFIC.get(classArray[i]);
		}
		else{
			total = total + TECHELECT;
		}
	}
	console.log('Total points: ', total);
	if(total >= MINIMUM){
		return true;
	}else {
		return false;
	}
}