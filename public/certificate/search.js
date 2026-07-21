async function searchCertificate() {

    const keyword = document
        .getElementById("search")
        .value
        .trim()
        .toLowerCase();

    if(keyword===""){

        alert("Please enter Name or Certificate Number");

        return;

    }

    try{

        const response = await fetch("students.json");

        const students = await response.json();

        const student = students.find(s=>

            s.name.toLowerCase()===keyword ||

            s.certificateNo.toLowerCase()===keyword

        );

        if(student){

            window.location.href =
            `index.html?cert=${student.certificateNo}`;

        }

        else{

            document.getElementById("result").innerHTML=
            "Certificate Not Found";

        }

    }

    catch(error){

        console.error(error);

        alert("Unable to load data.");

    }

}