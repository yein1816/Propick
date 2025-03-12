// 건강고민 챕터 1
const healthChoice = document.querySelectorAll(
  "#concern_page1 .select_health_list"
);

healthChoice.forEach((li) => {
  li.addEventListener("click", () => {
    let selectItems = document.querySelectorAll(".select");

    // 3개까지 선택한 li 스타일, 클릭한 대상 다시 클릭하면 해제
    if (li.classList.contains("select")) {
      li.classList.remove("select");
    } else if (selectItems.length < 3) {
      li.classList.add("select");
    }

    // 3개 선택 시 선택되지 않은 항목을 회색으로 바꾸기
    if (document.querySelectorAll(".select").length === 3) {
      healthChoice.forEach((item) => {
        // 선택되지 않은 항목을 회색으로
        if (!item.classList.contains("select")) {
          item.classList.add("not_select");
        }
      });
    } else {
      // 선택된 항목이 3개가 아닐 때 회색 제거
      healthChoice.forEach((item) => {
        item.classList.remove("not_select");
      });
    }
    // 경고창 이후 항목 하나라도 클릭 시 경고창 제거
    if (document.querySelectorAll(".select").length > 0) {
      warningMessage.classList.remove("show");
    }
  });
});

const nextBtn = document.querySelector(".next_wrap");
const warningMessage = document.querySelector(".warning_message");
const warning1 = document.getElementById("warning1");
const warning2 = document.getElementById("warning2");

// 선택이 안되어 있는데 다음 버튼 눌렀을 시  알람 창 보여주기
// 건강고민 챕터 2
// 다음 버튼 클릭 시 다음 화면 보여줌
nextBtn.addEventListener("click", () => {
  if (document.querySelectorAll(".select").length === 0) {
    warningMessage.classList.add("show");
    warning1.style.display = "block";
  } else {
    // 경고창 제거 되었을 때 페이지 이동
    warningMessage.classList.remove("show");
    document.getElementById("concern_page1").classList.remove("active");
    document.getElementById("concern_page2").classList.add("active");
  }
});

// 건강고민 챕터 2 - li 항목 선택 기능 추가
const healthChoice2 = document.querySelectorAll(
  "#concern_page2 .select_health_list"
);
const warningMessage2 = document.querySelector(".warning_message");
const nextBtn2 = document.querySelector("#concern_page2 .next_wrap");


healthChoice2.forEach((li) => {
  li.addEventListener("click", () => {
    let selectItems = document.querySelectorAll("#concern_page2 .select");

    // 항목 선택/해제
    if (li.classList.contains("select")) {
      li.classList.remove("select");
    } else if (selectItems.length < 4) {
      li.classList.add("select");
    }

    // 선택된 항목이 있으면 경고창 제거
    if (document.querySelectorAll("#concern_page2 .select").length >= 1) {
      warningMessage2.classList.remove("show");
    }
  });
});

// page2 -> page3 "다음" 버튼 클릭 시 동작
nextBtn2.addEventListener("click", () => {
  const selectedItems = document.querySelectorAll("#concern_page2 .select");

  if (selectedItems.length === 0) {
    // 선택이 없으면 경고창 보이기
    warningMessage2.classList.add("show");
    warning2.style.display = "block";
    warning1.style.display = "none";
  } else {
    // 선택이 있으면 다음 페이지로 넘어가기
    document.getElementById("concern_page2").classList.remove("active");
    document.getElementById("concern_page3").classList.add("active");
  }
});

// 상단 이전 누르면 이전 페이지 돌아가기
const beforeBtn = document.querySelector("#concern_page2 .before_page");
const beforeBtn2 = document.querySelector("#concern_page3 .before_page");

beforeBtn.addEventListener("click", () => {
  console.log("페이지 전으로 이동");

  document.getElementById("concern_page1").classList.add("active");
  document.getElementById("concern_page2").classList.remove("active");
});

beforeBtn2.addEventListener("click", () => {
  console.log("페이지 전으로 이동");

  document.getElementById("concern_page2").classList.add("active");
  document.getElementById("concern_page3").classList.remove("active");
});
$('.slick').slick();