const btn = document.createElement("button");
btn.textContent = "🔼닫기";
document.body.append(btn);

btn.addEventListener("click", (evt) => {
	const subject = document.getElementById("subject");
	// alert("Btn clicked");
	if (subject.classList.contains("show")) {
		subject.classList.remove("show");
		subject.classList.add("hide");
		btn.textContent = "🔽열기";
		console.log(subject.classList);
	} else {
		subject.classList.add("show");
		subject.classList.remove("hide");
		btn.textContent = "🔼닫기";
		console.log(subject.classList);
	}
});
// const div = document.createElement("div");
// div.innerText = "";
// div.style.backgroundColor = "red";
// div.style.color = "white";
// document.body.append(div);
// function showSubject(ele) {
// 	ele.innerText = ele.innerText.toUpperCase();
// }
// const js = document.getElementById("js");
// js.addEventListener("click", (evt) => {
// 	div.innerText += "Javascript";
// });
// const ts = document.getElementById("ts");
// ts.addEventListener("click", (evt) => {
// 	div.innerText += "Typescript";
// });
// const rct = document.getElementById("rct");
// rct.addEventListener("click", (evt) => {
// 	div.innerText += "React";
// });
// const nxt = document.getElementById("nxt");
// rct.addEventListener("click", (evt) => {
// 	div.innerText += "React";
// });

const lis = document.querySelectorAll("ul.subjects li");

const selectedDiv = document.querySelector(".selected");

const setSelectedSubjects = () => {
	const selectedSubject = [...lis].filter((li) => li.classList.contains("active")).map((li) => li.textContent);
	console.log("🚀  selectedSubject:", selectedSubject);
	if (selectedSubject?.length) {
		selectedDiv.innerHTML = selectedSubject.join("<br>");
		selectedDiv.classList.remove("hide");
		selectedDiv.classList.add("show");
	}
};

const selectSubject = (evt) => {
	const li = evt.currentTarget;
	console.log("🚀  li:", li);
	li.classList.toggle("active");

	setSelectedSubjects();
};
lis.forEach((li) => li.addEventListener("click", selectSubject));
