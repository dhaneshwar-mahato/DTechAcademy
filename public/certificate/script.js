async function loadStudents() {
    try {

        const response = await fetch("students.json");

        if (!response.ok) {
            throw new Error("Unable to load students data.");
        }

        return await response.json();

    } catch (error) {

        console.error(error);

        alert("Failed to load students.json");

        return [];
    }
}

function getCertificateNumber() {

    const params = new URLSearchParams(window.location.search);

    return params.get("cert");
}

function findStudent(students, certNo) {

    return students.find(student =>

        student.certificateNo === certNo

    );
}

function populateCertificate(student) {

    document.getElementById("studentName")
        .textContent = student.name;

    document.getElementById("courseName")
        .textContent = student.course;

    document.getElementById("certificateNo")
        .textContent = student.certificateNo;

    document.getElementById("duration")
        .textContent =
            student.startDate +
            " - " +
            student.endDate;

    document.getElementById("issueDate")
        .textContent = student.issueDate;
    
    document.getElementById("projectName").textContent = '' + student.projectName + '';

    // Agar grade element hai tabhi populate karo
    const gradeElement = document.getElementById("grade");

    if (gradeElement) {
        gradeElement.textContent = student.grade;
    }
}

function generateQRCode(student) {

    // alert("generateQRCode() called");

    const qrDiv = document.getElementById("qrcode");

    if (!qrDiv) {
        console.error("QR container not found");
        return;
    }

    // Existing QR remove karo
    qrDiv.innerHTML = "";

    // Sirf testing ke liye student name use kar rahe hain
    // const qrText = `
    //                 DTECHACADEMY Certificate Verification

    //                 Student Name: ${student.name}
    //                 Course: ${student.course}
    //                 Certificate No: ${student.certificateNo}
    //                 Duration: ${student.startDate} - ${student.endDate}
    //                 Issue Date: ${student.issueDate}
    //                 MSME Registration: UDYAM-JH-22-0026861
    //                 `.trim();
    
    const qrText =
    `https://dtechacademy.in/certificate/verify.html?cert=${student.certificateNo}`;

    console.log("Generating QR for:", qrText);

    new QRCode(qrDiv, {
        text: qrText,
        width: 100,
        height: 100
    });
}

async function init() {

    const students = await loadStudents();

    if (students.length === 0) {
        return;
    }

    const certNo = getCertificateNumber();

    let student;

    if (certNo) {

        student = findStudent(students, certNo);

    } else {

        student = students[0];
    }

    console.log("Selected Student:", student);

    if (student) {

        populateCertificate(student);

        generateQRCode(student);

    } else {

        alert("Certificate not found");
    }
}

init();