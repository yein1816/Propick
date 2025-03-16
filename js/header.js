// window.addEventListener("load", function () {
//   fetch("./mainHeader.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("header").innerHTML = data;

//       const navibar = document.querySelector(".menu_icon");
//       const menu = document.querySelector(".menu");
//       const modalBackground = document.querySelector(".background");

//       if (navibar && menu && modalBackground) {
//         navibar.addEventListener("click", function () {
//           menu.classList.toggle("open");
//           navibar.classList.toggle("active");
//           modalBackground.classList.toggle("active");
//         });

//         // 백그라운드 클릭 시 메뉴 닫기
//         modalBackground.addEventListener("click", function () {
//           menu.classList.remove("open");
//           navibar.classList.remove("active");
//           modalBackground.classList.remove("active");
//         });
//       }
//     })
//     .catch((error) => console.error("헤더를 불러오는 중 오류 발생:", error));
// });

// window.addEventListener("load", function () {
//   fetch("./mainHeader.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("header").innerHTML = data;
//       addMenuEventListeners(); // 이벤트 등록
//     })
//     .catch((error) => console.error("헤더를 불러오는 중 오류 발생:", error));

//   // 요소가 동적으로 추가될 때 감지
//   const observer = new MutationObserver(() => {
//     if (document.querySelector(".menu_icon")) {
//       addMenuEventListeners(); // 이벤트 등록
//       observer.disconnect(); // 한 번 실행 후 감지 중지
//     }
//   });

//   observer.observe(document.body, { childList: true, subtree: true });

//   function addMenuEventListeners() {
//     const navibar = document.querySelector(".menu_icon");
//     const menu = document.querySelector(".menu");
//     const modalBackground = document.querySelector(".background");

//     if (navibar && menu && modalBackground) {
//       navibar.addEventListener("click", function () {
//         menu.classList.toggle("open");
//         navibar.classList.toggle("active");
//         modalBackground.classList.toggle("active");
//       });

//       modalBackground.addEventListener("click", function () {
//         menu.classList.remove("open");
//         navibar.classList.remove("active");
//         modalBackground.classList.remove("active");
//       });
//     }
//   }
// });

window.addEventListener("DOMContentLoaded", function () {
  fetch("/Propick/mainHeader.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      console.log("✅ 불러온 헤더 내용:", data); // 👉 정상적으로 가져오는지 확인
      document.getElementById("header").innerHTML = data;

      // ✅ DOM 업데이트 후 실행되도록 setTimeout 사용
      setTimeout(() => {
        addMenuEventListeners();
      }, 0);
    })
    .catch((error) => console.error("❌ 헤더를 불러오는 중 오류 발생:", error));
});

function addMenuEventListeners() {
  const navibar = document.querySelector(".menu_icon");
  const menu = document.querySelector(".menu");
  const modalBackground = document.querySelector(".background");

  console.log("📌 찾은 요소들:", { navibar, menu, modalBackground }); // 👉 요소들이 존재하는지 확인

  if (navibar && menu && modalBackground) {
    navibar.addEventListener("click", function () {
      menu.classList.toggle("open");
      navibar.classList.toggle("active");
      modalBackground.classList.toggle("active");
    });

    modalBackground.addEventListener("click", function () {
      menu.classList.remove("open");
      navibar.classList.remove("active");
      modalBackground.classList.remove("active");
    });

    console.log("✅ 이벤트 리스너가 정상적으로 등록됨");
  } else {
    console.error("❌ 메뉴 관련 요소를 찾을 수 없음. HTML 구조 확인 필요.");
  }
}

// 메뉴 아이콘 클릭 시 메뉴 열기/닫기
document.querySelector(".menu_icon").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".menu").classList.toggle("open");
});


