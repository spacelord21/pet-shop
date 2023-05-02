const months: { [key: string]: string } = {
  января: "01",
  февраля: "02",
  марта: "03",
  апреля: "04",
  мая: "05",
  июня: "06",
  июля: "07",
  августа: "08",
  сентября: "09",
  октября: "10",
  ноября: "11",
  декабря: "12",
};

export const toDate = (date: string): number => {
  const dateArray = date.replace(" г.", "").split(" ");
  const month = months[dateArray[1]];
  return Date.parse([month, dateArray[0], dateArray[2]].join(" "));
};
