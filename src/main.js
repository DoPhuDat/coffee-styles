const topMenu = document.getElementById("cf-top-menu");
const toggleTopMenu = document.getElementById("cf-toggle-top-menu");

topMenu.addEventListener("click", (e) => {
  // Tìm phần tử `li` gần nhất chứa class `cf-top-menu-item`
  const menuItem = e.target.closest(".cf-top-menu-item");

  if (e.target) {
    // Xóa class active khỏi tất cả menu items
    document.querySelectorAll(".cf-top-menu-item-active").forEach((item) => {
      item.classList.remove("cf-top-menu-item-active");
    });

    // Thêm class active vào mục được nhấn
    menuItem.classList.add("cf-top-menu-item-active");
  }
});

toggleTopMenu.addEventListener("click", () => {
  topMenu.classList.toggle("cf-topmenu-expend");
  topMenu.classList.toggle("hidden");
});

// Ẩn menu khi click ra ngoài
document.addEventListener("click", (e) => {
  if (!toggleTopMenu.contains(e.target) && !topMenu.contains(e.target)) {
    topMenu.classList.remove("cf-topmenu-expend");
    topMenu.classList.add("hidden");
  }
});
