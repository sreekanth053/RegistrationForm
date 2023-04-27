let myFormEl = document.getElementById("myForm");
let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let fatherNameEl = document.getElementById("fatherName");
let fatherNameErrMsgEl = document.getElementById("fatherNameErrMsg");
let motherNameEl = document.getElementById("motherName");
let motherNameErrMsgEl = document.getElementById("motherNameErrMsg");
let nationalityEl = document.getElementById("nationality");
let nationalityErrMsgEl = document.getElementById("nationalityErrMsg");
let addressEl = document.getElementById("address");
let streetErrMsgEl = document.getElementById("streetErrMsg");
let cityEl = document.getElementById("city");
let cityErrMsgEl = document.getElementById("cityErrMsg");
let telephoneHomeEl = document.getElementById("telephoneHome");
let telephoneMobileEl = document.getElementById("telephoneMobile");
let mobileErrMsgEl = document.getElementById("mobileErrMsg");
let hscInstitutionNameEl = document.getElementById("hscInstitutionName");
let hscInstitutionNameErrMsgEl = document.getElementById("hscInstitutionNameErrMsg");
let hscBoardEl = document.getElementById("hscBoard");
let hscBoardErrMsgEl = document.getElementById("hscBoardErrMsg");
let hscScoreEl = document.getElementById("hscScore");
let hscPercentageErrMsgEl = document.getElementById("hscPercentageErrMsg");

let sscInstitutionNameEl = document.getElementById("sscInstitutionName");
let sscInstitutionNameErrMsgEl = document.getElementById("sscInstitutionNameErrMsg");
let sscBoardEl = document.getElementById("sscBoard");
let sscBoardErrMsgEl = document.getElementById("sscBoardErrMsg");
let sscScoreEl = document.getElementById("sscScore");
let sscPercentageErrMsgEl = document.getElementById("sscPercentageErrMsg");

let currentlyPursuingEl = document.getElementById("currentlyPursuing");
let currentlyPursuingErrMsgEl = document.getElementById("currentlyPursuingErrMsg");

let currentInstitutionNameEl = document.getElementById("currentInstitutionName");
let currentInstitutionNameErrMsgEl = document.getElementById("currentInstitutionNameErrMsg");

let overallPercentageEl = document.getElementById("overallPercentage");
let overallPercentageErrMsgEl = document.getElementById("overallPercentageErrMsg");
let currentBacklogsEl = document.getElementById("currentBacklogs");
let genderEl = document.getElementById("gender");
let femaleEl = document.getElementById("female");
let dobEl = document.getElementById("dob");
let countryEl = document.getElementById("country");
let browserFileEl = document.getElementById("browserFile");
let uploadFile2El = document.getElementById("uploadFile2");
let uploadFile3El = document.getElementById("uploadFile2");


myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();

    function store() {
        let name = nameEl.value;
        let email = emailEl.value;
        let fatherName = fatherNameEl.value;
        let motherName = motherNameEl.vlaue;
        let nationality = nationalityEl.value;
        let address = addressEl.vlaue;
        let city = cityEl.value;
        let telephoneMobile = telephoneMobileEl.value;
        let hscInstitutionName = hscInstitutionNameEl.value;
        let hscScore = hscScoreEl.value;
        let sscInstitutionName = sscInstitutionNameEl.value;
        let sscBoard = sscBoardEl.value;
        let sscScore = sscScoreEl.value;
        let currentlyPursuing = currentlyPursuingEl.value;
        let currentInstitutionName = currentInstitutionNameEl.value;
        let overallPercentage = overallPercentageEl.value;
        let telephoneHome = telephoneHomeEl.value;
        let currentBacklogs = currentBacklogsEl.value;
        let gender = genderEl.value;
        let female = femaleEl.value;
        let dob = dobEl.vale;
        let country = countryEl.value;
        let browserFile = browserFileEl.value;
        let uploadFile2 = uploadFile2El.value;
        let uploadFile3 = uploadFile3El.value;

        const person = {
            name: name,
            email: email,
            fatherName: fatherName,
            motherName: motherName,
            nationality: nationality,
            address: address,
            city: city,
            telephoneMobile: telephoneMobile,
            hscInstitutionName: hscInstitutionName,
            hscScore: hscScore,
            sscInstitutionName: sscInstitutionName,
            sscBoard: sscBoard,
            sscScore: sscScore,
            currentlyPursuing: currentlyPursuing,
            currentInstitutionName: currentInstitutionName,
            overallPercentage: overallPercentage,
            telephoneHome: telephoneHome,
            currentBacklogs: currentBacklogs,
            gender: gender,
            female: female,
            dob: dob,
            country: country,
            browserFile: browserFile,
            uploadFile2: uploadFile2,
            uploadFile3: uploadFile3,
        };
        localStorage.setItem(key, JSON.stringify(person));

    }
    store();
});

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
});

fatherNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        fatherNameErrMsgEl.textContent = "Required*";
    } else {
        fatherNameErrMsgEl.textContent = "";
    }
});

motherNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        motherNameErrMsgEl.textContent = "Required*";
    } else {
        motherNameErrMsgEl.textContent = "";
    }
});

nationalityEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nationalityErrMsgEl.textContent = "Required*";
    } else {
        nationalityErrMsgEl.textContent = "";
    }
});

addressEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        streetErrMsgEl.textContent = "Required*";
    } else {
        streetErrMsgEl.textContent = "";
    }
});

cityEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        cityErrMsgEl.textContent = "Required*";
    } else {
        cityErrMsgEl.textContent = "";
    }
});

telephoneMobileEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        mobileErrMsgEl.textContent = "Required*";
    } else {
        mobileErrMsgEl.textContent = "";
    }
});

hscInstitutionNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        hscInstitutionNameErrMsgEl.textContent = "Required*";
    } else {
        hscInstitutionNameErrMsgEl.textContent = "";
    }
});

hscBoardEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        hscBoardErrMsgEl.textContent = "Required*";
    } else {
        hscBoardErrMsgEl.textContent = "";
    }
});

hscScoreEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        hscPercentageErrMsgEl.textContent = "Required*";
    } else {
        hscPercentageErrMsgEl.textContent = "";
    }
});

sscInstitutionNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        sscInstitutionNameErrMsgEl.textContent = "Required*";
    } else {
        sscInstitutionNameErrMsgEl.textContent = "";
    }
});

sscBoardEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        sscBoardErrMsgEl.textContent = "Required*";
    } else {
        sscBoardErrMsgEl.textContent = "";
    }
});

sscScoreEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        sscPercentageErrMsgEl.textContent = "Required*";
    } else {
        sscPercentageErrMsgEl.textContent = "";
    }
});

currentlyPursuingEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        currentlyPursuingErrMsgEl.textContent = "Required*";
    } else {
        currentlyPursuingErrMsgEl.textContent = "";
    }
});

overallPercentageEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        overallPercentageErrMsgEl.textContent = "Required*";
    } else {
        overallPercentageErrMsgEl.textContent = "";
    }
});

currentInstitutionNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        currentInstitutionNameErrMsgEl.textContent = "Required*";
    } else {
        currentInstitutionNameErrMsgEl.textContent = "";
    }
});