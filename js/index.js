const students = [
	{
		name: "Okoroafor Chigozie Michael",
		matricNo: "CSC/2018/113"
	},
	{
		name: "Okwuafor Julius Chukwudalu",
		matricNo: "CSC/2018/115"
	},
	{
		name: "Oladokun  Roqeeb Olatunde",
		matricNo: "CSC/2018/117"
	},
	{
		name: "Oladunjoye Olamide Isaiah",
		matricNo: "CSC/2018/118"
	},
	{
		name: "Olasukanmi Daniel Temitayo",
		matricNo: "CSC/2018/123"
	},
	{
		name: "Olatinwo Francis Olamide",
		matricNo: "CSC/2018/124"
	},
	{
		name: "Olayiwola Zainab Oluwapelumi",
		matricNo: "CSC/2018/131"
	},
	{
		name: "Oluborode Peter Taiwo",
		matricNo: "CSC/2018/134"
	},
	{
		name: "Olufemi Samuel Okikioluwa",
		matricNo: "CSC/2018/135"
	},
	{
		name: "Olugbenga Motunrayo Nifemi",
		matricNo: "CSC/2018/136"
	},
	{
		name: "Oluwayomi Olumide David",
		matricNo: "CSC/2018/139"
	},
	{
		name: "Omananyi Ruth",
		matricNo: "CSC/2018/141"
	},
	{
		name: "Omilo Samuel lawrence",
		matricNo: "CSC/2018/143"
	},
	{
		name: "Oniyide Damilola Victoria",
		matricNo: "CSC/2018/145"
	},
	{
		name: "Oroleye Iyanuoluwa Doyinsola",
		matricNo: "CSC/2018/146"
	},
	{
		name: "Osagu Victor Chibike",
		matricNo: "CSC/2018/147"
	},
	{
		name: "Oti Temitope Emmanuel",
		matricNo: "CSC/2018/149"
	},
	{
		name: "Owoh Ifeakachukwu Daniel",
		matricNo: "CSC/2018/150"
	},
	{
		name: "Owolabi Hammed Olalekan",
		matricNo: "CSC/2018/151"
	},
	{
		name: "Owolabi Precious Tamilore",
		matricNo: "CSC/2018/152"
	},
	{
		name: "Owoseni Temitope Omotayo",
		matricNo: "CSC/2018/153"
	},
	{
		name: "Oyeniyi Ifeoluwa Esther",
		matricNo: "CSC/2018/157"
	},
	{
		name: "Ozoemena Ekenedirichukwu Onyedikachi",
		matricNo: "CSC/2018/158"
	}
];

const otherGroups = [
	{
		name: "Group 1",
		url: "https://swep-group-one.netlify.app"
	},
	{
		name: "Group 2",
		url: "https://sanmi01.github.io/SWEP-Group-2-Assignment"
	},
	{
		name: "Group 3",
		url: "https://group-three-swep.netlify.app"
	},
	{
		name: "Group 4",
		url: "/"
	},
	{
		name: "Group 5",
		url: "https://grp5swep.netlify.app"
	},
	{
		name: "Group 6",
		url: "https://grp6project.netlify.app"
	},
	{
		name: "Group 7",
		url: "http://group-seven.netlify.app"
	},
	{
		name: "Group 8",
		url: "/"
	},
	{
		name: "Group 10",
		url: "/"
	}
];

const tableBody = document.querySelector(".table__body");
tableBody.innerHTML = `
  ${students
		.map(
			({ name, matricNo }, index) => `
      <div class="row">
        <div class="cell center"><span>${index + 1}</span></div>
        <div class="cell"><span class="capitalize">${name}</span></div>
        <div class="cell"><span>${matricNo}</span></div>
      </div>
  `
		)
		.join("")}
`;

const linksContainer = document.querySelector(".links__container");
linksContainer.innerHTML = `
  ${otherGroups
		.map(
			({ name, url }, index) => `
      	<a class="link__wrapper" href=${url} target="__blank">
					<span>${name}</span>
				</a>
  `
		)
		.join("")}
`;
