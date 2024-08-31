const institutes = {
    '601' : "A. Y. Dadabhai Technical Institute, Surat",
    '602' : "A. V. Parekh Technical Institute, Rajkot",
    '604' : "Bhailalbhai & Bhikhabhai Institute of Technology, Anand",
    '606' : "Butler Polytechnic, Vadodara",
    '609' : "C.U. Shah Polytechnic, Surendranagar",
    '610' : "Christ Polytechnic Institute, Rajkot",
    '611' : "Dr. Jivraj N. Mehta Government Polytechnic, Amreli",
    '612' : "Dr. S & S.S. Ghandhy College of Enginggring & Technology, Surat",
    '613' : "Excel Institute of Diploma Studies, Gandhinagar",
    '614' : "Government Polytechnic for Girls, Ahmedabad",
    '615' : "Government Polytechnic for Girls, Surat",
    '616' : "Government Polytechnic Waghai, Dang",
    '617' : "Government Polytechnic, Ahmedabad",
    '618' : "Government Polytechnic, Godhra",
    '619' : "Government Polytechnic, Junagadh",
    '620' : "Government Polytechnic, Rajkot",
    '621' : "Government Polytechnic, Bhuj",
    '622' : "Government Polytechnic, Chhota Udaipur",
    '623' : "Government Polytechnic, Gandhinagar",
    '624' : "Government Polytechnic, Himmatnagar",
    '625' : "Government Polytechnic, Jamnagar",
    '626' : "Government Polytechnic, Palanpur",
    '627' : "Government Polytechnic, Porbandar",
    '628' : "Government Polytechnic, Mehsana",
    '629' : "Government Polytechnic, Valsad",
    '630' : "Government Polytechnic, Dahod",
    '631' : "Kilachand Devchand Polytechnic, Patan",
    '634' : "Lukhdhirji Engineering College, Rajkot",
    '635' : "M. L. Institute of Diploma Studies, Mehsana",
    '637' : "N. G. Patel Polytechnic, Surat",
    '640' : "R. C. Technical Institute, Ahmedabad",
    '641' : "R. H Patel Institute of Technology, Kheda",
    '642' : "RMS Polytechnic, Vadodara",
    '645' : "Shri K.J. Polytechnic, Bharuch",
    '646' : "Shree N M Gopani Polytechnic Institute, Ahmedabad",
    '647' : "Tapi Diploma Engineering College, Surat",
    '648' : "Sigma Institute Of Engineering, Vadodara",
    '649' : "Sir Bhavsinhji Polytechnic Institute, Bhavnagar",
    '651' : "T. F. Gandhidham Polytechnic, Kutch",
    '654' : "VPMP Polytechnic, Gandhinagar",
    '658' : "Government Polytechnic, Daman",
    '659' : "Dr. B. B. A. Government Polytechnic, Dadra Nagar Haveli",
    '665' : "Om Institute of Engineering and Technology, Junagadh",
    '666' : "S. B. Polytechnic, Vadodara",
    '667' : "Dalia Institute of Diploma Studies, Kheda",
    '668' : "Merchant Institute of Diploma Studies, Mehsana",
    '672' : "Sanjaybhai Rajguru College of Diploma Engineering, Rajkot",
    '678' : "Balasinor College of Polytechnic, Mahisagar",
    '679' : "N. R. Vekaria Institute Of Technology, Junagadh",
    '680' : "Arpit Institute of Engineering and Technology, Morbi",
    '682' : "D. A. Diploma Engineering and Technolgoy, Mahemdavad",
    '683' : "Image Engineering & Technical Institute, Kheda",
    '685' : "Amrut Institute, Junagadh",
    '686' : "Jayvantrai Harrai Desai Polytechnic, Surat",
    '690' : "Shri Satsangi Saketdham 'Ram Ashram' Group of Institutions, Mehsana",
    '691' : "Laxmi Institute of Technology, Valsad",
    '693' : "S. P. B. Patel Engineering College, Mehsana",
    '697' : "Veerayatan Institute of Engineering, Kutch",
    '699' : "Arun Muchhala Engineering College, Amreli",
    '951' : "Ipcowala Institute of Engineering and Technology, Anand",
    '954' : "Shri Labhubhai Trivedi Institute of Engineering and Technology, Rajkot",
    '957' : "K.J. Institute of Engineering and Technology, Vadodara",
    '958' : "Engineering College, Panchmahal",
    '959' : "Neotech Faculty of Diploma Engineering, Vadodara",
    '963' : "Vidhyadeep Institute of Engineering and Technology, Surat",
    '965' : "Shankersinh Vaghela Bapu Technical Campus, Gandhinagar",
    '970' : "Radhe Institute of Engineering and Technology, Rajkot",
    '972' : "Government Polytechnic, Kheda",
    '973' : "Government Polytechnic, Bharuch",
    '974' : "Government Polytechnic, Surat",
    '975' : "Government Polytechnic, Navsari",
    '976' : "Pacific School of Engineering, Surat",
    '978' : "Asiatic Institute of Science and Technology, Rajkot",
    '983' : "Kalyan Polytechnic, Jamnagar",
    '984' : "Dr. Natubhai P. Patel Polytechnic, Mehsana",
    '985' : "Bhavnagar Polytechnic Institute, Bhavnagar",
    '986' : "Shree Swaminarayan Polytechnic, Gandhinagar",
    '988' : "Government Polytechnic, Diu",
    '989' : "Krishna Institute of Engineering and Technology, Jamnagar",
    '990' : "Veerayatan Polytechnic, Kutch",
    '991' : "Kankeshwaridevi Institute of Technology, Jamnagar",
    '992' : "GMB Polytechnic, Amreli",
    '993' : "Prime College of Diploma, Navsari",
    '998' : "Government Polytechnic, Panchmahal",
    '451' : "Sal Institute of Diploma Studies, Ahmedabad",
    '452' : "Gyanmanjari Diploma Engineering College, Bhavnagar",
    '455' : "Apollo Institute of Engneering and Technology, Ahmedabad",
    '458' : "B. H. Gardi College of Engineering and Technology, Rajkot",
    '459' : "S. S. Agrawal Institute of Engineering and Technology, Surat",
    '460' : "Gujarat Power Engineering and Research Institute, Mehsana",
    '901' : "Dr. V. R. Godhania College of Engineering and Technology, Porbandar",
    '981' : "Shree Dhanvantary College of Engineering and Technology, Surat",
    '656' : "Bhulabhai Vanmalibhai Patel Institute of Technology, Surat",
    '960' : "Navsarjan School of Technology, Gandhinagar",
    '677' : "Shree Hari Polytechnic Institute, Mehsana",
    '681' : "Smt. R. S. Patel Institute of Diploma Engineering, Patan",
    '968' : "HJD Institute of Technical Education and Research, Kutch",
    '969' : "Asian Institute of Technology, Sabarkantha",
    '655' : "Vallabh Budhi Polytechnic, Navsari",
    '675' : "F. D. Mubin Institute of Engineering and Technology, Gandhinagar",
    '687' : "Navsarjan Polytechnic, Mehsana",
    '457' : "Dr. Jivraj Mehta Polytechnic, Anand",
    '663' : "Noble Star Diploma Engineering College, Junagadh",
    '676' : "H. B. Patel Institute of Diploma Engineering and Technology, Panchmahal",
    '689' : "Tatva Institute of Technological Studies, Aravalli",
    '971' : "Shree Vasudevbhai And Kantibhai Patel Institute of Engineering, Mehsana",
    '688' : "Valia Polytechnic College, Bharuch",
    '684' : "Grow More Foundation's Group of Institutions, Sabarkantha",
    '664' : "Atul Polytechnic, Gandhinagar",
    '694' : "Alpha College of Engineering and Technology, Gandhinagar",
    '696' : "Arrdekta Institute of Technology, Sabarkantha",
    '994' : "Dadhichi Diploma Polytechnic College, Junagadh",
    '632' : "Swami Krishnajivandasji Institute of Technology, Ahmedabad",
    '698' : "Shri J. M. Sabva Institute of Engineering and Technology, Botad"
}

const branches = {
    '06' : "Civil Engineering",
    '19' : "Mechanical Engineering",
    '09' : "Electrical Engineering",
    '07' : "Computer Engineering",
    '03' : "Bio-Medical Engineering",
    '11' : "Electronics and Communication Engineering",
    '17' : "Instrumentation and Control Engineering",
    '51' : "Computer Aided Costume Design and Dress Making",
    '32' : "Information and Communication Technology",
    '64' : "Renewable Energy",
    '16' : "Information Technology",
    '20' : "Mechatronics Engineering",
    '02' : "Automobile Engineering",
    '21' : "Metallurgy Engineering",
    '24' : "Power Electronics",
    '31' : "Computer Science and En8gineering",
    '29' : "Textile Manufacturing Technology",
    '28' : "Textile Processing Technology",
    '41' : "Automation and Robotics",
    '22' : "Mining Engineering",
    '13' : "Environmental Engineering",
    '23' : "Plastic Engineering",
    '52' : "Ceramic Technology",
    '55' : "Fabrication Technology",
    '58' : "Printing Technology",
    '65' : "Mechanical Engineering (CAD/CAM)"
}

const getYear = (year) => {
    if(year >= '00' && year <= '30') {
        return (`20${year}`)
    }

    else if(year > '00') {
        return (`19${year}`)
    }
}

const showDetails = () => {

    let enrollNo = document.getElementById('enrollNo').value
    let detailsDiv = document.getElementById('detailsContainer')    

    if(enrollNo.length !== 12) {
        alert("Invalid Enrollment Number. Please enter a 12-digit number.")
        return 0
    }

    let year = enrollNo.slice(0, 2)
    let instituteCode = enrollNo.slice(2, 5)
    let branchCode = enrollNo.slice(7, 9)
    let rollNo = enrollNo.slice(9, 12)


    let instituteName = institutes[instituteCode]
    let branchName = branches[branchCode]
    let admissionYear = getYear(year)

    detailsDiv.innerHTML = `<h1>College/Institute Name</h1> <p>${instituteName}</p>
    
                            <h1>Branch</h1> <p>${branchName}</p>
                            
                            <h1>Admission Year</h1> <p>${admissionYear}</p>
                            
                            <h1>Roll No.</h1> <p>${rollNo}</p>`

}

let btn = document.getElementById('btn')

btn.onclick = () => {
    showDetails()
}