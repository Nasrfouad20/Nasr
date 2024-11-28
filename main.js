// الحصول على عناصر الصفحة
const popup = document.getElementById("popup");
const form = document.getElementById("registerForm");
const usernameInput = document.getElementById("username");
const statusMessage = document.getElementById("statusMessage");

// إظهار الـPopup عند تحميل الصفحة
window.onload = function () {
  popup.style.display = "flex";
};

// تحديث الرسالة عند كتابة المستخدم في حقل "اسم المستخدم"
usernameInput.addEventListener("input", function () {
  if (usernameInput.value.trim() !== "") {
    statusMessage.textContent = `دخلت + ${usernameInput.value} + متصل الآن`;
  } else {
    statusMessage.textContent = "لم تسجل بعد.";
  }
});

// إخفاء الـPopup عند إرسال النموذج
form.addEventListener("submit", function (e) {
  e.preventDefault(); // منع إعادة تحميل الصفحة
  alert("شكراً لتسجيلك!");
  popup.style.display = "none";
});
const statusIcon = document.getElementById("statusIcon");

// تحديث الحالة عند كتابة اسم المستخدم
document.getElementById("username").addEventListener("input", function () {
  const username = this.value.trim();
  if (username !== "") {
    statusIcon.querySelector("span").textContent = `${username} متصل الآن`;
  } else {
    statusIcon.querySelector("span").textContent = "غير متصل";
  }
});
const statusCircle = statusIcon.querySelector(".status-circle");

document.getElementById("username").addEventListener("input", function () {
  if (this.value.trim() !== "") {
    statusCircle.style.backgroundColor = "green"; // لون متصل
  } else {
    statusCircle.style.backgroundColor = "red"; // لون غير متصل
  }
});
