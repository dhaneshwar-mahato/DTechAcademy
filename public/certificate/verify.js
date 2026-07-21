async function loadStudents() {

    try {

        const response = await fetch("students.json");

        if (!response.ok) {
            throw new Error("Unable to load data");
        }

        return await response.json();

    }

    catch (error) {

        console.error(error);

        return [];

    }

}

function getCertificateNumber() {

    const params = new URLSearchParams(window.location.search);

    return params.get("cert");

}

async function verifyCertificate() {

    const students = await loadStudents();

    const certNo = getCertificateNumber();

    const student = students.find(

        s => s.certificateNo === certNo

    );

    const status = document.getElementById("status");

    const card = document.getElementById("certificateCard");

    if (student) {

        status.innerHTML =

            `<div class="success">
                ✅ Certificate Verified Successfully
            </div>`;

        card.style.display = "block";

        document.getElementById("studentName").textContent = student.name;

        document.getElementById("courseName").textContent = student.course;

        document.getElementById("certificateNo").textContent = student.certificateNo;

        document.getElementById("duration").textContent =
            `${student.startDate} - ${student.endDate}`;

        document.getElementById("issueDate").textContent =
            student.issueDate;

        document.getElementById("grade").textContent =
            student.grade;

        document.getElementById("projectName").textContent = '' + student.projectName + '';

    }

    else {

        status.innerHTML =

            `<div class="error">
                ❌ Invalid Certificate Number
            </div>`;

        card.style.display = "none";

    }

}

verifyCertificate();