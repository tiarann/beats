const findBlockByAlias = (alias) => {
  return $(".review__item").filter((ndx, item) => {
    return $(item).attr("data-linked-with") == alias;
  });
};

$(".review__switch-icon").click(e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-open");
  const itemToShow = findBlockByAlias(target);
  const curItem = $this.closest(".review__switch-item");

  itemToShow.addClass("active").siblings().removeClass("active");
  curItem.addClass("active").siblings().removeClass("active");
})